import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import App from '@/App.vue';
import { router } from '@/router/index';
import pinia from './store';

// element-plus styles
import 'element-plus/dist/index.css';
// element-plus darkmode css variables
import 'element-plus/theme-chalk/dark/css-vars.css';
// unocss styles
import 'uno.css';
// project global styles
import '@/styles/index.scss';

const app = createApp(App);
app.use(ElementPlus, { locale: zhCn }).use(pinia).use(router).mount('#app');
