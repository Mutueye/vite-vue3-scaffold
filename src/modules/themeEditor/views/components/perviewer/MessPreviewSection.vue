<template>
  <el-divider content-position="left">{{ title }}</el-divider>
  <div class="flex flex-col mb-spacing-xs">
    <slot />
  </div>
</template>

<script lang="ts" setup>
  import { toRefs } from 'vue';

  const props = defineProps<{ title: string }>();
  const { title } = toRefs(props);
</script>
