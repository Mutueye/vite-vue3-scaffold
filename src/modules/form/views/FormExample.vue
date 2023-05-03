<template>
  <ScrollableContentPage>
    <div class="flex flex-col w-560px mx-auto">
      <div class="border border-border p-spacing mb-spacing-xl rounded-base">
        <div class="text-size-base color-text-regular mb-spacing">
          <span class="color-text-primary font-bold">说明：</span>
          以下字段验证规则汇总了用户中心和优加竞赛所涉及的相关规则，在本页面进行展示，方便讨论时参考
        </div>
        <div class="text-size-base color-text-regular mb-spacing">
          <span class="color-text-primary font-bold">目标：</span>
          1. 确定常用字段验证规则；2. 确定每个字段各种情况下的错误提示文字
        </div>
        <div class="text-size-base color-text-regular">
          <span class="color-text-primary font-bold">期望：</span>
          验证规则确定后，作为默认的缺省规则，由产品/开发/测试三方共同遵守，后续编写产品文档时，仅需要描述在默认规则基础上的变化或扩展，不需要再花时间对规则进行详细描述
        </div>
      </div>

      <el-form
        ref="formRef"
        label-position="top"
        size="large"
        :model="formData"
        :rules="formRules"
        :hide-required-asterisk="true">
        <el-form-item prop="name" label="姓名(昵称)：">
          <el-input
            v-model="formData.name"
            maxlength="60"
            placeholder="请输入姓名"
            clearable
            @clear="() => (formRef ? formRef.validateField('name') : null)" />
        </el-form-item>
        <RuleInfoBox :rule-info="ruleInfoList.name" />
        <el-form-item prop="password" label="密码：">
          <el-input
            v-model.trim="formData.password"
            placeholder="请输入密码"
            clearable
            autocomplete="new-password"
            class="input-indent-45px"
            maxlength="20"
            :show-password="true"
            @clear="formRef ? formRef.validateField('password') : null" />
        </el-form-item>
        <RuleInfoBox :rule-info="ruleInfoList.password" />
        <el-form-item prop="account" label="账号：">
          <el-input
            v-model.trim="formData.account"
            maxlength="60"
            clearable
            placeholder="请输入账号名"
            @clear="formRef ? formRef.validateField('account') : null" />
        </el-form-item>
        <RuleInfoBox :rule-info="ruleInfoList.account" />
        <el-form-item prop="captcha" label="验证码：">
          <el-input
            v-model.trim="formData.captcha"
            placeholder="请输入验证码"
            maxlength="6"
            clearable
            @clear="formRef ? formRef.validateField('captcha') : null" />
        </el-form-item>
        <RuleInfoBox :rule-info="ruleInfoList.captcha" />
        <el-form-item prop="code" label="学号/工号：">
          <el-input
            v-model.trim="formData.code"
            maxlength="50"
            clearable
            placeholder="请输入学号/工号"
            @clear="formRef ? formRef.validateField('code') : null" />
        </el-form-item>
        <RuleInfoBox :rule-info="ruleInfoList.code" />
        <el-form-item prop="mobile" label="手机号：">
          <el-input
            v-model.trim="formData.mobile"
            placeholder="请输入手机号"
            maxlength="11"
            clearable
            @clear="formRef ? formRef.validateField('mobile') : null" />
        </el-form-item>
        <RuleInfoBox :rule-info="ruleInfoList.mobile" />
        <el-form-item prop="email" label="邮箱：">
          <el-input
            v-model.trim="formData.email"
            placeholder="请输入邮箱"
            clearable
            @clear="formRef ? formRef.validateField('email') : null" />
        </el-form-item>
        <RuleInfoBox :rule-info="ruleInfoList.email" />
        <el-form-item prop="idcode" label="身份证号：">
          <el-input
            v-model.trim="formData.idcode"
            placeholder="请输入身份证号"
            maxlength="18"
            clearable
            @clear="formRef ? formRef.validateField('idcode') : null" />
        </el-form-item>
        <RuleInfoBox :rule-info="ruleInfoList.idcode" />
        <el-form-item prop="organ" label="机构名称：">
          <el-input
            v-model.trim="formData.organ"
            placeholder="请输入机构名称"
            maxlength="255"
            clearable
            @clear="formRef ? formRef.validateField('organ') : null" />
        </el-form-item>
        <RuleInfoBox :rule-info="ruleInfoList.organ" />
        <el-form-item>
          <el-button type="primary" class="w-full" @click="submit">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
  </ScrollableContentPage>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue';
  import { ElForm, ElMessage, FormInstance, FormRules } from 'element-plus';
  import ScrollableContentPage from '@/modules/layout/views/components/ScrollableContentPage.vue';
  import RuleInfoBox from './components/RuleInfoBox.vue';
  import { globalFormRules } from '@/utils/formRules';
  import { ruleInfoList } from '../utils/ruleInfo';

  const formRef = ref<FormInstance>();
  const formData = reactive<{
    name: string;
    password: string;
    account: string;
    captcha: string;
    code: string;
    mobile: string;
    email: string;
    idcode: string;
    organ: string;
  }>({
    name: '',
    password: '',
    account: '',
    captcha: '',
    code: '',
    mobile: '',
    email: '',
    idcode: '',
    organ: '',
  });

  const formRules = ref<FormRules>({
    name: globalFormRules.name,
    password: globalFormRules.password,
    account: globalFormRules.username,
    captcha: globalFormRules.captcha,
    code: globalFormRules.code,
    mobile: globalFormRules.mobile,
    email: globalFormRules.email,
    idcode: globalFormRules.idCode,
    organ: globalFormRules.organ,
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
