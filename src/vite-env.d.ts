/// <reference types="vite/client" />

interface ImportMetaEnv {
  // .env中设置的各环境变量，例如VITE_BASE_URL
  VITE_BASE_URL: string;
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
