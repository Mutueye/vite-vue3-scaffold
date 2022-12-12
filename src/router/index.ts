import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/modules/home/views/Home.vue';

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
  // For lazy loading components
  /* {
    path: '/',
    name: 'home',
    component: () => import('@/pages/Home.vue'),
  }, */
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
