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
  secondary = 'secondary',
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

// UI主题配置
export interface ThemeConfig {
  name?: string;
  mainColors: MainColors;
  colorSchemes: ColorSchemeConfig;
}
