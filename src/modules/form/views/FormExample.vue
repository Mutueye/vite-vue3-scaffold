<template>
  <DefaultLayout>
    <div
      class="flex flex-col w-full bg-[var(--el-bg-color)] my-space-lg rounded-[var(--el-border-radius-base)] shadow">
      <div class="text-size-24px font-bold w-full text-center mt-space-lg">
        常用字段验证规则（讨论稿）
      </div>
      <div class="flex flex-col w-560px mx-auto py-space">
        <div
          class="border border-[var(--el-border-color)] p-space mb-space-lg rounded-[var(--el-border-radius-base)]">
          <div class="text-size-14px text-[var(--el-text-color-regular)] mb-space">
            <span class="text-[var(--el-text-color-primary)] font-bold">说明：</span>
            以下字段验证规则汇总了用户中心和优加竞赛所涉及的相关规则，在本页面进行展示，方便讨论时参考
          </div>
          <div class="text-size-14px text-[var(--el-text-color-regular)] mb-space">
            <span class="text-[var(--el-text-color-primary)] font-bold">目标：</span>
            1. 确定常用字段验证规则；2. 确定每个字段各种情况下的错误提示文字；3.
            确定常规表单交互细节(是否显示必填星标/点击清空图标时是否对字段进行验证/不同控件(输入框/下拉菜单等)的验证时机(change或blur)等)
          </div>
          <div class="text-size-14px text-[var(--el-text-color-regular)]">
            <span class="text-[var(--el-text-color-primary)] font-bold">期望：</span>
            验证规则确定后，作为默认的缺省规则，由产品/开发/测试三方共同遵守，后续编写产品文档时，仅需要描述在默认规则基础上的变化或扩展，不需要浪费时间对表单交互进行详细描述
          </div>
        </div>

        <el-form
          ref="formRef"
          label-position="top"
          size="large"
          :model="formData"
          :rules="formRules"
          :hide-required-asterisk="true">
          <el-form-item prop="name" label="姓名：">
            <el-input
              v-model="formData.name"
              maxlength="60"
              placeholder="请输入姓名"
              clearable
              @clear="() => (formRef ? formRef.validateField('name') : null)" />
          </el-form-item>
          <div class="rule-box">
            <div class="text-size-13px font-bold mb-5px">姓名/昵称</div>
            <div class="rule-item">中文 1-20 个字符，英文 3-60 个字符（字节长度3-60）；</div>
            <div class="rule-item">
              可以包含中文、英文字母、数字、空格、半角句点、半角逗号、间隔号、短横线、下划线；
            </div>
            <div class="rule-item">不能以空格、半角句点、半角逗号、间隔号、短横线开头或结尾</div>
            <div class="reg-content">正则（不包含长度限制）：{{ regName.toString() }}</div>
          </div>
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
          <div class="rule-box">
            <div class="text-size-13px font-bold mb-5px">密码</div>
            <div class="rule-item">6-20 个字符，只能包含英文字母、数字、特殊字符（不含空格）；</div>
            <div class="rule-item">字母、数字、标点符号至少包含 2 种</div>
            <div class="reg-content">正则：{{ regPassword.toString() }}</div>
          </div>
          <el-form-item prop="account" label="账号：">
            <el-input
              v-model.trim="formData.account"
              maxlength="60"
              clearable
              placeholder="请输入账号名"
              @clear="formRef ? formRef.validateField('account') : null" />
          </el-form-item>
          <div class="rule-box">
            <div class="text-size-13px font-bold mb-5px">账号</div>
            <div class="rule-item">只能包含中文、英文字母、数字、下划线；</div>
            <div class="rule-item">中文 2-20 个字符，英文 6-60 个字符（字节长度6-60）；</div>
            <div class="rule-item">不能以下划线开头或结尾；</div>
            <div class="rule-item">不能是纯数字</div>
          </div>
          <el-form-item prop="captcha" label="验证码：">
            <el-input
              v-model.trim="formData.captcha"
              placeholder="请输入验证码"
              maxlength="6"
              clearable
              @clear="formRef ? formRef.validateField('captcha') : null" />
          </el-form-item>
          <div class="rule-box">
            <div class="text-size-13px font-bold mb-5px">验证码</div>
            <div class="rule-item">6位数字</div>
            <div class="reg-content">正则：{{ regCaptcha.toString() }}</div>
          </div>
          <el-form-item prop="code" label="学号/工号：">
            <el-input
              v-model.trim="formData.code"
              maxlength="50"
              clearable
              placeholder="请输入学号/工号"
              @clear="formRef ? formRef.validateField('code') : null" />
          </el-form-item>
          <div class="rule-box">
            <div class="text-size-13px font-bold mb-5px">学号/工号</div>
            <div class="rule-item">数字/字母，50个字符</div>
            <div class="reg-content">正则：{{ regCode.toString() }}</div>
          </div>
          <el-form-item prop="mobile" label="手机号：">
            <el-input
              v-model.trim="formData.mobile"
              placeholder="请输入手机号"
              maxlength="11"
              clearable
              @clear="formRef ? formRef.validateField('mobile') : null" />
          </el-form-item>
          <div class="rule-box">
            <div class="text-size-13px font-bold mb-5px">手机号</div>
            <div class="rule-item">中国大陆(+86)的11位手机号；</div>
            <div class="rule-item">数字1开头，第二位数字3到9</div>
            <div class="reg-content">正则：{{ regMobile.toString() }}</div>
          </div>
          <el-form-item prop="email" label="邮箱：">
            <el-input
              v-model.trim="formData.email"
              placeholder="请输入邮箱"
              clearable
              @clear="formRef ? formRef.validateField('email') : null" />
          </el-form-item>
          <div class="rule-box">
            <div class="text-size-13px font-bold mb-5px">邮箱</div>
            <div class="rule-item">必须为标准邮箱地址格式；</div>
            <div class="rule-item">
              本地部分（@之前）允许英文字母、数字、中文、短横线、下划线、半角句点，最大长度64（字节长度64）；
            </div>
            <div class="rule-item">
              域部分（@之后）允许英文字母、数字、中文、短横线、下划线、半角句点，最大长度255（字节长度255）；
            </div>
            <div class="rule-item">域部分最多支持 5 级域名</div>
            <div class="reg-content">正则（不包含长度限制）：{{ regEmail.toString() }}</div>
          </div>
          <el-form-item prop="idcode" label="身份证号：">
            <el-input
              v-model.trim="formData.idcode"
              placeholder="请输入身份证号"
              maxlength="18"
              clearable
              @clear="formRef ? formRef.validateField('idcode') : null" />
          </el-form-item>
          <div class="rule-box">
            <div class="text-size-13px font-bold mb-5px">身份证号</div>
            <div class="rule-item">
              18位身份证号：6位地区号(其中前两位：[第一位1～6，第二位1-9]或者50(重庆地区50)) +
              4位年份(18xx到20xx) + 2位月份(01到12) + 2位日期(01到31) + 3位数字顺序码 +
              1位校验码(数字或X或x)；
            </div>
            <div class="rule-item">
              15位身份证号：6位地区号(其中前两位：[第一位1～6，第二位1-9]或者50(重庆地区50)) +
              2位年份数字(年份后两位) + 2位月份(01到12) + 2位日期(01到31) + 3位数字顺序码
            </div>
            <div class="reg-content">
              <div>18位正则：{{ regId18.toString() }}</div>
              <div class="mt-space-xs">15位正则：{{ regId15.toString() }}</div>
            </div>
          </div>
          <el-form-item prop="organ" label="机构名称：">
            <el-input
              v-model.trim="formData.organ"
              placeholder="请输入机构名称"
              maxlength="255"
              clearable
              @clear="formRef ? formRef.validateField('organ') : null" />
          </el-form-item>
          <div class="rule-box">
            <div class="text-size-13px font-bold mb-5px">机构名称</div>
            <div class="rule-item">
              可以包含中文、英文字母、数字、空格、半角句点、半角逗号、中文圆括号、英文圆括号；
            </div>
            <div class="rule-item">中文 2-85 个字符，英文 6-255 个字符（字节长度6-255）；</div>
            <div class="rule-item">不能以空格、半角句点、半角逗号、圆括号开头或结尾；</div>
            <div class="reg-content">正则(不包含长度限制)：{{ regOrgan.toString() }}</div>
          </div>
          <el-form-item>
            <el-button type="primary" class="w-full" @click="submit">确定</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </DefaultLayout>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue';
  import { ElForm, ElMessage, FormRules } from 'element-plus';
  import DefaultLayout from '@/components/layout/DefaultLayout.vue';
  import {
    globalFormRules,
    regName,
    regPassword,
    regCaptcha,
    regCode,
    regMobile,
    regEmail,
    regId18,
    regId15,
    regOrgan,
  } from '@/utils/formRules';

  const formRef = ref<InstanceType<typeof ElForm>>();
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

<style lang="scss" scoped>
  .rule-box {
    @apply p-space-sm mt-space mb-space-xxl border border-[var(--el-color-warning-light-7)] rounded-[var(--el-border-radius-base)] bg-[var(--el-color-warning-light-9)];
    .rule-item {
      @apply pl-space-sm text-size-12px mt-space-xs relative leading-18px;
      &::before {
        @apply content-empty absolute w-5px h-5px top-6px left-2px transform rotate-45 bg-[var(--el-text-color-secondary)];
      }
    }
    .reg-content {
      @apply border-t border-[var(--el-color-warning-light-7)] font-bold pt-space-sm mt-space-sm text-size-12px text-[var(--el-color-warning)];
    }
  }
</style>
