<template>
  <div class="w-full flex flex-col items-center prose">
    <div class="w-full py-50px text-center font-bold prose-lg prose-green">HOME</div>
    <HelloWorld msg="Hellow World" />
    <el-button>text</el-button>
  </div>
</template>

<script lang="ts" setup>
  import HelloWorld from '@/components/HelloWorld.vue';
</script>
