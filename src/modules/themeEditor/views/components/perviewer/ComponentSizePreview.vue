C
<template>
  <SectionWrapper title="组件大小" :show-divider="true">
    <IntroBox
      content="基于element-ui和element-plus的配置，提供了四种组件大小，以适应不同的使用场景，此处展示element-plus支持的3种大小：small, default, large"
      class="mt-spacing-xxs mb-spacing-xs" />
    <ComponentSizeForm v-for="item in filteredConfigList" :key="item.cssVar" :config-data="item" />
  </SectionWrapper>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { ThemeCategory } from '@itshixun/qst-ui-system';
  import SectionWrapper from '../SectionWrapper.vue';
  import IntroBox from './IntroBox.vue';
  import ComponentSizeForm from './ComponentSizeForm.vue';
  import { useThemeConfigList } from '../../composables/useThemeConfigList';

  const { configList } = useThemeConfigList(ThemeCategory.ComponentSize);

  const filteredConfigList = computed(() => {
    return configList.value.filter((item) => item.type !== 'mini');
  });
</script>
