<template>
  <div class="theme-btn">
    <div class="theme-btn-cnt" :class="selected ? 'selected' : ''" @click="toggleTheme(themeIndex)">
      <div class="flex flex-row">
        <div
          v-for="(mainColor, index) in mainColorList"
          :key="mainColor"
          class="w-24px h-24px rounded-full border-bg border-2px relative"
          :class="index > 0 && !selected ? '-ml-18px' : ''"
          :style="{ backgroundColor: mainColor, zIndex: mainColorList.length - index }" />
      </div>
      <div v-if="!selected" class="text-size-12px truncate flex-1 ml-space-xs">
        {{ themeName }}
      </div>
    </div>
  </div>
  <!-- <div
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
  </div> -->
</template>

<script lang="ts" setup>
  import { toRefs, computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { ElMessageBox } from 'element-plus';
  import { useToggleTheme } from '@/componsables/useToggleTheme';
  import { useThemeStore } from '@/store/theme';
  import { MainColorEnum } from '@/utils/theme/types';

  const themeStore = useThemeStore();
  const { themeList } = storeToRefs(themeStore);

  const props = defineProps<{ themeIndex: number }>();
  const { themeIndex } = toRefs(props);

  const { currentThemeIndex, toggleTheme } = useToggleTheme();

  // 主题配置
  const themeData = computed(() => themeList.value[themeIndex.value]);
  // 主题色列表
  const mainColorList = computed(() => {
    const list: string[] = [];
    if (themeData.value.mainColors) {
      Object.keys(themeData.value.mainColors).forEach((key) => {
        if (key !== MainColorEnum.error) {
          list.push(themeData.value.mainColors[key as MainColorEnum]);
        }
      });
    }
    return list;
  });
  // 主题名称
  const themeName = computed(() => {
    if (themeData.value.name) {
      return themeData.value.name;
    } else {
      return `THEME${themeIndex.value > 10 ? themeIndex.value + 1 : '0' + (themeIndex.value + 1)}`;
    }
  });
  // 是否被选中
  const selected = computed(() => {
    return currentThemeIndex.value === themeIndex.value;
  });

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

<style lang="scss" scoped>
  .theme-btn {
    @apply w-140px flex flex-row m-space-sm cursor-pointer min-w-0;
    .theme-btn-cnt {
      @apply p-12px flex flex-row flex-1 justify-between items-center rounded-full bg-bg min-w-0;
      &:hover {
        @apply bg-bg;
      }
      &.selected {
        @apply bg-bg -mr-space-sm rounded-r-0;
      }
    }
  }
</style>
