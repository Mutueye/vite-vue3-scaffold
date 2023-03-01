<template>
  <div
    class="mx-space pt-space pb-space-xxs flex flex-col"
    :class="showDivider ? 'border-b border-border-lighter' : ''">
    <div class="font-bold color-text-primary text-size-medium mb-space-xxs">
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
