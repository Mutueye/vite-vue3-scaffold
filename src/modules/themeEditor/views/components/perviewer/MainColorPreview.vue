<template>
  <SectionWrapper title="主题色" :show-divider="true">
    <IntroBox content="系统会根据5种主题色自动生成由浅到深的19级颜色" class="mt-space-xxs" />
    <div class="flex flex-col w-full pb-space-sm">
      <div
        v-for="key in Object.keys(colorScheme)"
        :key="key"
        class="flex flex-row items-center min-w-0 w-full mt-space-sm">
        <el-tooltip
          v-for="color in colorScheme[key as ColorType]"
          :key="color"
          effect="dark"
          placement="top">
          <template #content>
            <div class="text-size-medium font-bold">{{ getCssVarValue(color) }}</div>
            <div class="text-size-extra-small">{{ color }}</div>
          </template>
          <div class="flex-1 h-component-size" :style="{ backgroundColor: `var(${color})` }" />
        </el-tooltip>
      </div>
    </div>
  </SectionWrapper>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import SectionWrapper from '../SectionWrapper.vue';
  import IntroBox from './IntroBox.vue';
  import { cssVarPrepend, cssVarCodex } from '@/utils/theme/themeManager';

  const colorTypeList = cssVarCodex['color'];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type ColorType = typeof colorTypeList[number];

  const colorScheme = computed(() => {
    type ColorSchemeType = Record<typeof colorTypeList[number], string[]>;
    const scheme: Partial<ColorSchemeType> = {};
    colorTypeList.forEach((type) => {
      scheme[type] = generateColorVars(type);
    });
    return scheme;
  });

  const getCssVarValue = (cssVar: string) => {
    return getComputedStyle(document.documentElement).getPropertyValue(cssVar);
  };

  const generateColorVars = (color: string) => {
    const list: string[] = [];
    const baseCssVarName = `${cssVarPrepend}-color-${color}`;
    for (let i = 9; i > 0; i--) {
      list.push(`${baseCssVarName}-light-${i}`);
    }
    list.push(baseCssVarName);
    for (let i = 1; i < 10; i++) {
      list.push(`${baseCssVarName}-dark-${i}`);
    }
    return list;
  };
</script>
