// UI主题枚举
export enum ThemeEnum {
  blue = 'blue',
  purple = 'purple',
}

// 日间/夜间模式枚举
export enum ColorSchemeEnum {
  light = 'light',
  dark = 'dark',
}

// 混合模式枚举
export enum MixModeEnum {
  light = 'light',
  dark = 'dark',
}

// 主要颜色类型枚举
export enum MainColorEnum {
  primary = 'primary',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
  error = 'error',
  info = 'info',
}

// 字色类型枚举
export enum TextColorEnum {
  primary = 'primary',
  regular = 'regular',
  secondary = 'secondary',
  placeholder = 'placeholder',
  disabled = 'disabled',
}

// 背景色类型枚举
export enum BgColorEnum {
  default = 'DEFAULT',
  overlay = 'overlay',
  page = 'page',
}

export type MainColors = {
  [key in MainColorEnum]: string;
};

export type TextColors = {
  [key in TextColorEnum]: string;
};

export type BgColors = {
  [key in BgColorEnum]: string;
};

export type ColorSchemeConfig = {
  [key in ColorSchemeEnum]: {
    textColors: TextColors;
    bgColors: BgColors;
  };
};

// 单个UI主题配置
export interface ThemeConfig {
  mainColors: MainColors;
  colorSchemes: ColorSchemeConfig;
}

// 全局主题配置
export type AllThemeConfig = {
  [key in ThemeEnum]: ThemeConfig;
};
