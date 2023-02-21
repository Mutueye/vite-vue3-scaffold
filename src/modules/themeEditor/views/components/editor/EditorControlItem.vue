<template>
  <div class="flex flex-col items-start justify-start w-full mb-space-sm">
    <div class="flex flex-row w-full justify-between items-center mb-space-xxs">
      <div class="color-text-regular font-semibold truncate mr-space-sm">{{ title }}</div>
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
