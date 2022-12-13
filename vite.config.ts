import { defineConfig } from 'vite';
import * as path from 'path';
import vue from '@vitejs/plugin-vue';
import Unocss from 'unocss/vite';
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

const defaultSizes = {
  header: '64px',
};

const defaultSpaces = {
  'space-xs': '8px',
  'space-sm': '16px',
  'space-md': '24px',
  space: '24px',
  'space-lg': '32px',
  'space-xl': '40px',
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          scale: 1.2,
          warn: true,
        }),
      ],
      transformers: [transformerDirectives(), transformerVariantGroup()],
      // theme配置示例
      // interface Theme {
      //   width?: Record<string, string>;
      //   height?: Record<string, string>;
      //   maxWidth?: Record<string, string>;
      //   maxHeight?: Record<string, string>;
      //   minWidth?: Record<string, string>;
      //   minHeight?: Record<string, string>;
      //   inlineSize?: Record<string, string>;
      //   blockSize?: Record<string, string>;
      //   maxInlineSize?: Record<string, string>;
      //   maxBlockSize?: Record<string, string>;
      //   minInlineSize?: Record<string, string>;
      //   minBlockSize?: Record<string, string>;
      //   borderRadius?: Record<string, string>;
      //   breakpoints?: Record<string, string>;
      //   verticalBreakpoints?: Record<string, string>;
      //   colors?: Colors;
      //   fontFamily?: Record<string, string>;
      //   fontSize?: Record<string, string | [string, string]>;
      //   lineHeight?: Record<string, string>;
      //   letterSpacing?: Record<string, string>;
      //   wordSpacing?: Record<string, string>;
      //   boxShadow?: Record<string, string | string[]>;
      //   textIndent?: Record<string, string>;
      //   textShadow?: Record<string, string | string[]>;
      //   textStrokeWidth?: Record<string, string>;
      //   ringWidth?: Record<string, string>;
      //   lineWidth?: Record<string, string>;
      //   spacing?: Record<string, string>;
      //   duration?: Record<string, string>;
      //   aria?: Record<string, string>;
      //   data?: Record<string, string>;
      //   blur?: Record<string, string>;
      //   dropShadow?: Record<string, string | string[]>;
      //   easing?: Record<string, string>;
      //   media?: Record<string, string>;
      //   supports?: Record<string, string>;
      //   containers?: Record<string, string>;
      //   animation?: ThemeAnimation;
      //   gridAutoColumn?: Record<string, string>;
      //   gridAutoRow?: Record<string, string>;
      //   gridColumn?: Record<string, string>;
      //   gridRow?: Record<string, string>;
      //   gridTemplateColumn?: Record<string, string>;
      //   gridTemplateRow?: Record<string, string>;
      //   container?: {
      //       center?: boolean;
      //   };
      //   /** Used to generate CSS variables placeholder in preflight */
      //   preflightRoot?: Arrayable<string>;
      //   preflightBase?: Record<string, string | number>;
      // }
      theme: {
        width: defaultSizes,
        height: defaultSizes,
        spacing: defaultSpaces,
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
        breakpoints: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          xxl: '1536px',
        },
        borderRadius: {
          none: '0',
          xs: '2px',
          sm: '4px',
          md: '6px',
          lg: '8px',
          xl: '10px',
          xxl: '12px',
          full: '9999px',
        },
        colors: {
          // 示例：
          // theme: '#4680FF',
          // 'gradi-blue': '#3B76FB',
          // 'gradi-green': '#34CFBF',
          // 'theme-active': '#218EFF',
          // 'theme-light': '#E8F1FD',
          // 'trans-white-20': 'rgb(255 255 255 / 20%)',
          // 'trans-black-20': 'rgba(0 0 0 / 20%)',
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
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    open: true,
    https: false,
    // proxy: {
    //   '/api': {
    //     target: gateway,
    //     secure: false,
    //     changeOrigin: true,
    //   },
    // },
  },
});
