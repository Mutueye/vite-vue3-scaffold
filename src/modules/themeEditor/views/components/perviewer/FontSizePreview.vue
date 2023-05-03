<template>
  <SectionWrapper title="字号" :show-divider="true">
    <div
      v-for="item in configList"
      :key="item.cssVar"
      class="w-full mb-spacing-xs"
      :style="{ fontSize: `var(${item.cssVar})` }">
      FontSize字号大小示例 ({{ item.type }}: {{ item.val }})
    </div>
  </SectionWrapper>
</template>

<script lang="ts" setup>
  import SectionWrapper from '../SectionWrapper.vue';
  import { ThemeCategory } from '@itshixun/qst-ui-system';
  import { useThemeConfigList } from '../../composables/useThemeConfigList';

  const { configList } = useThemeConfigList(ThemeCategory.FontSize);
</script>
