import { DayNightModeEnum } from './types';

const cssVarPrepend = '--el';

export enum ThemeCategory {
  Color = 'color',
  TextColor = 'text-color',
  BgColor = 'bg-color',
  BorderColor = 'border-color',
  FillColor = 'fill-color',
  BorderRadius = 'border-radius',
  // BoxShadow = 'box-shadow',
}

export const cssVarCodex = {
  [ThemeCategory.Color]: ['primary', 'success', 'warning', 'danger', 'error', 'info'],
  [ThemeCategory.TextColor]: ['primary', 'regular', 'secondary', 'placeholder', 'disabled'],
  [ThemeCategory.BgColor]: ['DEFAULT', 'overlay', 'page', 'secondary'],
  [ThemeCategory.BorderColor]: ['DEFAULT', 'light', 'lighter', 'extra-light', 'dark', 'darker'],
  [ThemeCategory.FillColor]: [
    'DEFAULT',
    'light',
    'lighter',
    'extra-light',
    'dark',
    'darker',
    'blank',
  ],
  // border radius 在 element-plus 定义的变量之外，新增了'large'值
  [ThemeCategory.BorderRadius]: ['base', 'small', 'round', 'large', 'circle'],
  // [ThemeCategory.BoxShadow]: ['DEFAULT', 'light', 'lighter', 'dark'],
} as const;

type ThemeConfig = { [K in ThemeCategory]: Record<typeof cssVarCodex[K][number], string> };

export interface UITheme {
  name?: string;
  config: {
    [T in DayNightModeEnum]: ThemeConfig;
  };
}

export const defaultUITheme: UITheme = {
  config: {
    light: {
      color: {
        primary: '#217aff',
        success: '#67c23a',
        warning: '#f2711c',
        danger: '#db2828',
        error: '#db2828',
        info: '#96979c',
      },
      'text-color': {
        primary: '#131b26',
        regular: '#5f6165',
        secondary: '#96979c',
        placeholder: '#cacbd0',
        disabled: '#c0c4cc',
      },
      'bg-color': { DEFAULT: '#ffffff', overlay: '#ffffff', page: '#f7f8fd', secondary: '#f2f3fa' },
      'border-color': {
        DEFAULT: '#dcdfe6',
        light: '#e4e7ed',
        lighter: '#ebeef5',
        'extra-light': '#f2f6fc',
        dark: '#d4d7de',
        darker: '#cdd0d6',
      },
      'fill-color': {
        DEFAULT: '#f0f2f5',
        light: '#f5f7fa',
        lighter: '#fafafa',
        'extra-light': '#fafcff',
        dark: '#ebedf0',
        darker: '#e6e8eb',
        blank: '#ffffff',
      },
      'border-radius': {
        base: '4px',
        small: '2px',
        large: '6px',
        round: '20px',
        circle: '100%',
      },
    },
    dark: {
      color: {
        primary: '#217aff',
        success: '#67c23a',
        warning: '#f2711c',
        danger: '#db2828',
        error: '#db2828',
        info: '#96979c',
      },
      'text-color': {
        primary: '#ffffff',
        regular: '#cfd3dc',
        secondary: '#a3a6ad',
        placeholder: '#8d9095',
        disabled: '#6c6e72',
      },
      'bg-color': { DEFAULT: '#28303d', overlay: '#28303d', page: '#1b2431', secondary: '#0e1825' },
      'border-color': {
        DEFAULT: '#4C4D4F',
        light: '#414243',
        lighter: '#363637',
        'extra-light': '#2B2B2C',
        dark: '#58585B',
        darker: '#636466',
      },
      'fill-color': {
        DEFAULT: '#303030',
        light: '#262727',
        lighter: '#1D1D1D',
        'extra-light': '#191919',
        dark: '#39393A',
        darker: '#424243',
        blank: 'transparent',
      },
      'border-radius': {
        base: '4px',
        small: '2px',
        large: '6px',
        round: '20px',
        circle: '100%',
      },
    },
  },
};

export const defaultUIThemeList: UITheme[] = [
  {
    name: 'ATHENA',
    config: Object.assign({}, defaultUITheme.config),
  },
  {
    name: 'UPLUS',
    config: {
      light: {
        color: {
          primary: '#217aff',
          success: '#67c23a',
          warning: '#f2711c',
          danger: '#db2828',
          error: '#db2828',
          info: '#96979c',
        },
        'text-color': {
          primary: '#131b26',
          regular: '#5f6165',
          secondary: '#96979c',
          placeholder: '#cacbd0',
          disabled: '#c0c4cc',
        },
        'bg-color': {
          DEFAULT: '#ffffff',
          overlay: '#ffffff',
          page: '#f7f8fd',
          secondary: '#f2f3fa',
        },
        'border-color': {
          DEFAULT: '#dcdfe6',
          light: '#e4e7ed',
          lighter: '#ebeef5',
          'extra-light': '#f2f6fc',
          dark: '#d4d7de',
          darker: '#cdd0d6',
        },
        'fill-color': {
          DEFAULT: '#f0f2f5',
          light: '#f5f7fa',
          lighter: '#fafafa',
          'extra-light': '#fafcff',
          dark: '#ebedf0',
          darker: '#e6e8eb',
          blank: '#ffffff',
        },
        'border-radius': {
          base: '4px',
          small: '2px',
          large: '6px',
          round: '20px',
          circle: '100%',
        },
      },
      dark: {
        color: {
          primary: '#217aff',
          success: '#67c23a',
          warning: '#f2711c',
          danger: '#db2828',
          error: '#db2828',
          info: '#96979c',
        },
        'text-color': {
          primary: '#ffffff',
          regular: '#cfd3dc',
          secondary: '#a3a6ad',
          placeholder: '#8d9095',
          disabled: '#6c6e72',
        },
        'bg-color': {
          DEFAULT: '#28303d',
          overlay: '#28303d',
          page: '#1b2431',
          secondary: '#0e1825',
        },
        'border-color': {
          DEFAULT: '#4C4D4F',
          light: '#414243',
          lighter: '#363637',
          'extra-light': '#2B2B2C',
          dark: '#58585B',
          darker: '#636466',
        },
        'fill-color': {
          DEFAULT: '#303030',
          light: '#262727',
          lighter: '#1D1D1D',
          'extra-light': '#191919',
          dark: '#39393A',
          darker: '#424243',
          blank: 'transparent',
        },
        'border-radius': {
          base: '4px',
          small: '2px',
          large: '6px',
          round: '20px',
          circle: '100%',
        },
      },
    },
  },
  {
    name: 'PURPLE',
    config: {
      light: {
        color: {
          primary: '#217aff',
          success: '#67c23a',
          warning: '#f2711c',
          danger: '#db2828',
          error: '#db2828',
          info: '#96979c',
        },
        'text-color': {
          primary: '#131b26',
          regular: '#5f6165',
          secondary: '#96979c',
          placeholder: '#cacbd0',
          disabled: '#c0c4cc',
        },
        'bg-color': {
          DEFAULT: '#ffffff',
          overlay: '#ffffff',
          page: '#f7f8fd',
          secondary: '#f2f3fa',
        },
        'border-color': {
          DEFAULT: '#dcdfe6',
          light: '#e4e7ed',
          lighter: '#ebeef5',
          'extra-light': '#f2f6fc',
          dark: '#d4d7de',
          darker: '#cdd0d6',
        },
        'fill-color': {
          DEFAULT: '#f0f2f5',
          light: '#f5f7fa',
          lighter: '#fafafa',
          'extra-light': '#fafcff',
          dark: '#ebedf0',
          darker: '#e6e8eb',
          blank: '#ffffff',
        },
        'border-radius': {
          base: '4px',
          small: '2px',
          large: '6px',
          round: '20px',
          circle: '100%',
        },
      },
      dark: {
        color: {
          primary: '#217aff',
          success: '#67c23a',
          warning: '#f2711c',
          danger: '#db2828',
          error: '#db2828',
          info: '#96979c',
        },
        'text-color': {
          primary: '#ffffff',
          regular: '#cfd3dc',
          secondary: '#a3a6ad',
          placeholder: '#8d9095',
          disabled: '#6c6e72',
        },
        'bg-color': {
          DEFAULT: '#28303d',
          overlay: '#28303d',
          page: '#1b2431',
          secondary: '#0e1825',
        },
        'border-color': {
          DEFAULT: '#4C4D4F',
          light: '#414243',
          lighter: '#363637',
          'extra-light': '#2B2B2C',
          dark: '#58585B',
          darker: '#636466',
        },
        'fill-color': {
          DEFAULT: '#303030',
          light: '#262727',
          lighter: '#1D1D1D',
          'extra-light': '#191919',
          dark: '#39393A',
          darker: '#424243',
          blank: 'transparent',
        },
        'border-radius': {
          base: '4px',
          small: '2px',
          large: '6px',
          round: '20px',
          circle: '100%',
        },
      },
    },
  },
];

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
  defaultUIThemeList.forEach((theme, index) => {
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
      styleStr += `${cssVarPrepend}-${configKey}-${valKey}: ${
        oneConfig[valKey as keyof typeof oneConfig]
      }; `;
    });
  }
  return `{${styleStr}}`;
};
