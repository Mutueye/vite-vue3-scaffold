import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import type { RouteLocationNormalizedLoaded, RouteRecordName, RouteRecordRaw } from 'vue-router';

export const useRouteInfo = () => {
  const router = useRouter();
  const route = useRoute();

  const allRoutes = computed(() => router.options.routes);

  const getMenuRouteName = (
    route: RouteLocationNormalizedLoaded | RouteRecordRaw,
  ): RouteRecordName | null | undefined => {
    console.log('route::::::::::::', route);
    if (route && route.meta) {
      console.log('routeMeta::::::::::', route.meta);
      if (route.meta.menuConfig) {
        return route.name;
      } else if (route.meta.parentRouteData) {
        return getMenuRouteName(route.meta.parentRouteData.parentRoute);
      } else {
        return '';
      }
    } else {
      return '';
    }
  };

  const activeMenuRouteName = computed(() => getMenuRouteName(route));

  return { allRoutes, router, route, activeMenuRouteName };
};
