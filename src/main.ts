import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';

import App from '@/App.vue';
import { router } from '@/router/index';

// 样式引入 自定义样式优先级最高，最后引入
import '@/styles/reset.scss';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'virtual:windi.css';
import '@/styles/index.scss';

const pinia = createPinia();
const app = createApp(App);

app.use(ElementPlus);
app.use(pinia);
app.use(router);
app.mount('#app');
