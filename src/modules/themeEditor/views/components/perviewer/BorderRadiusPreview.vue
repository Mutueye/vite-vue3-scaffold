<template>
  <SectionWrapper title="圆角" :show-divider="true">
    <div
      class="grid W1200:grid-cols-2 W1350:grid-cols-3 W1450:grid-cols-4 W1600:grid-cols-5 gap-space-sm mb-space-xs mt-space-xxs">
      <div
        v-for="item in configList"
        :key="item.cssVar"
        class="rounded-base p-space-xs bg-bg-secondary"
        :style="{ borderRadius: `var(${item.cssVar})` }">
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
  import { ThemeCategory } from '@/utils/theme/themeManager';
  import { useThemeConfigList } from '../../composables/useThemeConfigList';

  const { configList } = useThemeConfigList(ThemeCategory.BorderRadius);
</script>
