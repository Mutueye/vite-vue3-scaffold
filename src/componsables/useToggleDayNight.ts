import { computed } from 'vue';
import { DayNightModeEnum } from '@itshixun/qst-ui-system';
import { useDark, useToggle } from '@vueuse/core';

export const useToggleDayNight = (disableTransition = true) => {
  // 是否夜间模式
  const isDark = useDark({ disableTransition });
  const toggleDark = useToggle(isDark);

  // 切换日间/夜间模式
  const toggleDayNight = () => {
    toggleDark(!isDark.value);
  };

  const dayNightMode = computed(() =>
    isDark.value ? DayNightModeEnum.dark : DayNightModeEnum.light,
  );

  return { isDark, toggleDayNight, dayNightMode };
};
