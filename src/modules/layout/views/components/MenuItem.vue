<template>
  <div>
    <el-sub-menu
      v-if="menuData.children && menuData.children.length > 0"
      :index="(menuData.name as string)">
      <template #title>
        <span class="font-semibold">{{ menuData.meta?.title }}</span>
      </template>
      <menu-item v-for="subItem in menuData.children" :key="subItem.name" :menu-data="subItem" />
    </el-sub-menu>
    <el-menu-item
      v-else
      :index="(menuData.name as string)"
      @click="router.push({ name: menuData.name })">
      <span class="font-semibold">{{ menuData.meta?.title }}</span>
    </el-menu-item>
  </div>
</template>

<script lang="ts" setup>
  import { toRefs } from 'vue';
  import type { RouteRecordRaw } from 'vue-router';
  import { useRouteInfo } from '@/componsables/useRouteInfo';

  const { router } = useRouteInfo();

  const props = defineProps<{ menuData: RouteRecordRaw }>();
  const { menuData } = toRefs(props);

  // const clickMenu = (menuData: RouteRecordRaw) => {
  //   router.push({ name: menuData.name });
  // };
</script>
