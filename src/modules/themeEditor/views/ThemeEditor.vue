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
        <div class="flex flex-row items-center justify-between p-space-sm">
          <el-button
            text
            :disabled="themeList.length >= 6"
            class="w-component-size-large px-0 mr-space-xxxs"
            @click="addTheme">
            <i class="inline-block text-size-extra-large i-mdi-plus" />
          </el-button>
          <el-button text class="w-component-size-large px-0 ml-space-xxxs" @click="resetThemes">
            <i class="inline-block text-size-extra-large i-mdi-refresh" />
          </el-button>
        </div>
      </div>
      <div class="flex flex-col flex-1 h-full">
        <div
          class="flex flex-row h-74px flex-shrink-0 mx-space items-center justify-between relative border-b border-border-light">
          <div class="text-size-large font-semibold flex-1 min-w-0 truncate">
            {{ currentThemeData.name }}
          </div>
          <el-dropdown @command="handleDropdownCmd">
            <div
              class="w-component-size h-component-size flex group items-center justify-center hover:bg-bg-secondary cursor-pointer rounded-base">
              <i
                class="i-mdi-dots-vertical text-size-extra-large color-text-regular group-hover:color-primary" />
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="delete" :disabled="currentThemeIndex <= 1">
                  删除主题
                </el-dropdown-item>
                <el-dropdown-item command="reset">重置主题</el-dropdown-item>
                <el-dropdown-item command="export">导出json</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <!-- <el-link
            v-if="currentThemeIndex > 1"
            :underline="false"
            type="danger"
            @click="() => themeStore.deleteThemeByIndex(currentThemeIndex)">
            删除
          </el-link> -->
        </div>
        <el-scrollbar>
          <el-collapse
            :key="currentThemeIndex"
            v-model="activeName"
            accordion
            class="mx-space -mt-1px mb-space">
            <el-collapse-item
              v-for="(item, index) in editorCategories"
              :key="item.category"
              :name="(index + 1).toString()">
              <template #title>
                <div class="text-size-medium font-bold color-text-primary">{{ item.title }}</div>
              </template>
              <EditorSection :editor-category="item" />
            </el-collapse-item>
          </el-collapse>
        </el-scrollbar>
      </div>
    </div>
    <div class="flex flex-col flex-1 ml-space h-full rounded-8px min-h-0 bg-bg">
      <div
        class="flex flex-row h-74px flex-shrink-0 mx-space items-center justify-between relative border-b border-border-light">
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
        <MessPreview />
      </el-scrollbar>
    </div>
  </div>
  <AddThemeDialog ref="addThemeDialogRef" />
  <ExportJsonDialog ref="exportJsonDialogRef" />
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
  import MessPreview from './components/perviewer/MessPreview.vue';
  import AddThemeDialog from './components/AddThemeDialog.vue';
  import ExportJsonDialog from './components/ExportJsonDialog.vue';
  import { editorCategories } from '@/utils/theme/themeManager';

  const themeStore = useThemeStore();
  const { themeList, currentThemeData, currentThemeIndex } = storeToRefs(themeStore);

  const addThemeDialogRef = ref<HTMLElement & { open: () => void }>();
  const exportJsonDialogRef = ref<HTMLElement & { open: () => void }>();

  const activeName = ref('1');

  const addTheme = () => {
    addThemeDialogRef.value?.open();
  };

  const resetThemes = () => {
    ElMessageBox.confirm('即将重置为初始的3个默认主题，确定要重置吗？', '重置主题', {
      confirmButtonText: '确定',
      cancelButtonClass: '取消',
      icon: '',
    })
      .then(() => {
        themeStore.resetThemeList();
      })
      .catch(() => null);
  };

  const handleDropdownCmd = (cmd: string) => {
    if (cmd === 'delete') {
      themeStore.deleteThemeByIndex(currentThemeIndex.value);
    } else if (cmd === 'export') {
      exportJsonDialogRef.value?.open();
    } else if (cmd === 'reset') {
      themeStore.resetTheme(currentThemeIndex.value);
    }
  };
</script>
