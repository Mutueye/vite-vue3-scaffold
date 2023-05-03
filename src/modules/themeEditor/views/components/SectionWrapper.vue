<template>
  <div
    class="mx-spacing pt-spacing pb-spacing-xxs flex flex-col"
    :class="showDivider ? 'border-b border-border-lighter' : ''">
    <div class="font-bold color-text-primary text-size-medium mb-spacing-xxs">
      {{ title }}
    </div>
    <div class="flex flex-col w-full">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { toRefs } from 'vue';

  const props = defineProps<{ title: string; showDivider?: boolean }>();
  const { title, showDivider } = toRefs(props);
</script>
