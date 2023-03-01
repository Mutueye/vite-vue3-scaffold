import mitt from 'mitt';

export type GlobalEvent = {
  onSetThemeVariables: void; // 设置主题css变量时触发
};

/**
 * 全局事件总线
 */
export const GlobalEventBus = mitt<GlobalEvent>();
