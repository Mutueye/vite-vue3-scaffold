<template>
  <div class="flex flex-row p-space items-center justify-between">
    <div class="text-size-16px font-semibold">主题：{{ themeName }}</div>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useThemeStore } from '@/store/theme';

  const themeStore = useThemeStore();
  const { currentThemeIndex, themeList } = storeToRefs(themeStore);

  const themeData = computed(() => themeList.value[currentThemeIndex.value]);
  // 主题名称
  const themeName = computed(() => {
    if (themeData.value.name) {
      return themeData.value.name;
    } else {
      return `THEME${
        currentThemeIndex.value > 10
          ? currentThemeIndex.value + 1
          : '0' + (currentThemeIndex.value + 1)
      }`;
    }
  });
</script>
