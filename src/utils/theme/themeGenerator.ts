import { mix, toHex } from 'color2k';
import { useThemeStore } from '@/store/theme';
import {
  ColorSchemeEnum,
  MainColorEnum,
  MixModeEnum,
  TextColorEnum,
  MainColors,
  TextColors,
  BgColorEnum,
  BgColors,
  ThemeConfig,
  ConfigItemTransformer,
} from './types';

export const cssVarPrepend = '--el';

export const mixModeBaseColors = {
  [ColorSchemeEnum.light]: {
    light: '#FFFFFF',
    dark: '#000000',
  },
  // light & dark are reversed in dark mode
  [ColorSchemeEnum.dark]: {
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
    Object.keys(ColorSchemeEnum).forEach((scheme) => {
      const themeStyleStr = generateTheme({
        targetTheme: theme,
        colorScheme: scheme as ColorSchemeEnum,
      });
      if ((scheme as ColorSchemeEnum) === ColorSchemeEnum.light) {
        styleStr += `.theme${index} ${themeStyleStr}`;
      } else {
        styleStr += `.theme${index}.${scheme} ${themeStyleStr}`;
      }
    });
  });

  // styleEl.appendChild(document.createTextNode(styleStr));
  styleEl.innerText = styleStr;
};

// 生成具体某个主题和模式下的css变量样式
export const generateTheme = ({
  targetTheme,
  colorScheme,
}: {
  targetTheme: ThemeConfig;
  colorScheme: ColorSchemeEnum;
}) => {
  const variablesObj = {
    ...getVarsOfMainColor(targetTheme.mainColors, colorScheme),
    ...getTextColors(targetTheme.colorSchemes[colorScheme].textColors),
    ...getVarsOfBgColor(targetTheme.colorSchemes[colorScheme].bgColors),
  };
  let styleStr = '';
  Object.keys(variablesObj).forEach((key) => {
    styleStr += `${key}: ${variablesObj[key]};`;
  });
  return `{${styleStr}}`;
};

export const getMainColorList = (colors: MainColors) => {
  const list: ConfigItemTransformer[] = [];
  Object.keys(colors).forEach((colorType) => {
    const color = colors[colorType as MainColorEnum];
    list.push({
      type: colorType,
      cssVar: `${cssVarPrepend}-color-${colorType}`,
      value: color,
    });
  });
  return list;
};

export const getTextColorList = (colors: TextColors) => {
  const list: ConfigItemTransformer[] = [];
  Object.keys(colors).forEach((colorType) => {
    const color = colors[colorType as TextColorEnum];
    list.push({
      type: colorType,
      cssVar: `${cssVarPrepend}-text-color-${colorType}`,
      value: color,
    });
  });
  return list;
};

export const getBgColorList = (colors: BgColors) => {
  const list: ConfigItemTransformer[] = [];
  Object.keys(colors).forEach((colorType) => {
    const color = colors[colorType as BgColorEnum];
    list.push({
      type: colorType,
      cssVar:
        colorType === BgColorEnum.default
          ? `${cssVarPrepend}-bg-color`
          : `${cssVarPrepend}-bg-color-${colorType}`,
      value: color,
    });
  });
  return list;
};

const getVarsOfMainColor = (colors: MainColors, colorScheme: ColorSchemeEnum) => {
  const vars: Record<string, string> = {};
  getMainColorList(colors).forEach((item) => {
    vars[item.cssVar] = item.value;
    Object.keys(MixModeEnum).forEach((mode) => {
      for (let i = 1; i < 10; i++) {
        vars[`${cssVarPrepend}-color-${item.type}-${mode}-${i}`] = toHex(
          mix(item.value, mixModeBaseColors[colorScheme][mode as MixModeEnum], i * 0.1),
        );
      }
    });
  });
  return vars;
};

const getTextColors = (colors: TextColors) => {
  const vars: Record<string, string> = {};
  getTextColorList(colors).forEach((item) => {
    vars[item.cssVar] = item.value;
  });
  return vars;
};

const getVarsOfBgColor = (colors: BgColors) => {
  const vars: Record<string, string> = {};
  getBgColorList(colors).forEach((item) => {
    vars[item.cssVar] = item.value;
  });
  return vars;
};
