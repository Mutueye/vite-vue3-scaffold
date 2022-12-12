<script setup lang="ts">
  import { ref } from 'vue';

  defineProps<{ msg: string }>();

  const count = ref(0);
</script>

<template>
  <div>{{ msg }}</div>
  <div class="py-24px">
    <el-button type="primary" @click="count++">count is {{ count }}</el-button>
  </div>
</template>
