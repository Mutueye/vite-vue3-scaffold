import { mix, toHex } from 'color2k';
import { useThemeStore } from '@/store/theme';
import {
  DayNightModeEnum,
  MainColorEnum,
  MixModeEnum,
  TextColorEnum,
  MainColors,
  TextColors,
  BgColorEnum,
  BgColors,
  BorderColors,
  BorderColorEnum,
  ThemeConfig,
  ConfigItemTransformer,
} from './types';

export const cssVarPrepend = '--el';

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
    Object.keys(DayNightModeEnum).forEach((scheme) => {
      const themeStyleStr = generateTheme({
        targetTheme: theme,
        colorScheme: scheme as DayNightModeEnum,
      });
      if ((scheme as DayNightModeEnum) === DayNightModeEnum.light) {
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
  colorScheme: DayNightModeEnum;
}) => {
  const variablesObj = {
    ...getVarsOfMainColor(targetTheme.mainColors, colorScheme),
    ...getTextColors(targetTheme.colorSchemes[colorScheme].textColors),
    ...getVarsOfBgColor(targetTheme.colorSchemes[colorScheme].bgColors),
    ...getVarsOfBorderColor(targetTheme.colorSchemes[colorScheme].borderColors),
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

// TODO 通用的生成cssvar列表的方法
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

export const getBorderColorList = (colors: BorderColors) => {
  const list: ConfigItemTransformer[] = [];
  Object.keys(colors).forEach((colorType) => {
    const color = colors[colorType as BorderColorEnum];
    list.push({
      type: colorType,
      cssVar:
        colorType === BorderColorEnum.default
          ? `${cssVarPrepend}-border-color`
          : `${cssVarPrepend}-border-color-${colorType}`,
      value: color,
    });
  });
  return list;
};

const getVarsOfMainColor = (colors: MainColors, colorScheme: DayNightModeEnum) => {
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

const getVarsOfBorderColor = (colors: BorderColors) => {
  const vars: Record<string, string> = {};
  getBorderColorList(colors).forEach((item) => {
    vars[item.cssVar] = item.value;
  });
  return vars;
};
