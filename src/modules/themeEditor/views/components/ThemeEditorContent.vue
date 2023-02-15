<template>
  <div class="flex flex-row p-space items-center justify-between">
    <div class="text-size-16px font-semibold flex-1 min-w-0 truncate">
      主题：{{ currentThemeData.name }}
    </div>
    <el-link
      v-if="currentThemeIndex > 1"
      :underline="false"
      type="danger"
      @click="themeStore.deleteThemeByIndex(currentThemeIndex)">
      删除
    </el-link>
  </div>
</template>

<script lang="ts" setup>
  import { storeToRefs } from 'pinia';
  import { useThemeStore } from '@/store/theme';

  const themeStore = useThemeStore();
  const { currentThemeData, currentThemeIndex } = storeToRefs(themeStore);
</script>
