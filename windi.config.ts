import { defineConfig } from 'windicss/helpers';
import colors from 'windicss/colors';
import plugin from 'windicss/plugin';

const defaultSizes = {
  space_xs: '8px',
  space_sm: '16px',
  space_md: '24px',
  space: '24px',
  space_lg: '32px',
  space_xl: '40px',
  header: '56px',
};

export default defineConfig({
  darkMode: 'class', // or 'media'
  preflight: true,
  theme: {
    borderRadius: {
      none: '0',
      sm: '2px',
      DEFAULT: '4px',
      md: '6px',
      lg: '8px',
      xl: '10px',
      xxl: '12px',
      full: '9999px',
      large: '12px',
    },
    height: defaultSizes,
    margin: defaultSizes,
    padding: defaultSizes,
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      blue: '0 2px 16px 0 rgba(72, 95, 234, 0.1), 0 0px 4px 0 rgba(72, 95, 234, 0.1)',
      none: 'none',
    },
    fontSize: {
      body: '14px',
      xs: ['12px', '18px'],
      sm: ['13px', '19px'],
      base: ['14px', '20px'],
      md: ['14px', '20px'],
      lg: ['16px', '24px'],
      xl: ['20px', '28px'],
      xxl: ['24px', '32px'],
      xxxl: ['30px', '36px'],
    },
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px',
      },
      colors: {
        gray: colors.gray,
        blue: colors.sky,
        red: colors.rose,
        pink: colors.fuchsia,
        // 示例：
        // theme: '#4680FF',
        // 'gradi-blue': '#3B76FB',
        // 'gradi-green': '#34CFBF',
        // 'theme-active': '#218EFF',
        // 'theme-light': '#E8F1FD',
        // 'trans-white-20': 'rgba(255, 255, 255, 0.2)',
        // 'trans-white-10': 'rgba(255, 255, 255, 0.1)',
        // 'trans-black-20': 'rgba(0, 0, 0, 0.2)',
        // 'trans-black-10': 'rgba(0, 0, 0, 0.1)',
        // 'trans-black-50': 'rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        main: ['PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'SimSun', 'sans-serif'],
      },
      // 背景图配置示例
      // backgroundImage: () => ({
      //   // 使用示例：<div class="bg-login" />
      //   login: "url('/assets/images/bg_login.jpg')",
      // }),
    },
  },
  plugins: [
    // 自定义plugin示例
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.skew-10deg': {
          transform: 'skewY(-10deg)',
        },
        '.skew-15deg': {
          transform: 'skewY(-15deg)',
        },
      };
      addUtilities(newUtilities);
    }),
    require('windicss/plugin/filters'),
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/line-clamp'),
  ],
});
