<template>
  <div class="w-full min-h-screen overflow-hidden">
    <Header class="fixed left-0 right-0 top-0 z-1000" />
    <div class="w-1200px flex flex-col mt-header flex-1 flex-shrink-0 mx-auto">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Header from './components/Header.vue';
</script>
