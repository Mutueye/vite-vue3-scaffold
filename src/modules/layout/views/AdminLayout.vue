<template>
  <div class="w-full min-h-screen overflow-hidden flex flex-row items-start">
    <AdminLeftMenu />
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
  import AdminLeftMenu from './components/AdminLeftMenu.vue';
</script>
