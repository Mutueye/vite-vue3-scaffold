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
        </el-scrollbar>
        <div class="flex flex-row items-center p-space-sm">
          <el-button
            text
            :disabled="themeList.length >= 6"
            class="flex-1 mr-space-xxxs"
            @click="addTheme">
            <i class="inline-block text-size-extra-large i-mdi-plus" />
          </el-button>
          <el-button text class="flex-1 ml-space-xxxs" @click="resetThemes">
            <i class="inline-block text-size-extra-large i-mdi-refresh" />
          </el-button>
        </div>
      </div>
      <div class="flex flex-col flex-1 h-full">
        <div
          class="flex flex-row py-space mx-space items-center justify-between relative border-b border-border-light">
          <div class="text-size-large font-semibold flex-1 min-w-0 truncate">
            {{ currentThemeData.name }}
          </div>
          <el-link
            v-if="currentThemeIndex > 1"
            :underline="false"
            type="danger"
            @click="() => themeStore.deleteThemeByIndex(currentThemeIndex)">
            删除
          </el-link>
        </div>
        <el-scrollbar>
          <EditorSection
            v-for="(item, index) in editorCategories"
            :key="item.category"
            :show-divider="index < editorCategories.length - 1"
            :editor-category="item" />
        </el-scrollbar>
      </div>
    </div>
    <div class="flex flex-col flex-1 ml-space h-full rounded-8px min-h-0 bg-bg">
      <div
        class="flex flex-row py-space mx-space items-center justify-between relative border-b border-border-light">
        <div class="text-size-large font-semibold flex-1 min-w-0 truncate">预览</div>
      </div>
      <el-scrollbar>
        <MainColorPreview />
        <TextColorPreview />
        <BgColorPreview />
        <BorderColorPreview />
        <FillColorPreview />
        <BorderRadiusPreview />
        <SpacePreview />
        <FontSizePreview />
        <ComponentSizePreview />
      </el-scrollbar>
    </div>
    <AddThemeDialog ref="addThemeDialogRef" />
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useThemeStore } from '@/store/theme';
  import { ElMessageBox } from 'element-plus';
  import ThemeBtn from './components/ThemeBtn.vue';
  import EditorSection from './components/editor/EditorSection.vue';
  import MainColorPreview from './components/perviewer/MainColorPreview.vue';
  import TextColorPreview from './components/perviewer/TextColorPreview.vue';
  import BgColorPreview from './components/perviewer/BgColorPreview.vue';
  import BorderColorPreview from './components/perviewer/BorderColorPreview.vue';
  import FillColorPreview from './components/perviewer/FillColorPreview.vue';
  import BorderRadiusPreview from './components/perviewer/BorderRadiusPreview.vue';
  import SpacePreview from './components/perviewer/SpacePreview.vue';
  import FontSizePreview from './components/perviewer/FontSizePreview.vue';
  import ComponentSizePreview from './components/perviewer/ComponentSizePreview.vue';
  import AddThemeDialog from './components/AddThemeDialog.vue';
  import { editorCategories } from '@/utils/theme/themeManager';
  import { defaultThemeConfig } from '@/utils/theme/themeConfig';
  import { cloneDeep } from 'lodash-es';

  const themeStore = useThemeStore();
  const { themeList, currentThemeData, currentThemeIndex } = storeToRefs(themeStore);

  const addThemeDialogRef = ref<HTMLElement & { open: () => void }>();

  const addTheme = () => {
    addThemeDialogRef.value?.open();
    // let name = `THEME0${themeList.value.length}`;
    // // avoid duplicate names
    // themeList.value.forEach((theme) => {
    //   if (theme.name === name) {
    //     name = `THEME0${themeList.value.length + 1}`;
    //   }
    // });
    // const newThemeList = [
    //   ...themeList.value,
    //   {
    //     name,
    //     config: cloneDeep(defaultThemeConfig.config),
    //   },
    // ];
    // themeStore.setThemeList(newThemeList, true);
  };

  const resetThemes = () => {
    ElMessageBox.confirm('确定要重置前3个默认主题吗？', '提示', {
      confirmButtonText: '确定',
      cancelButtonClass: '取消',
      icon: '',
    })
      .then(() => {
        themeStore.resetThemeList();
      })
      .catch(() => null);
  };
</script>
