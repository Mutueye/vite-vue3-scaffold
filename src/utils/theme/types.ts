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

// main colors enum
export enum MainColorEnum {
  primary = 'primary',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
  error = 'error',
  info = 'info',
}

// text colors enum
export enum TextColorEnum {
  primary = 'primary',
  regular = 'regular',
  secondary = 'secondary',
  placeholder = 'placeholder',
  disabled = 'disabled',
}

// background colors enum
export enum BgColorEnum {
  default = 'DEFAULT',
  overlay = 'overlay',
  page = 'page',
  // element-plus之外的扩展类型
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

// UI Theme config
export interface ThemeConfig {
  name?: string;
  mainColors: MainColors;
  colorSchemes: ColorSchemeConfig;
}

// helper type for transform config to css var
export type ConfigItemTransformer = {
  type: string;
  cssVar: string;
  value: string;
};
