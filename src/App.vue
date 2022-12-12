<template>
  <div
    class="w-full h-header border-b-1 border-[var(--el-border-color)] flex flex-row items-center justify-between px-space">
    <div class="text-size-24px font-bold">vite-vue3-scaffold</div>
    <el-button :link="true" type="primary" @click="toggleDark(!isDark)">
      <i class="dark:i-ion-moon i-ion-sunny text-size-20px" />
    </el-button>
  </div>
  <RouterView />
</template>

<script lang="ts" setup>
  import { useDark, useToggle } from '@vueuse/core';

  const isDark = useDark();
  const toggleDark = useToggle(isDark);
</script>
