import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import type { RouteRecordData } from './layoutRouteConfig';
import { layoutRoutes, LayoutName } from './layoutRouteConfig';

const generateAllRoutes = (staticRoutes: RouteRecordRaw[]): RouteRecordRaw[] => {
  const allRoutes: RouteRecordRaw[] = [...staticRoutes];
  Object.keys(LayoutName).forEach((key) => {
    allRoutes.push(layoutRoutes[key as LayoutName]);
  });
  const moduleRoutes = import.meta.glob('@/modules/**/*/route.ts', {
    eager: true,
  }) as Record<string, { default: RouteRecordData }>;
  for (const path in moduleRoutes) {
    const route = moduleRoutes[path].default.route;
    if (route) allRoutes.push(...route);
    Object.keys(LayoutName).forEach((key) => {
      const targetRoutes = moduleRoutes[path].default[key as LayoutName];
      if (targetRoutes) {
        layoutRoutes[key as LayoutName].children?.push(...targetRoutes);
      }
    });
  }

  return allRoutes;
};

export const baseRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: generateAllRoutes(baseRoutes),
});
