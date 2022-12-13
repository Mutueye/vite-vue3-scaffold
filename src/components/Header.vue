<template>
  <div
    class="w-full h-header flex flex-row items-center justify-between px-space bg-[var(--el-bg-color)]">
    <div class="text-size-24px font-bold">vite-vue3-scaffold</div>
    <div class="flex flex-row items-center">
      <button class="theme-btn blue mr-space" @click="toggleTheme('blue')">
        <i
          v-if="currentTheme === 'blue'"
          inline-block
          align-middle
          text-size-18px
          color-white
          class="i-line-md-confirm-circle" />
      </button>
      <button class="theme-btn purple mr-space" @click="toggleTheme('purple')">
        <i
          v-if="currentTheme === 'purple'"
          inline-block
          align-middle
          text-size-18px
          color-white
          class="i-line-md-confirm-circle" />
      </button>
      <button class="theme-btn" @click="toggleDark(!isDark)">
        <i
          inline-block
          align-middle
          text-size-18px
          dark="i-line-md-moon-filled"
          class="i-line-md-moon-filled-to-sunny-filled-loop-transition color-[var(--el-text-color-regular)]" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useDark, useToggle } from '@vueuse/core';
  import { useToggleTheme } from '@/componsables/useToggleTheme';

  const isDark = useDark();
  const toggleDark = useToggle(isDark);

  const { currentTheme, toggleTheme } = useToggleTheme();
</script>

<style lang="scss" scoped>
  @use 'sass:map';
  @use '@/styles/_vars.scss';

  $blue: map.get(vars.$theme-blue-colors, 'primary');
  $purple: map.get(vars.$theme-purple-colors, 'primary');
  $btn-size: 32px;

  .theme-btn {
    @apply rounded-full bg-[var(--el-bg-color-page)] border-none cursor-pointer flex flex-col items-center justify-center;

    width: $btn-size;
    height: $btn-size;
    &:focus-visible,
    &:hover {
      outline: 1px solid var(--el-color-primary-light-8);
      outline-offset: 2px;
    }
    &.blue {
      background-color: $blue;
      &:focus-visible,
      &:hover {
        outline: 1px solid $blue;
      }
    }
    &.purple {
      background-color: $purple;
      &:focus-visible,
      &:hover {
        outline: 1px solid $purple;
      }
    }
  }
</style>
