<template>
  <RouterView />
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useToggleTheme } from './componsables/useToggleTheme';

  const { initThemeIndex } = useToggleTheme();

  onMounted(() => initThemeIndex());
</script>
