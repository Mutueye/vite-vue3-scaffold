<template>
  <div class="w-full min-h-screen overflow-hidden flex flex-row items-start">
    <div
      class="flex flex-col h-screen w-left-menu bg-bg-page border-r border-border-light flex-shrink-0">
      <div class="flex flex-row items-center w-full p-space">
        <i inline-block align-middle w-32px h-32px class="i-uplus:logo" />
        <div class="text-size-16px font-semibold ml-space-xs">FRONTEND SCAFFOLD</div>
      </div>
      <Menu :layout="layout" />
    </div>
    <div class="h-screen w-full flex flex-col bg-bg">
      <div
        class="flex flex-row items-start justify-between px-space-lg py-space border-b border-border-light">
        <div class="text-size-18px font-semibold color-text-primary">{{ route.meta.title }}</div>
        <ThemeToggler />
      </div>
      <el-scrollbar>
        <div class="p-space-lg flex-shrink-0">
          <RouterView />
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useRoute } from 'vue-router';
  import { LayoutEnum } from '@/router/layoutRouteConfig';
  import Menu from './components/Menu.vue';
  import ThemeToggler from './components/ThemeToggler.vue';

  const route = useRoute();

  defineProps<{ layout: LayoutEnum }>();
</script>
