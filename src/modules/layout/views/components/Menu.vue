<template>
  <el-menu
    :collapse="false"
    :default-active="activeMenuRouteName"
    class="bg-transparent border-none admin-menu">
    <menu-item v-for="item in menus" :key="item.name" :menu-data="item" />
  </el-menu>
</template>

<script lang="ts" setup>
  import { toRefs, computed } from 'vue';
  import { sortBy, get } from 'lodash-es';

  import { LayoutEnum } from '@/router/layoutRouteConfig';
  import { useRouteInfo } from '@/componsables/useRouteInfo';
  import type { RouteLocationNormalizedLoaded, RouteRecordRaw } from 'vue-router';
  import MenuItem from './MenuItem.vue';

  const props = defineProps<{ layout: LayoutEnum }>();
  // 根据传入的layout过滤路由，生成菜单
  const { layout } = toRefs(props);

  const { allRoutes, route } = useRouteInfo();

  const activeMenuRouteName = computed(() => getActiveMenuName(route));

  const menus = computed(() => {
    const layoutRoute = allRoutes.value.find((route) => route.name === layout.value);
    if (layoutRoute && layoutRoute.children) {
      const result = getMenuRoutes(layoutRoute.children);
      return result;
    }
    return [];
  });

  const getMenuRoutes = (routes: RouteRecordRaw[]) => {
    const result: RouteRecordRaw[] = [];
    routes.forEach((route) => {
      if (route.meta && route.meta.menuConfig) {
        if (route.children && route.children.length > 0) {
          route.children = getMenuRoutes(route.children);
        }
        result.push(route);
      }
    });
    return sortBy(result, (item) => get(item, 'meta.menuConfig.order', 1000));
  };

  const getActiveMenuName = (route: RouteLocationNormalizedLoaded | RouteRecordRaw): string => {
    if (route && route.meta) {
      if (route.meta.menuConfig) {
        return route.name as string;
      } else if (route.meta.parentRouteData) {
        return getActiveMenuName(route.meta.parentRouteData.parentRoute);
      } else {
        return '';
      }
    } else {
      return '';
    }
  };
</script>

<style lang="scss">
  .admin-menu {
    background-color: transparent;
    .el-menu-item.is-active {
      background-color: var(--el-bg-color);
    }
  }
</style>
