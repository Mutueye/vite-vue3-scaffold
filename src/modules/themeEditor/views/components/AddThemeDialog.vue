<template>
  <el-dialog v-model="state.show" title="新增主题" width="420px" :before-close="handleClose">
    <el-form
      ref="formRef"
      label-position="left"
      :model="formData"
      :rules="formRules"
      :validate-on-rule-change="false"
      class="-mb-22px"
      @submit.enter.prevent>
      <el-form-item prop="themeName">
        <el-input
          v-model.trim="formData.themeName"
          placeholder="请输入主题名称"
          class="input-indent-95px"
          clearable />
      </el-form-item>
      <el-form-item>
        <div class="w-full flex flex-row justify-end mt-10px">
          <el-button type="primary" :disabled="state.submitDisabled" @click="submit">
            确定
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script setup lang="ts">
  import { reactive, ref, watch } from 'vue';
  import { storeToRefs } from 'pinia';
  import { ElForm, ElMessage, FormRules } from 'element-plus';
  import { useThemeStore } from '@/store/theme';
  import { defaultThemeList } from '@itshixun/qst-ui-system';
  import { cloneDeep } from 'lodash-es';

  const themeStore = useThemeStore();
  const { themeList } = storeToRefs(themeStore);

  const formRef = ref<InstanceType<typeof ElForm>>();
  const formData = reactive({
    themeName: '',
  });
  const formRules = reactive<FormRules>({
    themeName: [{ required: true, message: '请输入主题名称' }],
  });

  const state = reactive({
    show: false,
    submitDisabled: true,
  });

  watch(
    formData,
    (val) => {
      // 监听form表单是否填写完整（提交按钮是否可用）
      if (val && val.themeName) {
        state.submitDisabled = false;
      } else {
        state.submitDisabled = true;
      }
    },
    { deep: true, immediate: true },
  );

  /**
   * 打开弹窗
   */
  const open = () => {
    state.show = true;
  };
  /**
   * 提交绑定
   */
  const submit = () => {
    if (!formRef.value) return;
    formRef.value.validate((valid: boolean) => {
      if (valid) {
        // avoid duplicate names
        let isDuplicated = false;
        themeList.value.forEach((theme) => {
          if (theme.name === formData.themeName) {
            isDuplicated = true;
          }
        });
        if (isDuplicated) {
          ElMessage.warning(`主题名称“${formData.themeName}”已使用`);
        } else {
          const newThemeList = [
            ...themeList.value,
            {
              name: formData.themeName,
              config: cloneDeep(defaultThemeList[0].config),
            },
          ];
          themeStore.setThemeList(newThemeList, true);
          handleClose();
        }
      }
    });
  };

  // 关闭时重置弹窗内容
  const handleClose = () => {
    state.show = false;
    formRef.value && formRef.value.resetFields();
  };

  defineExpose({ open });
</script>
