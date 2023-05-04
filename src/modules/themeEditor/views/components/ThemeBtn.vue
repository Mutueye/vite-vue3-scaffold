<template>
  <div class="theme-btn" :class="selected ? 'my-spacing-sm ml-spacing-sm' : 'm-spacing-sm'">
    <div class="theme-btn-cnt" :class="selected ? 'selected' : ''" @click="clickThemeBtn">
      <div class="flex flex-row flex-1">
        <div
          v-for="(mainColor, index) in mainColorList"
          :key="mainColor"
          class="w-24px h-24px rounded-base border-bg border-2px relative"
          :class="index > 0 && !selected ? '-ml-17px' : ''"
          :style="{ backgroundColor: mainColor, zIndex: mainColorList.length - index }" />
      </div>
      <div
        v-if="!selected"
        class="text-size-extra-small font-semibold truncate flex-1 ml-spacing-xxs">
        {{ themeName }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { toRefs, computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useThemeStore } from '@/store/theme';
  import { DayNightModeEnum } from '@itshixun/qst-ui-system';

  const themeStore = useThemeStore();
  const { themeList, currentThemeIndex } = storeToRefs(themeStore);

  const props = defineProps<{ themeIndex: number }>();
  const { themeIndex } = toRefs(props);

  const emit = defineEmits(['changeTheme']);

  const clickThemeBtn = () => {
    emit('changeTheme');
    themeStore.setCurrentThemeIndex(themeIndex.value);
  };

  // 主题配置
  const themeData = computed(() => themeList.value[themeIndex.value]);
  // 主题色列表
  const mainColorList = computed(() => {
    const list: string[] = [];
    if (themeData.value) {
      const mainColors = themeData.value.config[DayNightModeEnum.light].color;
      if (mainColors) {
        Object.keys(mainColors).forEach((key) => {
          list.push(mainColors[key as keyof typeof mainColors]);
        });
      }
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
</script>

<style lang="scss" scoped>
  .theme-btn {
    @apply flex flex-row cursor-pointer min-w-0;
    .theme-btn-cnt {
      @apply p-12px flex flex-row flex-1 justify-between items-center rounded-base bg-bg min-w-0 w-140px;
      &:hover {
        @apply bg-bg;
      }
      &.selected {
        @apply bg-bg rounded-r-0;
      }
    }
  }
</style>
