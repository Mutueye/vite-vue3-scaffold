import { onMounted, ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core';
import { ThemeEnum } from '@/utils/theme/types';

export const themeList: ThemeEnum[] = Object.keys(ThemeEnum).map(
  (key) => ThemeEnum[key as ThemeEnum],
);

export const useToggleTheme = () => {
  const currentTheme = ref<ThemeEnum>(ThemeEnum.blue);
  const isDark = useDark();
  const toggleDark = useToggle(isDark);

  onMounted(() => {
    const htmlEl = document.getElementsByTagName('html')[0];
    themeList.forEach((theme) => {
      if (htmlEl.classList.contains(theme)) {
        currentTheme.value = theme;
      } else {
        toggleTheme(themeList[0]);
      }
    });
  });

  const toggleTheme = (themeName: ThemeEnum): void => {
    const htmlEl = document.getElementsByTagName('html')[0];
    themeList.forEach((theme) => {
      if (htmlEl.classList.contains(theme) && theme !== themeName) {
        htmlEl.classList.remove(theme);
      }
    });
    if (!htmlEl.classList.contains(themeName)) {
      htmlEl.classList.add(themeName);
    }
    currentTheme.value = themeName;
  };

  const toggleDarkMode = () => {
    toggleDark(!isDark.value);
  };

  return { currentTheme, toggleTheme, isDark, toggleDarkMode };
};
