<script setup lang="ts">
  import { ref } from 'vue';

  defineProps<{ msg: string }>();

  const count = ref(0);
  const inputStr = ref('');
</script>

<template>
  <div>{{ msg }}</div>
  <div class="py-spacing-sm flex flex-col items-center">
    <el-button type="primary" @click="count++">count is {{ count }}</el-button>
    <el-input v-model="inputStr" class="mt-spacing-sm" placeholder="输入框" />
  </div>
</template>
