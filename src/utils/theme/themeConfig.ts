import type { UITheme } from './themeManager';

export const defaultThemeConfig: UITheme = {
  config: {
    light: {
      color: {
        primary: '#217aff',
        success: '#67c23a',
        warning: '#f2711c',
        danger: '#db2828',
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
        page: '#f7f8fd',
        secondary: '#eef0f8',
      },
      'border-color': {
        'extra-light': '#f2f6fc',
        lighter: '#ebeef5',
        light: '#e4e7ed',
        DEFAULT: '#dcdfe6',
        dark: '#d4d7de',
        darker: '#cdd0d6',
      },
      'fill-color': {
        blank: '#ffffff',
        'extra-light': '#fafcff',
        lighter: '#f8fafc',
        light: '#f5f7fa',
        DEFAULT: '#f0f2f5',
        dark: '#ebedf0',
        darker: '#e6e8eb',
      },
      'border-radius': {
        small: '4px',
        base: '8px',
        large: '12px',
        huge: '16px',
        round: '20px',
        circle: '100%',
      },
      space: {
        xxxs: '4px',
        xxs: '8px',
        xs: '12px',
        sm: '16px',
        md: '20px',
        DEFAULT: '24px',
        lg: '28px',
        xl: '32px',
        xxl: '36px',
        xxxl: '40px',
      },
      'font-size': {
        'extra-small': '12px',
        small: '13px',
        base: '14px',
        medium: '16px',
        large: '18px',
        'extra-large': '20px',
      },
      'component-size': {
        small: '24px',
        DEFAULT: '32px',
        large: '40px',
      },
    },
    dark: {
      color: {
        primary: '#217aff',
        success: '#67c23a',
        warning: '#f2711c',
        danger: '#db2828',
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
        page: '#1b2431',
        secondary: '#171f2b',
      },
      'border-color': {
        'extra-light': '#313a47',
        lighter: '#3a4554',
        light: '#444f5e',
        DEFAULT: '#576273',
        dark: '#677282',
        darker: '#707b8c',
      },
      'fill-color': {
        blank: 'transparent',
        'extra-light': '#252c38',
        lighter: '#222b38',
        light: '#1f2733',
        DEFAULT: '#1e2633',
        dark: '#1a222e',
        darker: '#171e29',
      },
      'border-radius': {
        small: '4px',
        base: '8px',
        large: '12px',
        huge: '16px',
        round: '20px',
        circle: '100%',
      },
      space: {
        xxxs: '4px',
        xxs: '8px',
        xs: '12px',
        sm: '16px',
        md: '20px',
        DEFAULT: '24px',
        lg: '28px',
        xl: '32px',
        xxl: '36px',
        xxxl: '40px',
      },
      'font-size': {
        'extra-small': '12px',
        small: '13px',
        base: '14px',
        medium: '16px',
        large: '18px',
        'extra-large': '20px',
      },
      'component-size': {
        small: '24px',
        DEFAULT: '32px',
        large: '40px',
      },
    },
  },
};

export const defaultThemeList: UITheme[] = [
  {
    name: 'ATHENA',
    config: Object.assign({}, defaultThemeConfig.config),
  },
  {
    name: 'UPLUS',
    config: {
      light: {
        color: {
          primary: '#67aef7',
          success: '#a8d3a6',
          warning: '#f39800',
          danger: '#fc7373',
          info: '#969eb3',
        },
        'text-color': {
          primary: '#222222',
          regular: '#666666',
          secondary: '#999999',
          placeholder: '#bbbbbb',
          disabled: '#cccccc',
        },
        'bg-color': {
          DEFAULT: '#ffffff',
          page: '#f8f9fa',
          secondary: '#f2f3f4',
        },
        'border-color': {
          'extra-light': '#f2f6fc',
          lighter: '#ebeef5',
          light: '#e4e7ed',
          DEFAULT: '#dcdfe6',
          dark: '#d4d7de',
          darker: '#cdd0d6',
        },
        'fill-color': {
          blank: '#ffffff',
          'extra-light': '#fafcff',
          lighter: '#fafafa',
          light: '#f5f7fa',
          DEFAULT: '#f0f2f5',
          dark: '#ebedf0',
          darker: '#e6e8eb',
        },
        'border-radius': {
          small: '2px',
          base: '4px',
          large: '6px',
          huge: '8px',
          round: '20px',
          circle: '100%',
        },
        space: {
          xxxs: '4px',
          xxs: '8px',
          xs: '12px',
          sm: '16px',
          md: '20px',
          DEFAULT: '24px',
          lg: '28px',
          xl: '32px',
          xxl: '36px',
          xxxl: '40px',
        },
        'font-size': {
          'extra-small': '12px',
          small: '13px',
          base: '14px',
          medium: '16px',
          large: '18px',
          'extra-large': '20px',
        },
        'component-size': {
          small: '24px',
          DEFAULT: '32px',
          large: '40px',
        },
      },
      dark: {
        color: {
          primary: '#67aef7',
          success: '#a8d3a6',
          warning: '#f39800',
          danger: '#fc7373',
          info: '#969eb3',
        },
        'text-color': {
          primary: '#e5eaf3',
          regular: '#cfd3dc',
          secondary: '#a3a6ad',
          placeholder: '#8d9095',
          disabled: '#6c6e72',
        },
        'bg-color': {
          DEFAULT: '#252525',
          page: '#181818',
          secondary: '#111111',
        },
        'border-color': {
          'extra-light': '#2B2B2C',
          lighter: '#363637',
          light: '#414243',
          DEFAULT: '#4C4D4F',
          dark: '#58585B',
          darker: '#636466',
        },
        'fill-color': {
          blank: 'transparent',
          'extra-light': '#191919',
          lighter: '#1D1D1D',
          light: '#262727',
          DEFAULT: '#303030',
          dark: '#39393A',
          darker: '#424243',
        },
        'border-radius': {
          small: '2px',
          base: '4px',
          large: '6px',
          huge: '8px',
          round: '20px',
          circle: '100%',
        },
        space: {
          xxxs: '4px',
          xxs: '8px',
          xs: '12px',
          sm: '16px',
          md: '20px',
          DEFAULT: '24px',
          lg: '28px',
          xl: '32px',
          xxl: '36px',
          xxxl: '40px',
        },
        'font-size': {
          'extra-small': '12px',
          small: '13px',
          base: '14px',
          medium: '16px',
          large: '18px',
          'extra-large': '20px',
        },
        'component-size': {
          small: '24px',
          DEFAULT: '32px',
          large: '40px',
        },
      },
    },
  },
  {
    name: 'PURPLE',
    config: {
      light: {
        color: {
          primary: '#5549ff',
          success: '#33d3a5',
          warning: '#edaa28',
          danger: '#f8739c',
          info: '#969eb3',
        },
        'text-color': {
          primary: '#222222',
          regular: '#666666',
          secondary: '#999999',
          placeholder: '#bbbbbb',
          disabled: '#cccccc',
        },
        'bg-color': {
          DEFAULT: '#ffffff',
          page: '#f5f4fd',
          secondary: '#eeecfa',
        },
        'border-color': {
          'extra-light': '#f2f6fc',
          lighter: '#ebeef5',
          light: '#e4e7ed',
          DEFAULT: '#dcdfe6',
          dark: '#d4d7de',
          darker: '#cdd0d6',
        },
        'fill-color': {
          blank: '#ffffff',
          'extra-light': '#fafcff',
          lighter: '#fafafa',
          light: '#f5f7fa',
          DEFAULT: '#f0f2f5',
          dark: '#ebedf0',
          darker: '#e6e8eb',
        },
        'border-radius': {
          small: '2px',
          base: '4px',
          large: '6px',
          huge: '8px',
          round: '20px',
          circle: '100%',
        },
        space: {
          xxxs: '4px',
          xxs: '8px',
          xs: '12px',
          sm: '16px',
          md: '20px',
          DEFAULT: '24px',
          lg: '28px',
          xl: '32px',
          xxl: '36px',
          xxxl: '40px',
        },
        'font-size': {
          'extra-small': '12px',
          small: '13px',
          base: '14px',
          medium: '16px',
          large: '18px',
          'extra-large': '20px',
        },
        'component-size': {
          small: '24px',
          DEFAULT: '32px',
          large: '40px',
        },
      },
      dark: {
        color: {
          primary: '#5549ff',
          success: '#33d3a5',
          warning: '#edaa28',
          danger: '#f8739c',
          info: '#969eb3',
        },
        'text-color': {
          primary: '#e5eaf3',
          regular: '#cfd3dc',
          secondary: '#a3a6ad',
          placeholder: '#8d9095',
          disabled: '#6c6e72',
        },
        'bg-color': {
          DEFAULT: '#252433',
          page: '#181726',
          secondary: '#121123',
        },
        'border-color': {
          'extra-light': '#2B2B2C',
          lighter: '#363637',
          light: '#414243',
          DEFAULT: '#4C4D4F',
          dark: '#58585B',
          darker: '#636466',
        },
        'fill-color': {
          blank: 'transparent',
          'extra-light': '#191919',
          lighter: '#1D1D1D',
          light: '#262727',
          DEFAULT: '#303030',
          dark: '#39393A',
          darker: '#424243',
        },
        'border-radius': {
          small: '2px',
          base: '4px',
          large: '6px',
          huge: '8px',
          round: '20px',
          circle: '100%',
        },
        space: {
          xxxs: '4px',
          xxs: '8px',
          xs: '12px',
          sm: '16px',
          md: '20px',
          DEFAULT: '24px',
          lg: '28px',
          xl: '32px',
          xxl: '36px',
          xxxl: '40px',
        },
        'font-size': {
          'extra-small': '12px',
          small: '13px',
          base: '14px',
          medium: '16px',
          large: '18px',
          'extra-large': '20px',
        },
        'component-size': {
          small: '24px',
          DEFAULT: '32px',
          large: '40px',
        },
      },
    },
  },
];

/*********************************************************
element-plus css变量参考列表
// 黑/白色
--el-color-white: #ffffff;
--el-color-black: #000000;

// 6种主题色及其多级混合色
--el-color-primary: #409eff; // 主色调
// primary的多级混合色，级别从1到9，
// 日间模式 light越来越浅 dark越来越深，夜间模式则相反
// --el-color-primary-light-1 ~ --el-color-primary-light-9
// --el-color-primary-dark-1 ~ --el-color-primary-dark-9
--el-color-success: #67c23a; // 成功
// --el-color-success-light-1 ~ --el-color-success-light-9
// --el-color-success-dark-1 ~ --el-color-success-dark-9
--el-color-warning: #e6a23c; // 警告
// --el-color-warning-light-1 ~ --el-color-warning-light-9
// --el-color-warning-dark-1 ~ --el-color-warning-dark-9
--el-color-danger: #f56c6c; // 危险
// --el-color-danger-light-1 ~ --el-color-danger-light-9
// --el-color-danger-dark-1 ~ --el-color-danger-dark-9
--el-color-error: #f56c6c; // 错误
// --el-color-error-light-1 ~ --el-color-error-light-9
//--el-color-error-dark-1 ~ --el-color-error-dark-9
--el-color-info: #909399; // 信息
// --el-color-info-light-1 ~ --el-color-info-light-9
// --el-color-info-dark-1 ~ --el-color-info-dark-9

// 背景色 默认
--el-bg-color: #ffffff;
--el-bg-color-page: #f2f3f5;
--el-bg-color-overlay: #ffffff;

// 文字色 默认
--el-text-color-primary: #303133;
--el-text-color-regular: #606266;
--el-text-color-secondary: #909399;
--el-text-color-placeholder: #a8abb2;
--el-text-color-disabled: #c0c4cc;

// 边框颜色 默认
// --el-border-color: #dcdfe6;
// --el-border-color-light: #e4e7ed;
// --el-border-color-lighter: #ebeef5;
// --el-border-color-extra-light: #f2f6fc;
// --el-border-color-dark: #d4d7de;
// --el-border-color-darker: #cdd0d6;

// 填充色 默认
// --el-fill-color: #f0f2f5;
// --el-fill-color-light: #f5f7fa;
// --el-fill-color-lighter: #fafafa;
// --el-fill-color-extra-light: #fafcff;
// --el-fill-color-dark: #ebedf0;
// --el-fill-color-darker: #e6e8eb;
// --el-fill-color-blank: #ffffff;

// 阴影 默认
// --el-box-shadow: 0 12px 32px 4px rgb(0 0 0 / 4%), 0 8px 20px rgb(0 0 0 8%);
// --el-box-shadow-light: 0px 0px 12px rgb(0 0 0 / 12%);
// --el-box-shadow-lighter: 0px 0px 6px rgb(0 0 0 / 12%);
// --el-box-shadow-dark: 0px 16px 48px 16px rgb(0 0 0 / 8%), 0px 12px 32px rgb(0 0 0 / 12%),
//   0px 8px 16px -8px rgb(0 0 0 / 16%);

// disabled色 默认
// --el-disabled-bg-color: var(--el-fill-color-light);
// --el-disabled-text-color: var(--el-text-color-placeholder);
// --el-disabled-border-color: var(--el-border-color-light);

// overlay colors 默认
// --el-overlay-color: rgb(0 0 0 / 80%);
// --el-overlay-color-light: rgb(0 0 0 / 70%);
// --el-overlay-color-lighter: rgb(0 0 0 / 50%);

// mask colors 默认
// --el-mask-color: rgb(255 255 255 / 90%);
// --el-mask-color-extra-light: rgb(255 255 255 / 30%);

// border vars 默认
// --el-border-width: 1px;
// --el-border-style: solid;
// --el-border-color-hover: var(--el-text-color-disabled);
// --el-border: var(--el-border-width) var(--el-border-style) var(--el-border-color);

// 字号 字体 字重 行高 默认
// --el-font-size-extra-large: 20px;
// --el-font-size-large: 18px;
// --el-font-size-medium: 16px;
// --el-font-size-base: 14px;
// --el-font-size-small: 13px;
// --el-font-size-extra-small: 12px;
// --el-font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei','微软雅黑',Arial,sans-serif;
// --el-font-weight-primary: 500;
// --el-font-line-height-primary: 24px;

// z-index范围 默认
// --el-index-normal: 1;
// --el-index-top: 1000;
// --el-index-popper: 2000;

// 圆角 border-radius 默认
// --el-border-radius-base: 4px;
// --el-border-radius-small: 2px;
// --el-border-radius-round: 20px;
// --el-border-radius-circle: 100%;

// transition动画 默认
// --el-transition-duration: 0.3s;
// --el-transition-duration-fast: 0.2s;
// --el-transition-function-ease-in-out-bezier: cubic-bezier(0.645, 0.045, 0.355, 1);
// --el-transition-function-fast-bezier: cubic-bezier(0.23, 1, 0.32, 1);
// --el-transition-all: all var(--el-transition-duration)
//   var(--el-transition-function-ease-in-out-bezier);
// --el-transition-fade: opacity var(--el-transition-duration)
//   var(--el-transition-function-fast-bezier);
// --el-transition-md-fade: transform var(--el-transition-duration)
//     var(--el-transition-function-fast-bezier),
//   opacity var(--el-transition-duration) var(--el-transition-function-fast-bezier);
// --el-transition-fade-linear: opacity var(--el-transition-duration-fast) linear;
// --el-transition-border: border-color var(--el-transition-duration-fast)
//   var(--el-transition-function-ease-in-out-bezier);
// --el-transition-box-shadow: box-shadow var(--el-transition-duration-fast)
//   var(--el-transition-function-ease-in-out-bezier);
// --el-transition-color: color var(--el-transition-duration-fast)
//   var(--el-transition-function-ease-in-out-bezier);

// 组件大小 默认
// --el-component-size-large: 40px;
// --el-component-size: 32px;
// --el-component-size-small: 24px;

// el-menu组件相关变量
// --el-menu-active-color: var(--el-color-primary);
// --el-menu-text-color: var(--el-text-color-primary);
// --el-menu-hover-text-color: var(--el-color-primary);
// --el-menu-bg-color: var(--el-fill-color-blank);
// --el-menu-hover-bg-color: var(--el-color-primary-light-9);
// --el-menu-item-height: 56px;
// --el-menu-sub-item-height: calc(var(--el-menu-item-height) - 6px);
// --el-menu-horizontal-sub-item-height: 36px;
// --el-menu-item-font-size: var(--el-font-size-base);
// --el-menu-item-hover-fill: var(--el-color-primary-light-9);
// --el-menu-border-color: var(--el-border-color);
// --el-menu-base-level-padding: 20px;
// --el-menu-level-padding: 20px;
// --el-menu-icon-width: 24px;
*********************************************************/
