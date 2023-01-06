import getByteLength from './getByteLength';

/**
 * 姓名&昵称 正则
 * ● 可以包含中文、英文字母、数字、空格、半角句点、半角逗号、间隔号、短横线、下划线；
 * ● 不能以空格、半角句点、半角逗号、间隔号、短横线开头或结尾
 */
export const regName = /^(?![ ,.·\-_])(?!.*?[ ,.·\-_]$)[a-zA-Z0-9 ,.·\-_\u4e00-\u9fa5]+$/;

/**
 * 密码 正则
 * ● 6-20 个字符，只能包含英文字母、数字、特殊字符（不含空格）
 * ● 字母、数字、标点符号至少包含 2 种
 */
export const regPassword =
  /^(?!^[A-Za-z]+$)(?!^\d+$)(?!^[.!@#$%\\\\^&\\*\\)(+={}[\]/",'<>~·`?:;|]+$)[a-z_A-Z0-9-.!@#$%\\\\^&*)(+={}[\]/",'<>~·`?:;|]{6,20}$/;

/**
 * 手机号 正则
 */
export const regMobile = /^1[3-9]\d{9}$/;

/**
 * 验证码 正则
 * ● 6位数字
 */
export const regCaptcha = /\d{6}$/;

/**
 * 学号/工号 正则
 * ● 数字/字母 50字符以内
 */
export const regCode = /^[a-zA-Z0-9]{0,50}$/;

/**
 * 邮箱 正则
 */
export const regEmail =
  /^[a-zA-Z0-9-._\u4e00-\u9fa5]+@[a-zA-Z0-9-_\u4e00-\u9fa5]+(\.[a-zA-Z0-9-_\u4e00-\u9fa5]+){1,5}$/;

/**
 * 身份证号 18位
 */
export const regId18 =
  /^([1-6][1-9]|50)\d{4}(18|19|20)\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;

/**
 * 身份证号 15位
 */
export const regId15 =
  /^([1-6][1-9]|50)\d{4}\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}$/;

/**
 * 机构名称 正则
 */
export const regOrgan = /^(?![()（）. ,])(?!.*?[()（）. ,]$)[a-zA-Z0-9()（）. ,\u4e00-\u9fa5]+$/;

/**
 * 通用的字节长度验证方法
 */
export const byteLengthValidator = ({
  value,
  callback,
  minByteLength,
  maxByteLength,
  message,
}: {
  value: string;
  callback: (err?: string | Error | undefined) => void;
  minByteLength: number;
  maxByteLength: number;
  message: string;
}) => {
  if (value === '') {
    callback();
  } else {
    const length = getByteLength(value);
    if (length >= minByteLength && length <= maxByteLength) {
      callback();
    } else {
      callback(new Error(message));
    }
  }
};

/**
 * 姓名&昵称 验证字节长度
 * ● 中文 1-20 个字符，英文 3-60 个字符（字节长度3-60）；
 */
export const nameLengthValidator = (
  rule: unknown,
  value: string,
  callback: (err?: string | Error | undefined) => void,
) => {
  byteLengthValidator({
    value,
    callback,
    minByteLength: 3,
    maxByteLength: 60,
    message: '请输入1-20位中英文字符',
  });
};

/**
 * 验证用户名（账号名），验证规则：
 * ● 只能包含中文、英文字母、数字、下划线；
 * ● 中文 2-20 个字符，英文 6-60 个字符（字节长度6-60）；
 * ● 不能以下划线开头或结尾；
 * ● 不能是纯数字。
 */
export const usernameValidator = (
  rule: unknown,
  value: string,
  callback: (err?: string | Error | undefined) => void,
) => {
  if (!value) {
    callback();
  } else {
    const reg = /[^a-zA-Z0-9_\u4e00-\u9fa5]/;
    const min_byte_size = 6,
      max_byte_size = 60;
    if (reg.test(value)) {
      callback(new Error('只能包含中文、英文字母、数字、下划线'));
    } else {
      const length = getByteLength(value);
      if (length >= min_byte_size && length <= max_byte_size) {
        const reg2 = /^_/;
        if (reg2.test(value)) {
          callback(new Error('不能以下划线开头或结尾'));
        } else {
          const reg3 = /_$/;
          if (reg3.test(value)) {
            callback(new Error('不能以下划线开头或结尾'));
          } else {
            const regNumber = /^\d{1,}$/;
            if (regNumber.test(value)) {
              callback(new Error('不能是纯数字'));
            } else {
              callback();
            }
          }
        }
      } else {
        callback(new Error('中文 2-20 个字符，英文 6-60 个字符'));
      }
    }
  }
};

/**
 * 验证邮箱
 */
export const emailValidator = (
  rule: unknown,
  value: string,
  callback: (err?: string | Error | undefined) => void,
) => {
  if (value === '') {
    callback();
  } else {
    if (!regEmail.test(value)) {
      callback(new Error('请输入格式正确的邮箱'));
    } else {
      const before = value.slice(0, value.indexOf('@'));
      const beforeLength = getByteLength(before);
      if (beforeLength > 64) {
        callback(new Error('本地部分（@之前）最大长度为64'));
      }
      const after = value.slice(value.indexOf('@') + 1);
      const afterLength = getByteLength(after);
      if (afterLength > 255) {
        callback(new Error('域部分（@之后）最大长度为255'));
      }
      callback();
    }
  }
};

/**
 * 身份证号验证
 */
export const idCodeValidator = (
  rule: unknown,
  value: string,
  callback: (err?: string | Error | undefined) => void,
) => {
  if (value === '') {
    callback();
  } else {
    if (regId18.test(value) || regId15.test(value)) {
      callback();
    } else {
      callback(new Error('请输入有效的身份证号'));
    }
  }
};

/**
 * 全局表单验证规则
 */
export const globalFormRules = {
  /**
   * 姓名 必填
   * ● 可以包含中文、英文字母、数字、空格、半角句点、半角逗号、间隔号、短横线、下划线；
   * ● 中文 1-20 个字符，英文 3-60 个字符（字节长度3-60）；
   * ● 不能以空格、半角句点、半角逗号、间隔号、短横线开头或结尾
   */
  name: [
    {
      required: true,
      message: '请输入姓名',
      trigger: 'blur',
    },
    {
      validator: nameLengthValidator,
      trigger: 'blur',
    },
    {
      // 正则
      pattern: regName,
      message: '请输入1-20位中英文字符',
      trigger: 'blur',
    },
  ],
  // 性别 必填项
  sex: [{ required: true, message: '请选择性别', trigger: 'blur' }],
  // 昵称 非必填 规则同姓名
  nickname: [
    {
      validator: nameLengthValidator,
      trigger: 'blur',
    },
  ],
  /**
   * 密码 必填
   * ● 6-20 个字符，只能包含英文字母、数字、特殊字符（不含空格）
   * ● 字母、数字、标点符号至少包含 2 种
   */
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
    {
      // 正则
      pattern: regPassword,
      message: '6-20位字符，至少包含数字、字母、符号2种元素',
      trigger: 'blur',
    },
  ],
  // 手机号
  mobile: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { pattern: regMobile, message: '请输入正确手机号', trigger: 'blur' },
  ],
  // 验证码 ● 6位数字
  captcha: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { pattern: regCaptcha, message: '请输入正确验证码', trigger: 'blur' },
  ],
  // 学校 搜索下拉选择 trigger: 'change'
  school: [{ required: true, message: '请输入学校', trigger: 'change' }],
  // 专业 搜索下拉选择 trigger: 'change'
  major: [{ required: true, message: '请输入专业', trigger: 'change' }],
  // 院系
  college: [{ required: true, message: '请输入院系', trigger: 'blur' }],
  // 学号/工号 必填 数字/字母 50字符以内
  code: [
    { required: true, message: '请输入学号/工号', trigger: 'blur' },
    { pattern: regCode, message: '学号/工号格式不正确', trigger: 'blur' },
  ],
  // 用户名（账号名）
  username: [
    { required: true, message: '请输入账号名', trigger: 'blur' },
    { validator: usernameValidator, trigger: 'blur' },
  ],
  // 邮箱
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { validator: emailValidator, trigger: 'blur' },
  ],
  // 身份证号
  idCode: [
    { required: true, message: '请输入身份证号', trigger: 'blur' },
    { validator: idCodeValidator, trigger: 'blur' },
  ],
  organ: [
    { required: true, message: '请输入机构名称', trigger: 'blur' },
    {
      // 限制字节长度
      validator: (
        rule: unknown,
        value: string,
        callback: (err?: string | Error | undefined) => void,
      ) => {
        byteLengthValidator({
          value,
          callback,
          minByteLength: 6,
          maxByteLength: 255,
          message: '机构名称长度限6～255个字节',
        });
      },
      trigger: 'blur',
    },
    {
      pattern: regOrgan,
      message: '机构名称格式不正确',
      trigger: 'blur',
    },
  ],
};
