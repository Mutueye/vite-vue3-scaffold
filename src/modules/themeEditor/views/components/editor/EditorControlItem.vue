<template>
  <div class="flex flex-col items-start justify-start w-full mb-space-sm">
    <div class="color-text-regular font-semibold mb-space-xxs">{{ label }}</div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
  import { toRefs } from 'vue';

  const props = defineProps<{ label: string }>();
  const { label } = toRefs(props);
</script>
