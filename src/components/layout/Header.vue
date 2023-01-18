<template>
  <div class="w-full h-header flex flex-row items-center justify-between px-space bg-bg">
    <div class="flex flex-row items-center">
      <i inline-block align-middle text-size-32px class="i-uplus:logo" />
      <div class="text-size-18px font-semibold ml-10px">前端脚手架</div>
    </div>
    <div class="flex flex-row items-center">
      <button
        v-for="theme in themeList"
        :key="theme"
        class="theme-btn mr-space"
        :style="{ backgroundColor: themeConfig[theme].mainColors.primary }"
        @click="toggleTheme(theme)">
        <i
          v-if="currentTheme === theme"
          inline-block
          align-middle
          text-size-18px
          color-white
          class="i-line-md-confirm-circle" />
      </button>
      <button class="theme-btn" @click="toggleDarkMode">
        <i
          inline-block
          align-middle
          text-size-18px
          dark="i-line-md-moon-filled"
          class="i-line-md-moon-filled-to-sunny-filled-loop-transition color-text-regular" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { useToggleTheme } from '@/componsables/useToggleTheme';
  import { ThemeEnum } from '@/utils/theme/types';
  import { themeConfig } from '@/utils/theme/themeConfig';

  const { currentTheme, toggleTheme, toggleDarkMode } = useToggleTheme();

  let themeList = computed(() => {
    return Object.keys(ThemeEnum).map((key) => key as ThemeEnum);
  });
</script>

<style lang="scss" scoped>
  $btn-size: 28px;

  .theme-btn {
    @apply rounded-full bg-bg-page border-none cursor-pointer flex flex-col items-center justify-center;
    width: $btn-size;
    height: $btn-size;
    outline-offset: 1px;
    &:focus-visible,
    &:hover {
      outline: 2px solid var(--el-text-color-disabled);
      outline-offset: 1px;
    }
  }
</style>
