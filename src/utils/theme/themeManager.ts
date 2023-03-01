import { mix, toHex } from 'color2k';
import { useThemeStore } from '@/store/theme';
import { GlobalEventBus } from '@/EventBus';

export const cssVarPrepend = '--el';

// 日间/夜间模式枚举
export enum DayNightModeEnum {
  light = 'light',
  dark = 'dark',
}

// 混合模式枚举，用于根据5种主色生成各主色的10个级别的亮色/暗色
export enum MixModeEnum {
  light = 'light',
  dark = 'dark',
}

export enum ThemeCategory {
  Color = 'color',
  TextColor = 'text-color',
  BgColor = 'bg-color',
  BorderColor = 'border-color',
  FillColor = 'fill-color',
  BorderRadius = 'border-radius',
  // 暂不启用box-shadow配置
  // BoxShadow = 'box-shadow',
  Space = 'space',
  FontSize = 'font-size',
  ComponentSize = 'component-size',
}

// 主题配置的类型： 颜色 / 数值
export enum ThemeEditorControlType {
  Color = 'color',
  Input = 'input',
}

export type ThemeEditorCategory = {
  title: string;
  category: ThemeCategory;
  configType: ThemeEditorControlType;
};

export const editorCategories: ThemeEditorCategory[] = [
  {
    title: '主题色',
    category: ThemeCategory.Color,
    configType: ThemeEditorControlType.Color,
  },
  {
    title: '文字色',
    category: ThemeCategory.TextColor,
    configType: ThemeEditorControlType.Color,
  },
  {
    title: '背景色',
    category: ThemeCategory.BgColor,
    configType: ThemeEditorControlType.Color,
  },
  {
    title: '边框色',
    category: ThemeCategory.BorderColor,
    configType: ThemeEditorControlType.Color,
  },
  {
    title: '填充色',
    category: ThemeCategory.FillColor,
    configType: ThemeEditorControlType.Color,
  },
  {
    title: '圆角',
    category: ThemeCategory.BorderRadius,
    configType: ThemeEditorControlType.Input,
  },
  {
    title: '间距',
    category: ThemeCategory.Space,
    configType: ThemeEditorControlType.Input,
  },
  {
    title: '字号',
    category: ThemeCategory.FontSize,
    configType: ThemeEditorControlType.Input,
  },
  {
    title: '组件大小',
    category: ThemeCategory.ComponentSize,
    configType: ThemeEditorControlType.Input,
  },
];

export const cssVarCodex = {
  [ThemeCategory.Color]: ['primary', 'success', 'warning', 'danger', 'info'],
  [ThemeCategory.TextColor]: ['primary', 'regular', 'secondary', 'placeholder', 'disabled'],
  [ThemeCategory.BgColor]: ['DEFAULT', 'page', 'secondary'],
  [ThemeCategory.BorderColor]: ['extra-light', 'lighter', 'light', 'DEFAULT', 'dark', 'darker'],
  [ThemeCategory.FillColor]: [
    'blank',
    'extra-light',
    'lighter',
    'light',
    'DEFAULT',
    'dark',
    'darker',
  ],
  // border radius 在 element-plus 定义的变量之外，新增了'large'和'huge'值
  [ThemeCategory.BorderRadius]: ['small', 'base', 'large', 'huge', 'round', 'circle'],
  // [ThemeCategory.BoxShadow]: ['DEFAULT', 'light', 'lighter', 'dark'],
  // space不是element-plus原有变量，例--el-space-sm
  [ThemeCategory.Space]: ['xxxs', 'xxs', 'xs', 'sm', 'md', 'DEFAULT', 'lg', 'xl', 'xxl', 'xxxl'],
  [ThemeCategory.FontSize]: ['extra-small', 'small', 'base', 'medium', 'large', 'extra-large'],
  [ThemeCategory.ComponentSize]: ['small', 'DEFAULT', 'large'],
} as const;

export type ThemeConfig = { [K in ThemeCategory]: Record<typeof cssVarCodex[K][number], string> };

export interface UITheme {
  name?: string;
  config: {
    [T in DayNightModeEnum]: ThemeConfig;
  };
}

export const mixModeBaseColors = {
  [DayNightModeEnum.light]: {
    light: '#FFFFFF',
    dark: '#000000',
  },
  // light & dark are reversed in dark mode
  [DayNightModeEnum.dark]: {
    light: '#000000',
    dark: '#FFFFFF',
  },
};

export const initThemeStyle = () => {
  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  head.appendChild(style);
  style.setAttribute('id', 'theme');
  setThemeVariables();
};

export const setThemeVariables = () => {
  const styleEl = document.head.querySelector('#theme') as HTMLElement;
  let styleStr = '';
  const { themeList } = useThemeStore();
  themeList.forEach((theme, index) => {
    Object.keys(DayNightModeEnum).forEach((mode) => {
      const themeStyleStr = generateThemeStyle({
        targetTheme: theme,
        mode: mode as DayNightModeEnum,
      });
      if ((mode as DayNightModeEnum) === DayNightModeEnum.light) {
        styleStr += `.theme${index} ${themeStyleStr}`;
      } else {
        styleStr += `.theme${index}.${mode} ${themeStyleStr}`;
      }
    });
  });
  styleEl.innerText = styleStr;
  GlobalEventBus.emit('onSetThemeVariables');
};

const generateThemeStyle = ({
  targetTheme,
  mode,
}: {
  targetTheme: UITheme;
  mode: DayNightModeEnum;
}) => {
  const config = targetTheme.config[mode];
  let styleStr = '';
  let configKey: ThemeCategory;
  for (configKey in config) {
    const oneConfig = config[configKey];
    Object.keys(oneConfig).forEach((valKey) => {
      const cssVarName =
        valKey === 'DEFAULT'
          ? `${cssVarPrepend}-${configKey}`
          : `${cssVarPrepend}-${configKey}-${valKey}`;
      styleStr += `${cssVarName}: ${oneConfig[valKey as keyof typeof oneConfig]}; `;
      if (configKey === ThemeCategory.Color) {
        Object.keys(MixModeEnum).forEach((mixmode) => {
          for (let i = 1; i < 10; i++) {
            styleStr += `${cssVarName}-${mixmode}-${i}: ${toHex(
              mix(
                oneConfig[valKey as keyof typeof oneConfig],
                mixModeBaseColors[mode][mixmode as MixModeEnum],
                i * 0.1,
              ),
            )}; `;
          }
        });
      }
    });
  }
  // --el-color-error = --el-color-danger; --el-bg-color-overlay = --el-bg-color;
  styleStr = `{${styleStr} --el-color-error: var(--el-color-danger); --el-bg-color-overlay: var(--el-bg-color);}`;
  return styleStr;
};
