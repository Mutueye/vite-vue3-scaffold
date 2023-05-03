import { ThemeCategory, UITheme, injectThemeStyle } from '@itshixun/qst-ui-system';
import { GlobalEventBus } from '@/EventBus';

export const cssVarPrepend = '--el';

// 主题配置的类型： 颜色 / 数值
export enum ThemeEditorControlType {
  Color = 'color',
  Input = 'input',
}

export type ThemeEditorCategory = {
  title: string;
  category: ThemeCategory;
  configType: ThemeEditorControlType;
};

export const editorCategories: ThemeEditorCategory[] = [
  {
    title: '主题色',
    category: ThemeCategory.Color,
    configType: ThemeEditorControlType.Color,
  },
  {
    title: '文字色',
    category: ThemeCategory.TextColor,
    configType: ThemeEditorControlType.Color,
  },
  {
    title: '背景色',
    category: ThemeCategory.BgColor,
    configType: ThemeEditorControlType.Color,
  },
  {
    title: '边框色',
    category: ThemeCategory.BorderColor,
    configType: ThemeEditorControlType.Color,
  },
  {
    title: '填充色',
    category: ThemeCategory.FillColor,
    configType: ThemeEditorControlType.Color,
  },
  {
    title: '圆角',
    category: ThemeCategory.BorderRadius,
    configType: ThemeEditorControlType.Input,
  },
  {
    title: '间距',
    category: ThemeCategory.Spacing,
    configType: ThemeEditorControlType.Input,
  },
  {
    title: '字号',
    category: ThemeCategory.FontSize,
    configType: ThemeEditorControlType.Input,
  },
  {
    title: '组件大小',
    category: ThemeCategory.ComponentSize,
    configType: ThemeEditorControlType.Input,
  },
];

export const setThemeVariables = (themeList: UITheme[]) => {
  injectThemeStyle({
    themeList,
    onStylesSet: () => GlobalEventBus.emit('onSetThemeVariables'),
  });
};
