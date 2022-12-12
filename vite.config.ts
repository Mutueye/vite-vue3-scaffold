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
  'space-xs': '8px',
  'space-sm': '16px',
  'space-md': '24px',
  space: '24px',
  'space-lg': '32px',
  'space-xl': '40px',
  header: '72px',
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
        spacing: defaultSizes,
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
