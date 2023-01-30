// https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
import { MenuConfig, ParentRouteData } from './router/types';

export {};

// augment RoutMeta interface.
declare module 'vue-router' {
  interface RouteMeta {
    // one title for each route page
    title: string;
    // layout menu will traverse route tree and generate menu items according to this config
    menuConfig?: MenuConfig;
    // stores parent route data
    parentRouteData?: ParentRouteData;
  }
}
