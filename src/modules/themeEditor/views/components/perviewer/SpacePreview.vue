<template>
  <SectionWrapper title="间距" :show-divider="true">
    <div
      v-for="item in configList"
      :key="item.cssVar"
      class="flex flex-col w-full mb-spacing-xs border border-border-light rounded-base"
      :style="{ padding: item.val }">
      <div
        class="grid grid-cols-2 W1600:grid-cols-4"
        :style="{ gap: `var(${item.cssVar})`, gridGap: `var(${item.cssVar})` }">
        <div
          class="bg-bg-secondary h-component-size rounded-base flex items-center justify-center text-size-extra-small col-span-full">
          {{ item.type }}: {{ item.val }}
        </div>
        <div class="bg-bg-secondary h-component-size rounded-base" />
        <div class="bg-bg-secondary h-component-size rounded-base" />
        <div class="bg-bg-secondary h-component-size rounded-base" />
        <div class="bg-bg-secondary h-component-size rounded-base" />
      </div>
    </div>
  </SectionWrapper>
</template>

<script lang="ts" setup>
  import SectionWrapper from '../SectionWrapper.vue';
  import { ThemeCategory } from '@itshixun/qst-ui-system';
  import { useThemeConfigList } from '../../composables/useThemeConfigList';

  const { configList } = useThemeConfigList(ThemeCategory.Spacing);
</script>
