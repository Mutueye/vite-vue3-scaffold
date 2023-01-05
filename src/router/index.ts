import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/modules/home/views/Home.vue';
import FormExample from '@/modules/form/views/FormExample.vue';

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
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
