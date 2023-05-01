import { watch, ref, nextTick, onMounted } from 'vue';
import { GlobalEventBus } from '@/EventBus';
import { cssVarPrepend } from '@/utils/theme/themeManager';
import { ThemeCategory, cssVarCodex } from '@itshixun/qst-ui-system';
import { useToggleDayNight } from '@/componsables/useToggleDayNight';

export const useThemeConfigList = (configKey: ThemeCategory) => {
  const { isDark } = useToggleDayNight();

  const getConfigDataList = () => {
    const colorDataList: { cssVar: string; type: string; val: string }[] = [];
    cssVarCodex[configKey].forEach((type) => {
      let cssVar = `${cssVarPrepend}-${configKey}-${type}`;
      if (cssVar.includes('-DEFAULT')) cssVar = `${cssVarPrepend}-${configKey}`;
      colorDataList.push({
        type,
        cssVar,
        val: getComputedStyle(document.documentElement).getPropertyValue(cssVar),
      });
    });
    return colorDataList;
  };

  onMounted(() => {
    GlobalEventBus.on('onSetThemeVariables', () => {
      configList.value = getConfigDataList();
    });
  });

  const configList = ref(getConfigDataList());

  watch(isDark, () => {
    nextTick(() => (configList.value = getConfigDataList()));
  });

  return { configList };
};
