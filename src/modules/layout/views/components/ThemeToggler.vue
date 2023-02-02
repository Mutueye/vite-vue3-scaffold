<template>
  <div class="flex flex-row items-center">
    <button
      v-for="(theme, index) in themeList"
      :key="'primary' + theme.mainColors.primary"
      class="theme-btn mr-space color-white"
      :style="{ backgroundColor: theme.mainColors.primary }"
      @click="toggleTheme(index)">
      <i
        v-if="currentThemeIndex === index"
        inline-block
        align-middle
        text-size-18px
        class="i-mdi-check-circle-outline" />
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
</template>

<script lang="ts" setup>
  import { storeToRefs } from 'pinia';
  import { useToggleTheme } from '@/componsables/useToggleTheme';
  import { useThemeStore } from '@/store/theme';

  const themeStore = useThemeStore();
  const { themeList } = storeToRefs(themeStore);

  const { currentThemeIndex, toggleTheme, toggleDarkMode } = useToggleTheme();
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
