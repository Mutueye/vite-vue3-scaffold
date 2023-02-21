<template>
  <div class="flex flex-row h-full min-h-0 px-space-xl pb-space-xl">
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
        <div class="flex flex-row p-space items-center justify-between relative">
          <div class="text-size-16px font-semibold flex-1 min-w-0 truncate">
            {{ currentThemeData.name }}
          </div>
          <el-link
            v-if="currentThemeIndex > 1"
            :underline="false"
            type="danger"
            @click="themeStore.deleteThemeByIndex(currentThemeIndex)">
            删除
          </el-link>
          <div class="absolute left-space h-1px right-space bottom-0 bg-border-lighter" />
        </div>
        <el-scrollbar>
          <MainColorEditor />
          <BgColorEditor />
          <TextColorEditor />
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
  import MainColorEditor from './components/editor/MainColorEditor.vue';
  import BgColorEditor from './components/editor/BgColorEditor.vue';
  import TextColorEditor from './components/editor/TextColorEditor.vue';
  import { defaultThemeConfig } from '@/utils/theme/themeConfig';

  const themeStore = useThemeStore();
  const { themeList, currentThemeData, currentThemeIndex } = storeToRefs(themeStore);

  const addTheme = () => {
    const newThemeList = [
      ...themeList.value,
      Object.assign({ name: `THEME0${themeList.value.length}` }, defaultThemeConfig),
    ];
    themeStore.setThemeList(newThemeList, true);
  };
</script>
