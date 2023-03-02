<template>
  <div
    class="w-full h-full min-h-full overflow-hidden flex flex-row self-stretch items-start min-w-1200px">
    <div
      class="flex flex-col h-full w-left-menu bg-bg-secondary border-r border-border-lighter flex-shrink-0">
      <div class="flex flex-row items-center w-full p-space">
        <i inline-block align-middle w-32px h-32px class="i-uplus:logo" />
        <div class="text-size-medium font-semibold ml-space-xxs">FRONTEND SCAFFOLD</div>
      </div>
      <Menu :layout="layout" />
    </div>
    <div class="h-full w-full flex flex-col bg-bg-page">
      <div class="flex flex-row items-center justify-between px-space-xl py-space">
        <div class="text-size-large font-semibold color-text-primary">{{ route.meta.title }}</div>
        <ThemeToggler />
      </div>
      <RouterView />
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
