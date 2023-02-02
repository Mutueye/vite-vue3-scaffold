import { storeToRefs } from 'pinia';
import { useDark, useToggle } from '@vueuse/core';
import { useThemeStore } from '@/store/theme';

export const useToggleTheme = () => {
  const isDark = useDark();
  const toggleDark = useToggle(isDark);
  const themeStore = useThemeStore();
  const { currentThemeIndex, themeList } = storeToRefs(themeStore);
  const { setCurrentThemeIndex } = themeStore;

  // 切换主题
  const toggleTheme = (themeIndex: number) => {
    if (themeIndex < themeList.value.length) {
      setCurrentThemeIndex(themeIndex);
    }
  };

  const initThemeIndex = () => {
    setCurrentThemeIndex(currentThemeIndex.value);
  };

  // 切换日间/夜间模式
  const toggleDarkMode = () => {
    toggleDark(!isDark.value);
  };

  return { currentThemeIndex, initThemeIndex, toggleTheme, isDark, toggleDarkMode };
};
