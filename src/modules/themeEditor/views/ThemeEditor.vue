<template>
  <div class="flex flex-row h-full min-h-0 px-space-xl pb-space-xl">
    <div class="flex flex-row w-500px h-full rounded-8px overflow-hidden min-h-0 bg-bg">
      <div class="flex flex-col h-full bg-bg-secondary">
        <el-scrollbar>
          <ThemeBtn
            v-for="(data, index) in themeList"
            :key="'primary' + (data.name ? data.name : index)"
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
          <EditorSection
            v-for="item in editorCategories"
            :key="item.category"
            :editor-category="item" />
          <!-- <EditorSection title="主题色" :config-category="ThemeCategory.Color" />
          <EditorSection title="背景色" :config-category="ThemeCategory.BgColor" />
          <EditorSection title="文字色" :config-category="ThemeCategory.TextColor" />
          <EditorSection title="边框色" :config-category="ThemeCategory.BorderColor" />
          <EditorSection title="填充色" :config-category="ThemeCategory.FillColor" /> -->
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
  import EditorSection from './components/editor/EditorSection.vue';
  import { editorCategories } from '@/utils/theme/themeManager';
  import { defaultThemeConfig } from '@/utils/theme/themeConfig';
  import { cloneDeep } from 'lodash-es';

  const themeStore = useThemeStore();
  const { themeList, currentThemeData, currentThemeIndex } = storeToRefs(themeStore);

  const addTheme = () => {
    let name = `THEME0${themeList.value.length}`;
    // avoid duplicate names
    themeList.value.forEach((theme) => {
      if (theme.name === name) {
        name = `THEME0${themeList.value.length + 1}`;
      }
    });
    const newThemeList = [
      ...themeList.value,
      {
        name,
        config: cloneDeep(defaultThemeConfig.config),
      },
    ];
    themeStore.setThemeList(newThemeList, true);
  };
</script>
