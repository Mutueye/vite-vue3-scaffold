<template>
  <div class="flex flex-row h-full min-h-0 p-space-lg">
    <div class="flex flex-row w-500px h-full rounded-8px overflow-hidden min-h-0 bg-bg">
      <div class="flex flex-col h-full bg-bg-secondary">
        <el-scrollbar>
          <ThemeBtn
            v-for="(data, index) in themeList"
            :key="'primary' + data.mainColors.primary"
            :theme-data="data"
            :theme-index="index" />
          <ThemeAddBtn v-if="themeList.length < 6" @click="addTheme" />
        </el-scrollbar>
      </div>
      <div class="flex flex-col flex-1 h-full">
        <el-scrollbar>
          <ThemeEditorContent />
        </el-scrollbar>
      </div>
    </div>
    <div class="flex flex-col flex-1 ml-space h-full rounded-8px min-h-0 bg-bg"></div>
  </div>
</template>

<script lang="ts" setup>
  import { storeToRefs } from 'pinia';
  import { useThemeStore } from '@/store/theme';
  import ThemeBtn from './components/ThemeBtn.vue';
  import ThemeAddBtn from './components/ThemeAddBtn.vue';
  import ThemeEditorContent from './components/ThemeEditorContent.vue';
  import { defaultThemeConfig } from '@/utils/theme/themeConfig';

  const themeStore = useThemeStore();
  const { themeList } = storeToRefs(themeStore);

  const addTheme = () => {
    const newThemeList = [...themeList.value, defaultThemeConfig];
    themeStore.setThemeList(newThemeList, true);
  };
</script>
