<template>
  <div class="flex flex-row items-start flex-wrap -ml-space -mt-space">
    <ThemeBtn
      v-for="(data, index) in themeList"
      :key="'primary' + data.mainColors.primary"
      class="ml-space mt-space"
      :theme-data="data"
      :theme-index="index" />
    <ThemeAddBtn v-if="themeList.length < 6" class="ml-space mt-space" @click="addTheme" />
  </div>
</template>

<script lang="ts" setup>
  import { storeToRefs } from 'pinia';
  import { useThemeStore } from '@/store/theme';
  import ThemeBtn from './components/ThemeBtn.vue';
  import ThemeAddBtn from './components/ThemeAddBtn.vue';
  import { defaultThemeConfig } from '@/utils/theme/themeConfig';

  const themeStore = useThemeStore();
  const { themeList } = storeToRefs(themeStore);

  const addTheme = () => {
    const newThemeList = [...themeList.value, defaultThemeConfig];
    themeStore.setThemeList(newThemeList, true);
  };
</script>
