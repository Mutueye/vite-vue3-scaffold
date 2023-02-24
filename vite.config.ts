/// <reference types="vitest" />

import { defineConfig, loadEnv } from 'vite';
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
import { theme, uplusIconCollection } from './unocss.theme';

const baseConfig = defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            const tagList = ['hex-color-picker', 'hex-alpha-color-picker'];
            return tagList.includes(tag);
          },
        },
      },
    }),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          scale: 1,
          warn: true,
          collections: {
            uplus: uplusIconCollection,
          },
        }),
      ],
      // unocss can't render icon class dynamically, when adding menu icon class
      // in route.meta.menuConfig, you must also add the icon class in safelist.
      // TODO get icon name list from all route's meta.iconName
      safelist: ['i-mdi-collage', 'i-mdi-form-textbox-password', 'i-mdi-clover'],
      transformers: [transformerDirectives(), transformerVariantGroup()],
      theme,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [path.resolve(__dirname, 'test/setup.ts')],
  },
});

/**
 * 通过不同模式的dev命令来启动不同的开发环境：
 * npm run dev - 默认dev环境 uea.qstcloud.net
 * npm run dev:tev - tev环境 tev.qstcloud.net
 * npm run dev:prod- 生产环境 www.eec-cn.com
 * npm run dev:locally - 启动本地服务调试，需要根据你的本地服务地址，在/env/.env.local里配置VITE_API_BASEPATH和ITE_API_GATEWAY变量
 */
export default defineConfig(({ mode }) => {
  // 取env环境变量配置，没取到则默认开发环境
  process.env = { ...process.env, ...loadEnv(mode, process.cwd() + '/env') };
  // link issue https://github.com/sindresorhus/open/issues/205
  process.env.SYSTEMROOT = process.env.SystemRoot;
  // api前缀
  const proxyApiPrepend = process.env.VITE_API_BASE_PATH ? process.env.VITE_API_BASE_PATH : '/api';
  // 要代理的地址
  const gateway = process.env.VITE_API_GATEWAY
    ? process.env.VITE_API_GATEWAY
    : 'https://uea.qstcloud.net';

  return {
    ...baseConfig,
    base: `${process.env.VITE_APP_BASE_PATH}`,
    server: {
      open: true,
      host: '0.0.0.0',
      // port: 8080,
      proxy: {
        [proxyApiPrepend]: {
          target: `${gateway}/api`,
          ws: true,
          changeOrigin: true,
          rewrite: (path) => path.replace(proxyApiPrepend, ''),
        },
      },
    },
  };
});
