<template>
  <SectionWrapper title="填充色" :show-divider="true">
    <IntroBox
      content="填充色可作为背景色的补充，在element-plus中用的较少。目前已知仅有表格的行在hover状态的背景色，使用了填充色的light值(css变量：--el-fill-color-light)"
      class="mt-space-xxs mb-space-xs" />
    <div
      class="grid W1200:grid-cols-2 W1350:grid-cols-3 W1450:grid-cols-4 W1600:grid-cols-5 gap-space-sm mb-space-xs mt-space-xxs">
      <div
        v-for="item in configList"
        :key="item.cssVar"
        class="border border-border-light rounded-base p-space-xs"
        :style="{ backgroundColor: `var(${item.cssVar})` }">
        <div class="flex flex-col items-start color-text-regular">
          <div class="text-size-medium font-bold">{{ item.type }}</div>
          <div class="text-size-extra-small">
            {{ item.val }}
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<script lang="ts" setup>
  import SectionWrapper from '../SectionWrapper.vue';
  import IntroBox from './IntroBox.vue';
  import { ThemeCategory } from '@/utils/theme/themeManager';
  import { useThemeConfigList } from '../../composables/useThemeConfigList';

  const { configList } = useThemeConfigList(ThemeCategory.FillColor);
</script>
