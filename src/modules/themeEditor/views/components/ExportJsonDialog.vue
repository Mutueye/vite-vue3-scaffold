<template>
  <el-dialog
    v-model="state.show"
    title="导出主题JSON文件"
    width="460px"
    :before-close="handleClose">
    <div class="h-40vh flex flex-col border border-border-light rounded-base bg-bg-page">
      <el-scrollbar>
        <pre class="p-spacing-sm">{{ jsonStr }}</pre>
        <!-- <el-input type="textarea" autosize :value="jsonStr" /> -->
      </el-scrollbar>
    </div>
    <div class="flex flex-row justify-end mt-spacing-md">
      <el-button @click="handleClose">取消</el-button>
      <el-button type="primary" @click="submit">导出</el-button>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
  import { reactive, computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useThemeStore } from '@/store/theme';

  const themeStore = useThemeStore();
  const { currentThemeData } = storeToRefs(themeStore);

  const state = reactive({
    show: false,
  });

  const jsonStr = computed(() => JSON.stringify(currentThemeData.value, null, 4));

  /**
   * 打开弹窗
   */
  const open = () => {
    state.show = true;
    console.log('currentJson.value:::::::', JSON.stringify(currentThemeData.value));
  };
  /**
   * 提交
   */
  const submit = () => {
    // 导出
    const filename = `${currentThemeData.value.name}.json`;

    let element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:application/json;charset=utf-8,' + encodeURIComponent(jsonStr.value),
    );
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  const handleClose = () => {
    state.show = false;
  };

  defineExpose({ open });
</script>
