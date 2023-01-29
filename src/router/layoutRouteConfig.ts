import AdminLayout from '@/modules/layout/views/AdminLayout.vue';
import BaseLayout from '@/modules/layout/views/Baselayout.vue';
import type { RouteRecordRaw } from 'vue-router';
import type { Component } from 'vue';

/**
 * Page layout enum.
 */
export enum LayoutName {
  base = 'base',
  admin = 'admin',
}

export type RouteRecordData = Partial<Record<LayoutName | 'route', RouteRecordRaw[]>>;

export interface LayoutRouteConfig {
  name: LayoutName;
  component: Component;
}

const generateLayoutRoute = (config: LayoutRouteConfig): RouteRecordRaw => {
  return {
    path: `/${config.name}`,
    name: config.name,
    component: config.component,
    children: [],
  };
};

export const layoutRoutes: Record<LayoutName, RouteRecordRaw> = {
  base: generateLayoutRoute({
    name: LayoutName.base,
    component: BaseLayout,
  }),
  admin: generateLayoutRoute({
    name: LayoutName.admin,
    component: AdminLayout,
  }),
};
