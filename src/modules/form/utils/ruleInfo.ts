import {
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

export interface MessageItem {
  condition: string;
  message: string;
}

export interface RuleInfo {
  rules: string[];
  rulesTitle?: string;
  messages?: MessageItem[];
  regexLabel?: string;
  regexInfo?: string;
}

export const ruleInfoList: Record<string, RuleInfo> = {
  name: {
    rules: [
      '中文 1-20 个字符，英文 3-60 个字符（字节长度3-60）',
      '可以包含中文、英文字母、数字、空格、半角句点、半角逗号、间隔号、短横线、下划线',
      '不能以空格、半角句点、半角逗号、间隔号、短横线开头或结尾',
    ],
    messages: [
      { condition: '未填写', message: '请输入姓名' },
      { condition: '不符合验证规则', message: '请输入1-20位中英文字符' },
    ],
    regexLabel: '正则（不包含长度限制）',
    regexInfo: regName.toString(),
  },
  password: {
    rules: [
      '6-20 个字符，只能包含英文字母、数字、特殊字符（不含空格）',
      '字母、数字、标点符号至少包含 2 种',
    ],
    messages: [
      { condition: '未填写', message: '请输入密码' },
      { condition: '不符合验证规则', message: '6-20位字符，至少包含数字、字母、符号2种元素' },
    ],
    regexLabel: '正则',
    regexInfo: regPassword.toString(),
  },
  account: {
    rules: [
      '只能包含中文、英文字母、数字、下划线',
      '中文 2-20 个字符，英文 6-60 个字符（字节长度6-60）',
      '不能以下划线开头或结尾',
      '不能是纯数字',
    ],
    messages: [
      { condition: '未填写', message: '请输入账号名' },
      { condition: '输入的字节长度不在6-60范围内', message: '中文 2-20 个字符，英文 6-60 个字符' },
      {
        condition: '输入 中英文/数字/下划线 以外的字符',
        message: '只能包含中文、英文字母、数字、下划线',
      },
      { condition: '下划线开头或结尾', message: '不能以下划线开头或结尾' },
      { condition: '输入纯数字', message: '不能是纯数字' },
    ],
  },
  captcha: {
    rules: ['6位数字'],
    messages: [
      { condition: '未填写', message: '请输入验证码' },
      { condition: '不符合验证规则', message: '请输入正确验证码' },
    ],
    regexLabel: '正则',
    regexInfo: regCaptcha.toString(),
  },
  code: {
    rules: ['只能包含数字/字母 50个字符'],
    messages: [
      { condition: '未填写', message: '请输入学号/工号' },
      { condition: '不符合验证规则', message: '学号/工号格式不正确' },
    ],
    regexLabel: '正则',
    regexInfo: regCode.toString(),
  },
  mobile: {
    rules: ['11位数字', '数字1开头，第二位数字3到9'],
    messages: [
      { condition: '未填写', message: '请输入手机号' },
      { condition: '不符合验证规则', message: '请输入正确手机号' },
    ],
    regexLabel: '正则',
    regexInfo: regMobile.toString(),
  },
  email: {
    rules: [
      '必须为标准邮箱地址格式',
      '本地部分（@之前）允许英文字母、数字、中文、短横线、下划线、半角句点，最大长度64（字节长度64）',
      '域部分（@之后）允许英文字母、数字、中文、短横线、下划线、半角句点，最大长度255（字节长度255）',
      '域部分最多支持 5 级域名',
    ],
    messages: [
      { condition: '未填写', message: '请输入邮箱' },
      { condition: '不符合标准邮箱格式', message: '请输入格式正确的邮箱' },
      { condition: '本地部分（@之前）超过64字节', message: '本地部分（@之前）最大长度为64' },
      { condition: '域部分（@之后）超过255字节', message: '域部分（@之后）最大长度为255' },
    ],
    regexLabel: '正则（不包含长度限制）',
    regexInfo: regEmail.toString(),
  },
  idcode: {
    rules: [
      '18位身份证号：6位地区号(其中前两位：[第一位1～6，第二位1-9]或者50(重庆地区50)) + 4位年份(18xx到20xx) + 2位月份(01到12) + 2位日期(01到31) + 3位数字顺序码 + 1位校验码(数字或X或x)；',
      '15位身份证号：6位地区号(其中前两位：[第一位1～6，第二位1-9]或者50(重庆地区50)) + 2位年份数字(年份后两位) + 2位月份(01到12) + 2位日期(01到31) + 3位数字顺序码',
    ],
    messages: [
      { condition: '未填写', message: '请输入身份证号' },
      { condition: '不符合验证规则', message: '请输入有效的身份证号' },
    ],
    regexLabel: '正则',
    regexInfo: `18位身份证号正则：${regId18.toString()}，15位身份证号正则：${regId15.toString()}`,
  },
  organ: {
    rules: [
      '可以包含中文、英文字母、数字、空格、半角句点、半角逗号、中文圆括号、英文圆括号',
      '中文 2-85 个字符，英文 6-255 个字符（字节长度6-255）',
      '不能以空格、半角句点、半角逗号、圆括号开头或结尾',
    ],
    messages: [
      { condition: '未填写', message: '请输入机构名称' },
      { condition: '长度不在6-255字节范围内', message: '机构名称长度限6～255个字节' },
      { condition: '不符合验证规则', message: '机构名称格式不正确' },
    ],
    regexLabel: '正则（不包含长度限制）',
    regexInfo: regOrgan.toString(),
  },
};
