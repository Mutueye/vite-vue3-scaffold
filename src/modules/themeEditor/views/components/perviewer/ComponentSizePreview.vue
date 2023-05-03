C
<template>
  <SectionWrapper title="组件大小" :show-divider="true">
    <IntroBox
      content="基于element-plus的配置，提供了三种组件大小，以适应不同的使用场景"
      class="mt-spacing-xxs mb-spacing-xs" />
    <ComponentSizeForm v-for="item in configList" :key="item.cssVar" :config-data="item" />
  </SectionWrapper>
</template>

<script lang="ts" setup>
  import SectionWrapper from '../SectionWrapper.vue';
  import IntroBox from './IntroBox.vue';
  import ComponentSizeForm from './ComponentSizeForm.vue';
  // import { ThemeCategory } from '@/utils/theme/themeManager';
  import { ThemeCategory } from '@itshixun/qst-ui-system';
  import { useThemeConfigList } from '../../composables/useThemeConfigList';

  const { configList } = useThemeConfigList(ThemeCategory.ComponentSize);
</script>
