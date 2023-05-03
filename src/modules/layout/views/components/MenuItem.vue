<template>
  <div>
    <el-sub-menu
      v-if="menuData.children && menuData.children.length > 0"
      :index="(menuData.name as string)"
      class="admin-sub-menu">
      <template #title>
        <menu-icon :icon-class="get(menuData, 'meta.menuConfig.iconClass', '')" />
        <span class="font-semibold">{{ menuData.meta?.title }}</span>
      </template>
      <menu-item v-for="subItem in menuData.children" :key="subItem.name" :menu-data="subItem" />
    </el-sub-menu>
    <el-menu-item
      v-else
      class="admin-menu-item"
      :index="(menuData.name as string)"
      @click="router.push({ name: menuData.name })">
      <menu-icon :icon-class="get(menuData, 'meta.menuConfig.iconClass', '')" />
      <span class="font-semibold">{{ menuData.meta?.title }}</span>
      <!-- active动效 -->
      <div class="active-line top" />
      <div class="active-line bottom" />
      <div class="active-arrow"><i class="icon i-mdi-chevron-right" /></div>
      <div class="active-dot active-dot-1"><i class="icon i-mdi-circle-small" /></div>
      <div class="active-dot active-dot-2"><i class="icon i-mdi-circle-small" /></div>
      <div class="active-dot active-dot-3"><i class="icon i-mdi-circle-small" /></div>
    </el-menu-item>
  </div>
</template>

<script lang="ts" setup>
  import { toRefs } from 'vue';
  import type { RouteRecordRaw } from 'vue-router';
  import { useRouteInfo } from '@/componsables/useRouteInfo';
  import MenuIcon from './MenuIcon.vue';
  import { get } from 'lodash-es';

  const { router } = useRouteInfo();

  const props = defineProps<{ menuData: RouteRecordRaw }>();
  const { menuData } = toRefs(props);
</script>

<style lang="scss">
  .admin-sub-menu {
    .el-sub-menu__title {
      @apply mr-1px;
    }
  }
  .admin-menu-item {
    @apply relative mr-1px;
    .active-line {
      @apply absolute left-0 right-0 h-1px bg-transparent transition-transform duration-300 ease-out;
      &.top {
        @apply top-0 translate-y-20px;
      }
      &.bottom {
        @apply bottom-0 -translate-y-20px;
      }
    }
    .icon {
      @apply inline-block color-theme text-size-18px;
    }
    .active-arrow {
      @apply absolute w-20px h-20px top-1/2 -mt-10px right-spacing-xxxs flex items-center justify-center transition-all duration-200 ease-out opacity-0 -translate-x-30px;
    }
    .active-dot {
      @apply absolute w-20px h-20px top-1/2 -mt-10px right-spacing-xxxs flex scale-90 items-center justify-center transition-all;
    }
    .active-dot-1 {
      @apply duration-300 ease-out opacity-0 -translate-x-60px;
    }
    .active-dot-2 {
      @apply duration-400 ease-out opacity-0 -translate-x-90px;
    }
    .active-dot-3 {
      @apply duration-500 ease-out opacity-0 -translate-x-120px;
    }

    &.is-active {
      @apply mr-0;
      .active-line {
        @apply bg-border-light;
        &.top {
          @apply translate-y-0;
        }
        &.bottom {
          @apply translate-y-0;
        }
      }
      .active-arrow {
        @apply opacity-100 translate-x-0;
      }
      .active-dot-1 {
        @apply opacity-45 -translate-x-6px;
      }
      .active-dot-2 {
        @apply opacity-30 -translate-x-12px;
      }
      .active-dot-3 {
        @apply opacity-15 -translate-x-18px;
      }
    }
  }
</style>
