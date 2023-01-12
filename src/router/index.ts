import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '@/modules/home/views/Home.vue';
import FormExample from '@/modules/form/views/FormExample.vue';
import FormInteractive from '@/modules/form/views/FormInteractive.vue';

export const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/formexample',
    name: 'formexample',
    component: FormExample,
  },
  {
    path: '/forminteractive',
    name: 'forminteractive',
    component: FormInteractive,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
