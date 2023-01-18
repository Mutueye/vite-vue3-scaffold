import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';

import App from '@/App.vue';
import { router } from '@/router/index';
import { initThemeStyle } from './utils/theme/themeGenerator';

// css reset
import '@/styles/reset.scss';
// element-plus styles
import 'element-plus/dist/index.css';
// element-plus darkmode css variables
import 'element-plus/theme-chalk/dark/css-vars.css';
// unocss styles
import 'uno.css';
// project global styles
import '@/styles/index.scss';

initThemeStyle();

const pinia = createPinia();
const app = createApp(App);

app.use(ElementPlus, { locale: zhCn }).use(pinia).use(router).mount('#app');
