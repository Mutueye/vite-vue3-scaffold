import { onMounted, ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core';
import { getThemeList } from '@/utils/theme/themeConfig';

export const useToggleTheme = () => {
  const currentTheme = ref<string>('theme0');
  const isDark = useDark();
  const toggleDark = useToggle(isDark);
  const themeList = ref(getThemeList());

  onMounted(() => {
    const htmlEl = document.getElementsByTagName('html')[0];
    themeList.value.forEach((_, index) => {
      if (htmlEl.classList.contains(`theme${index}`)) {
        currentTheme.value = `theme${index}`;
      } else {
        toggleTheme('theme0');
      }
    });
  });

  // 切换主题
  const toggleTheme = (themeName: string): void => {
    const htmlEl = document.getElementsByTagName('html')[0];
    themeList.value.forEach((_, index) => {
      const name = `theme${index}`;
      if (htmlEl.classList.contains(name) && name !== themeName) {
        htmlEl.classList.remove(name);
      }
    });
    if (!htmlEl.classList.contains(themeName)) {
      htmlEl.classList.add(themeName);
    }
    currentTheme.value = themeName;
  };

  // 切换日间/夜间模式
  const toggleDarkMode = () => {
    toggleDark(!isDark.value);
  };

  return { currentTheme, toggleTheme, isDark, toggleDarkMode };
};
