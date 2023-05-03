<template>
  <el-form :size="size" :inline="true">
    <el-form-item label="表单:">
      <div class="flex flex-row items-center">
        <el-input :value="inputVal" placeholder="请输入" />
        <el-button type="primary" class="ml-spacing-sm">按钮</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
  import { toRefs, computed, ref } from 'vue';

  const props = defineProps<{ configData: { cssVar: string; val: string; type: string } }>();
  const { configData } = toRefs(props);

  const inputVal = ref('');

  const size = computed(() => {
    let sizeStr: '' | 'small' | 'default' | 'large' = '';
    if (configData.value) {
      if (configData.value.type === 'small') {
        sizeStr = 'small';
      } else if (configData.value.type === 'DEFAULT') {
        sizeStr = 'default';
      } else if (configData.value.type === 'large') {
        sizeStr = 'large';
      }
    }
    return sizeStr;
  });
</script>
