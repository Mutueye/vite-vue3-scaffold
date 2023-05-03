<template>
  <ScrollableContentPage>
    <div class="flex flex-col w-560px mx-auto">
      <div class="border border-border p-spacing mb-spacing-xl rounded-base">
        <div class="text-size-base color-text-regular mb-spacing">
          <span class="color-text-primary font-bold">说明：</span>
          下方表单结合了ElementUI自带的交互细节和以往项目中常用的交互细节，在本页面进行展示，方便讨论时参考
        </div>
        <div class="text-size-base color-text-regular mb-spacing">
          <span class="color-text-primary font-bold">目标：</span>
          确定常规表单交互细节(是否显示必填星标/点击清空图标时是否对字段进行验证/不同控件(输入框/下拉菜单等)的验证时机(change或blur)等)
        </div>
        <div class="text-size-base color-text-regular">
          <span class="color-text-primary font-bold">期望：</span>
          表单交互细节定后，作为默认的缺省规则，由产品/开发/测试三方共同遵守，后续编写产品文档时，仅需要描述在默认细节基础上的变化或扩展，不需要再花时间对表单交互进行详细描述
        </div>
      </div>

      <el-form ref="formRef" :model="formData" :rules="formRules" label-width="120px">
        <el-form-item label="文本框" prop="standardInput">
          <el-input v-model="formData.standardInput" maxlength="5" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="文本框带清空" prop="clearableInput">
          <el-input
            v-model="formData.clearableInput"
            clearable
            placeholder="请输入"
            @clear="formRef ? formRef.validateField('clearableInput') : null" />
        </el-form-item>
        <el-form-item label="文本域" prop="textarea">
          <el-input v-model="formData.textarea" type="textarea" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="选择框" prop="standardSelect">
          <el-select v-model="formData.standardSelect" placeholder="请选择">
            <el-option label="选项A" value="a" />
            <el-option label="选项B" value="b" />
            <el-option label="选项C" value="c" />
          </el-select>
        </el-form-item>
        <el-form-item label="选择框带清空" prop="clearableSelect">
          <el-select
            v-model="formData.clearableSelect"
            placeholder="请选择"
            clearable
            @clear="formRef ? formRef.validateField('clearableSelect') : null">
            <el-option label="选项1" value="1" />
            <el-option label="选项2" value="2" />
            <el-option label="选项3" value="3" />
          </el-select>
        </el-form-item>
        <el-form-item label="日期时间" required>
          <el-col :span="11">
            <el-form-item prop="date">
              <el-date-picker
                v-model="formData.date"
                type="date"
                label="Pick a date"
                placeholder="请选择日期"
                style="width: 100%" />
            </el-form-item>
          </el-col>
          <el-col class="text-center" :span="2">
            <span class="text-gray-500">-</span>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="time">
              <el-time-picker
                v-model="formData.time"
                label="Pick a time"
                placeholder="请选择时间"
                style="width: 100%" />
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="开关" prop="toggle">
          <el-switch v-model="formData.toggle" />
        </el-form-item>
        <el-form-item label="复选框" prop="checkbox">
          <el-checkbox-group v-model="formData.checkbox">
            <el-checkbox label="选项A" />
            <el-checkbox label="选项B" />
            <el-checkbox label="选项C" />
            <el-checkbox label="选项D" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="单选框" prop="radio">
          <el-radio-group v-model="formData.radio">
            <el-radio label="选项A" />
            <el-radio label="选项B" />
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">提交</el-button>
          <el-button @click="formRef ? formRef.resetFields() : null">重置</el-button>
        </el-form-item>
      </el-form>
      <RuleInfoBox :rule-info="ruleInfo" />
    </div>
  </ScrollableContentPage>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import { ElForm, ElMessage, FormInstance, FormRules } from 'element-plus';
  import ScrollableContentPage from '@/modules/layout/views/components/ScrollableContentPage.vue';
  import RuleInfoBox from './components/RuleInfoBox.vue';
  import { RuleInfo } from '../utils/ruleInfo';

  const ruleInfo = ref<RuleInfo>({
    rules: [
      '必填项默认带必填星标‘*’',
      '有“失焦”事件的控件（输入框&文本域），失焦后触发字段验证',
      '其他控件，比如下拉/多选/单选等，值变更时触发字段验证',
      '“开关”控件一般不适合设定验证规则',
      '表单提交时进行表单各字段验证',
      '带“清空”按钮的表单，清空时触发字段验证',
    ],
    rulesTitle: '表单交互细则',
  });

  const formRef = ref<FormInstance>();
  const formData = reactive({
    standardInput: '',
    clearableInput: '',
    standardSelect: '',
    clearableSelect: '',
    date: '',
    time: '',
    toggle: false,
    checkbox: [],
    radio: '',
    textarea: '',
  });

  const formRules = reactive<FormRules>({
    standardInput: [
      { required: true, message: '请输入', trigger: 'blur' },
      { min: 3, max: 5, message: '长度限制3到5字符', trigger: 'blur' },
    ],
    clearableInput: [{ required: true, message: '请输入', trigger: 'blur' }],
    standardSelect: [
      {
        required: true,
        message: '请选择',
        trigger: 'change',
      },
    ],
    clearableSelect: [
      {
        required: true,
        message: '请选择',
        trigger: 'change',
      },
    ],
    date: [
      {
        type: 'date',
        required: true,
        message: '请选择日期',
        trigger: 'change',
      },
    ],
    time: [
      {
        type: 'date',
        required: true,
        message: '请选择时间',
        trigger: 'change',
      },
    ],
    checkbox: [
      {
        type: 'array',
        required: true,
        message: '请至少选择一项',
        trigger: 'change',
      },
    ],
    radio: [
      {
        required: true,
        message: '请选择',
        trigger: 'change',
      },
    ],
    textarea: [{ required: true, message: '请输入', trigger: 'blur' }],
  });

  const submit = () => {
    if (!formRef.value) return;
    formRef.value.validate((valid) => {
      if (valid) {
        ElMessage.success('提交成功!');
      } else {
        ElMessage.warning('请完善表单信息');
      }
    });
  };
</script>
