C
<template>
  <SectionWrapper title="组件大小" :show-divider="true">
    <ComponentSizeForm v-for="item in configList" :key="item.cssVar" :config-data="item" />
  </SectionWrapper>
</template>

<script lang="ts" setup>
  import SectionWrapper from '../SectionWrapper.vue';
  import ComponentSizeForm from './ComponentSizeForm.vue';
  import { ThemeCategory } from '@/utils/theme/themeManager';
  import { useThemeConfigList } from '../../composables/useThemeConfigList';

  const { configList } = useThemeConfigList(ThemeCategory.ComponentSize);
</script>
