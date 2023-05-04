<template>
  <div
    class="w-full h-full min-h-full overflow-hidden flex flex-row self-stretch items-start min-w-1200px">
    <div class="flex flex-col h-full w-left-menu bg-bg-page relative flex-shrink-0">
      <div class="absolute w-1px top-0 bottom-0 right-0 bg-border-light" />
      <div class="flex flex-row items-center w-full p-spacing">
        <i inline-block align-middle w-32px h-32px class="i-uplus:logo" />
        <div class="text-size-medium font-semibold ml-spacing-xxs">FRONTEND SCAFFOLD</div>
      </div>
      <Menu :layout="layout" />
    </div>
    <div class="h-full w-full flex flex-col bg-bg min-w-0">
      <div class="flex flex-row items-center justify-between px-spacing-xl py-spacing">
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
