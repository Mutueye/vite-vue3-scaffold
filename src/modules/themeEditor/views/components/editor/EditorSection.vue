<template>
  <div class="px-space pt-space flex flex-col">
    <div class="font-bold color-text-primary mb-space-xxs">{{ sectionTitle }}</div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
  import { toRefs } from 'vue';

  const props = defineProps<{ sectionTitle: string }>();
  const { sectionTitle } = toRefs(props);
</script>
