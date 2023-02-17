import { Theme } from 'unocss/preset-mini';

// css变量前缀
const cssVarPrepend = '--el';

const colorTypes = ['primary', 'success', 'warning', 'danger', 'error', 'info'];
const textColorTypes = ['primary', 'regular', 'secondary', 'placeholder', 'disabled'];
const bgColorTypes = ['DEFAULT', 'overlay', 'page', 'secondary'];
const borderColorTypes = ['DEFAULT', 'light', 'lighter', 'extralight', 'dark', 'darker'];
const fillColorTypes = ['DEFAULT', 'light', 'lighter', 'extralight', 'dark', 'darker', 'blank'];
const borderRadiusTypes = ['base', 'small', 'round', 'circle'];
const mixModes = ['light', 'dark'];

// 生成主题色变量配置表
const generateThemeColors = () => {
  const colors: Record<string, unknown> = {};
  colorTypes.forEach((colorType) => {
    colors[colorType] = { DEFAULT: `var(${cssVarPrepend}-color-${colorType})` };
    mixModes.forEach((mixMode) => {
      const subColors: Record<number, string> = {};
      for (let i = 1; i < 10; i++) {
        subColors[i] = `var(${cssVarPrepend}-color-${colorType}-${mixMode}-${i})`;
      }
      colors[colorType][mixMode] = subColors;
    });
  });
  return colors;
};

// 根据类型生成对应的css变量配置列表
const generateCssVarList = (colorTypes: string[], varPrepend: string) => {
  const list: Record<string, string> = {};
  colorTypes.forEach((type) => {
    if (type === 'DEFAULT') {
      list[type] = `var(${varPrepend})`;
    } else {
      list[type] = `var(${varPrepend}-${type})`;
    }
  });
  return list;
};

export const defaultSizes = {
  'space-xxs': '8px',
  'space-xs': '12px',
  'space-sm': '16px',
  'space-md': '20px',
  space: '24px',
  'space-lg': '28px',
  'space-xl': '32px',
  'space-xxl': '36px',
  'space-xxxl': '40px',
  header: '72px',
  'left-menu': '300px',
};

// theme配置示例。默认theme配置详见unocss源码：
// https://github.com/unocss/unocss/tree/main/packages/preset-mini/src/_theme
export const theme: Theme = {
  width: defaultSizes,
  height: defaultSizes,
  spacing: defaultSizes,
  boxShadow: {
    // 示例
    none: 'none',
    sm: '0 1px 2px 0 rgb(0 0 0 / 5%)',
    DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 5%), 0 1px 2px 0 rgb(0 0 0 / 2%)',
    md: '0 4px 6px -1px rgb(0 0 0 / 7%), 0 2px 4px -1px rgb(0 0 0 / 6%)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 10%), 0 10px 10px -5px rgb(0 0 0 / 4%)',
  },
  // 如果自定义breakpoints，会覆盖默认配置，而不是像其他一样合并默认配置
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px',
  },
  borderRadius: {
    none: '0',
    xs: '2px',
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '10px',
    xxl: '12px',
    full: '9999px',
    ...generateCssVarList(borderRadiusTypes, `${cssVarPrepend}-border-radius`),
  },
  colors: {
    theme: `var(${cssVarPrepend}-color-primary)`,
    ...generateThemeColors(),
    text: generateCssVarList(textColorTypes, `${cssVarPrepend}-text-color`),
    bg: generateCssVarList(bgColorTypes, `${cssVarPrepend}-bg-color`),
    border: generateCssVarList(borderColorTypes, `${cssVarPrepend}-border-color`),
    fill: generateCssVarList(fillColorTypes, `${cssVarPrepend}-fill-color`),
  },
  fontFamily: {
    main: 'PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif',
  },
};

export const uplusIconCollection = {
  // uplus logo
  logo: '<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="22" cy="22" r="22" fill="#217AFF"/><path d="M28.4934 15.5298H25.2642V24.4631C25.2646 24.6008 25.2646 24.7383 25.2573 24.8771H25.2538C25.2531 24.9066 25.2542 24.9352 25.2519 24.966C25.087 28.0246 22.556 30.2588 19.5915 30.0887C18.1957 30.0087 16.955 29.3844 16.0488 28.4287C17.1818 30.2433 19.1129 31.4962 21.3572 31.625C24.8455 31.8258 27.8713 29.2475 28.4108 25.7623C28.4422 25.5271 28.4669 25.2875 28.4798 25.0448C28.4876 24.8996 28.4854 24.7558 28.4856 24.6119H28.4934V15.5298Z" fill="white"/><path d="M21.3321 32.0915C17.4789 31.8702 14.4926 28.5514 14.5177 24.6119C14.5166 24.4894 14.5187 24.3673 14.5252 24.2429C14.5256 24.2342 14.5272 24.226 14.5278 24.2173H14.5177V15.5298H14.5172H11.2886V24.6119V24.8871L11.2996 24.8785C11.4565 29.4119 14.9371 33.1575 19.4118 33.4152C22.2244 33.5765 24.7949 32.325 26.4787 30.2615C25.1082 31.4967 23.2892 32.2035 21.3321 32.0915Z" fill="white"/><path d="M30.7853 18.3383C30.5611 18.3383 30.3316 18.3383 30.1011 18.3383V19.6831C30.3596 19.6831 30.5597 19.6831 30.7853 19.6831C30.8764 19.6831 30.9545 19.6831 31.0149 19.6831C32.1061 19.6831 32.8132 19.01 32.8132 19.01L33.5116 18.3425H33.4998L33.5116 18.3381C33.5116 18.3383 32.2608 18.3383 30.7853 18.3383Z" fill="white"/><path d="M36.1646 19.6833C36.389 19.6833 36.6184 19.6833 36.849 19.6833V18.3385C36.5905 18.3385 36.3905 18.3385 36.1646 18.3385C36.0737 18.3385 35.9958 18.3385 35.9352 18.3385C34.8443 18.3385 34.1366 19.0116 34.1366 19.0116L33.4385 19.6791H33.45L33.4385 19.6835C33.4385 19.6833 34.6889 19.6833 36.1646 19.6833Z" fill="white"/><path d="M34.1255 16.236C34.1255 16.0039 34.1255 15.7675 34.1255 15.5298H32.8228C32.8228 15.7964 32.8228 16.0027 32.8228 16.236C32.8228 16.3298 32.8228 16.4093 32.8228 16.4723C32.8228 17.5983 33.4749 18.3281 33.4749 18.3281L34.1218 19.0487V19.0362L34.1255 19.0487C34.1255 19.0489 34.1255 17.7585 34.1255 16.236Z" fill="white"/><path d="M32.8228 21.7854C32.8228 22.0175 32.8228 22.2539 32.8228 22.4916H34.1255C34.1255 22.225 34.1255 22.0187 34.1255 21.7854C34.1255 21.6916 34.1255 21.6116 34.1255 21.5491C34.1255 20.4231 33.4734 19.6933 33.4734 19.6933L32.8265 18.9727V18.9846L32.8228 18.9727C32.8228 18.9725 32.8228 20.2629 32.8228 21.7854Z" fill="white"/></svg>',
};
