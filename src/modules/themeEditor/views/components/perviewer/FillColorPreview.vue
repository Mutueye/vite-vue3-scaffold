<template>
  <SectionWrapper title="填充色" :show-divider="true">
    <IntroBox
      content="填充色可作为背景色的补充，在element-plus中用的较少。目前已知有如下几处在使用：1. 表格的行在hover状态的背景色，使用了填充色的light值(css变量：--el-fill-color-light); 2. 带斑马线的表格中，深色行的背景色，使用了lighter值；3.表单控件(输入框/下拉框等)的禁用状态背景色，使用了light值; 4. 文字按钮的各种状态，使用了lighter/light/default值"
      class="mt-spacing-xxs mb-spacing-xs" />
    <div
      class="grid W1200:grid-cols-2 W1350:grid-cols-3 W1450:grid-cols-4 W1600:grid-cols-5 gap-spacing-sm mb-spacing-xs mt-spacing-xxs">
      <div
        v-for="item in configList"
        :key="item.cssVar"
        class="border border-border-light rounded-base p-spacing-xs"
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
  // import { ThemeCategory } from '@/utils/theme/themeManager';
  import { ThemeCategory } from '@itshixun/qst-ui-system';
  import { useThemeConfigList } from '../../composables/useThemeConfigList';

  const { configList } = useThemeConfigList(ThemeCategory.FillColor);
</script>
