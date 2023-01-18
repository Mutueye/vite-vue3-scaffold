import { mix, toHex } from 'color2k';

import {
  ColorSchemeEnum,
  MainColorEnum,
  ThemeEnum,
  MixModeEnum,
  TextColorEnum,
  MainColors,
  TextColors,
  BgColorEnum,
  BgColors,
} from './types';
import { themeConfig } from './themeConfig';

export const cssVarPrepend = '--el';

export const mixModeBaseColors = {
  [ColorSchemeEnum.light]: {
    light: '#FFFFFF',
    dark: '#000000',
  },
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
  Object.keys(ThemeEnum).forEach((theme) => {
    Object.keys(ColorSchemeEnum).forEach((scheme) => {
      const themeStyleStr = generateTheme({
        theme: theme as ThemeEnum,
        colorScheme: scheme as ColorSchemeEnum,
      });
      if ((scheme as ColorSchemeEnum) === ColorSchemeEnum.light) {
        styleStr += `.${theme} ${themeStyleStr}`;
      } else {
        styleStr += `.${theme}.${scheme} ${themeStyleStr}`;
      }
    });
  });
  // styleEl.appendChild(document.createTextNode(styleStr));
  styleEl.innerText = styleStr;
};

// 生成具体某个主题和模式下的css变量样式
const generateTheme = ({
  theme,
  colorScheme,
}: {
  theme: ThemeEnum;
  colorScheme: ColorSchemeEnum;
}) => {
  const targetTheme = themeConfig[theme];
  const variablesObj = {
    ...getMainColors(targetTheme.mainColors, colorScheme),
    ...getTextColors(targetTheme.colorSchemes[colorScheme].textColors),
    ...getBgColors(targetTheme.colorSchemes[colorScheme].bgColors),
  };
  let styleStr = '';
  Object.keys(variablesObj).forEach((key) => {
    styleStr += `${key}: ${variablesObj[key]};`;
  });
  return `{${styleStr}}`;
};

const getMainColors = (colors: MainColors, colorScheme: ColorSchemeEnum) => {
  const vars: Record<string, string> = {};
  Object.keys(colors).forEach((colorType) => {
    const mainColor = colors[colorType as MainColorEnum];
    vars[`${cssVarPrepend}-color-${colorType}`] = mainColor;
    Object.keys(MixModeEnum).forEach((mode) => {
      for (let i = 1; i < 10; i++) {
        vars[`${cssVarPrepend}-color-${colorType}-${mode}-${i}`] = toHex(
          mix(mainColor, mixModeBaseColors[colorScheme][mode as MixModeEnum], i * 0.1),
        );
      }
    });
  });
  return vars;
};

const getTextColors = (colors: TextColors) => {
  const vars: Record<string, string> = {};
  Object.keys(colors).forEach((colorType) => {
    vars[`${cssVarPrepend}-text-color-${colorType}`] = colors[colorType as TextColorEnum];
  });
  return vars;
};

const getBgColors = (colors: BgColors) => {
  const vars: Record<string, string> = {};
  Object.keys(colors).forEach((colorType) => {
    if (colorType === BgColorEnum.default) {
      vars[`${cssVarPrepend}-bg-color`] = colors[colorType as BgColorEnum];
    } else {
      vars[`${cssVarPrepend}-bg-color-${colorType}`] = colors[colorType as BgColorEnum];
    }
  });
  return vars;
};
