<template>
  <div class="w-24px h-24px flex items-center justify-center mr-6px">
    <i
      class="inline-block align-middle text-size-16px"
      :class="iconClass ? iconClass : 'i-mdi-circle-medium'" />
  </div>
</template>

<script lang="ts" setup>
  defineProps<{ iconClass: string }>();
</script>
