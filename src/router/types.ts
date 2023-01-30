import type { RouteRecordRaw } from 'vue-router';
import { LayoutEnum } from './layoutRouteConfig';

export type RouteRecordData = Partial<Record<LayoutEnum | 'route', RouteRecordRaw[]>>;

export interface MenuConfig {
  iconClass?: string;
  order: number;
}

export interface ParentRouteData {
  parentRoute: RouteRecordRaw;
  baseRoute: RouteRecordRaw;
}
