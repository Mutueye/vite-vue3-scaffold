import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import type { RouteRecordData } from './types';
import { layoutRoutes, LayoutEnum } from './layoutRouteConfig';

const generateAllRoutes = (staticRoutes: RouteRecordRaw[]): RouteRecordRaw[] => {
  const allRoutes: RouteRecordRaw[] = [...staticRoutes];
  Object.keys(LayoutEnum).forEach((key) => {
    allRoutes.push(layoutRoutes[key as LayoutEnum]);
  });
  const moduleRoutes = import.meta.glob('@/modules/**/*/route.ts', {
    eager: true,
  }) as Record<string, { default: RouteRecordData }>;
  for (const path in moduleRoutes) {
    const route = moduleRoutes[path].default.route;
    if (route) allRoutes.push(...route);
    Object.keys(LayoutEnum).forEach((key) => {
      const targetRoutes = moduleRoutes[path].default[key as LayoutEnum];
      if (targetRoutes) {
        layoutRoutes[key as LayoutEnum].children?.push(...targetRoutes);
      }
    });
  }

  // 给每个路由增加parentRouteName和baseRouteName信息
  addRouteParentMeta(allRoutes, null, null);

  return allRoutes;
};

const addRouteParentMeta = (
  routes: RouteRecordRaw[],
  parentRoute: RouteRecordRaw | null,
  baseRoute: RouteRecordRaw | null,
) => {
  routes.forEach((route) => {
    if (parentRoute && baseRoute) {
      const parentRouteData = { parentRoute, baseRoute };
      if (route.meta) {
        route.meta.parentRouteData = parentRouteData;
      } else {
        route.meta = { title: '', parentRouteData };
      }
    }
    if (route.children) {
      addRouteParentMeta(route.children, route, baseRoute ? baseRoute : route);
    }
  });
};

export const baseRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard',
  },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_PATH),
  routes: generateAllRoutes(baseRoutes),
});
