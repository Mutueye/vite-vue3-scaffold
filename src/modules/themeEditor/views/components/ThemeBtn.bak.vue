<template>
  <div
    class="rounded-base w-160px h-80px relative flex flex-col items-center justify-center cursor-pointer overflow-hidden group hover:opacity-90"
    :style="{ backgroundColor: themeData.mainColors.primary }"
    @click="toggleTheme(themeIndex)">
    <div class="absolute left-0 top-0 right-0 bottom-0 flex items-center justify-center">
      <i class="check-icon" :class="themeIndex === currentThemeIndex ? 'active' : ''" />
    </div>
    <i
      v-if="themeIndex > 0"
      class="i-mdi-close-circle-outline absolute text-size-18px right-4px top-4px color-white transform-gpu transition-transform translate-x-22px -translate-y-22px group-hover:(translate-x-0 translate-y-0)"
      @click.stop="deleteTheme" />
    <div class="text-size-15px font-semibold color-white">{{ themeName }}</div>
    <div class="text-size-13px font-semibold color-white opacity-70 mt-5px">
      {{ themeData.mainColors.primary }}
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { toRefs, computed } from 'vue';
  import { ElMessageBox } from 'element-plus';
  import type { ThemeConfig } from '@/utils/theme/types';
  import { useToggleTheme } from '@/componsables/useToggleTheme';
  import { useThemeStore } from '@/store/theme';

  const themeStore = useThemeStore();

  const props = defineProps<{ themeData: ThemeConfig; themeIndex: number }>();
  const { themeIndex } = toRefs(props);

  const { currentThemeIndex, toggleTheme } = useToggleTheme();

  const themeName = computed(
    () => `THEME${themeIndex.value > 10 ? themeIndex.value + 1 : '0' + (themeIndex.value + 1)}`,
  );

  const deleteTheme = () => {
    ElMessageBox.confirm(`确定要删除主题${themeName.value}吗？`, '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      icon: '',
    })
      .then(() => {
        themeStore.deleteThemeByIndex(themeIndex.value);
      })
      .catch(() => null);
  };
</script>

<style lang="scss">
  .check-icon {
    @apply inline-block text-size-180px color-white opacity-0 i-mdi-check-circle-outline transform-gpu scale-50 transition-all;
    &.active {
      @apply opacity-15 scale-100;
    }
  }
</style>
