import type { RouteRecordRaw } from 'vue-router';
import { LayoutEnum } from '../layouts/layoutRouteConfig';

export type RouteRecordData = Partial<Record<LayoutEnum | 'route', RouteRecordRaw[]>>;

export interface MenuConfig {
  iconClass?: string;
  order: number;
  // TODO menuScope用户菜单过滤，使用相同的layout但是需要显示不同的菜单是启用
  menuScope?: string;
}

export interface ParentRouteData {
  parentRoute: RouteRecordRaw;
  baseRoute: RouteRecordRaw;
}
