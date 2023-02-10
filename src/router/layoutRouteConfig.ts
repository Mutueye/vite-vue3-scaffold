import AdminLayout from '@/modules/layout/views/AdminLayout.vue';
import BaseLayout from '@/modules/layout/views/Baselayout.vue';
import type { RouteRecordRaw } from 'vue-router';
import type { Component } from 'vue';

/**
 * Page layout enum.
 */
export enum LayoutEnum {
  base = 'base',
  admin = 'admin',
}

const generateLayoutRoute = (config: {
  name: LayoutEnum;
  component: Component;
}): RouteRecordRaw => {
  return {
    path: `/${config.name}`,
    name: config.name,
    props: { layout: config.name },
    component: config.component,
    children: [],
  };
};

export const layoutRoutes: Record<LayoutEnum, RouteRecordRaw> = {
  base: generateLayoutRoute({
    name: LayoutEnum.base,
    component: BaseLayout,
  }),
  admin: generateLayoutRoute({
    name: LayoutEnum.admin,
    component: AdminLayout,
  }),
};
