<template>
  <div
    class="w-full h-header flex flex-row items-center justify-between px-spacing bg-bg border-b border-border-light">
    <div class="flex flex-row items-center">
      <i inline-block align-middle text-size-32px class="i-uplus:logo" />
      <div class="text-size-large font-semibold ml-10px">前端脚手架</div>
    </div>
    <ThemeToggler />
  </div>
</template>

<script lang="ts" setup>
  import ThemeToggler from './ThemeToggler.vue';
</script>
