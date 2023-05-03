<template>
  <div class="flex flex-col items-start justify-start w-full mb-spacing-sm">
    <div class="flex flex-row w-full justify-between items-center mb-spacing-xxs">
      <div class="color-text-regular font-semibold truncate mr-spacing-sm">{{ title }}</div>
      <div class="color-text-regular text-size-12px flex-1 truncate text-right">{{ label }}</div>
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
  import { toRefs } from 'vue';

  const props = defineProps<{ title: string; label: string }>();
  const { title, label } = toRefs(props);
</script>
