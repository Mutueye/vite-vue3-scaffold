import { defineConfig } from 'vite';
import * as path from 'path';
import vue from '@vitejs/plugin-vue';
import Windicss from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Windicss()],
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
