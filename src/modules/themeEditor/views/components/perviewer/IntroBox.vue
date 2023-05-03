<template>
  <div class="bg-bg-page p-spacing-sm text-size-base">{{ content }}</div>
</template>

<script lang="ts" setup>
  import { toRefs } from 'vue';

  const props = defineProps<{ content: string }>();
  const { content } = toRefs(props);
</script>
