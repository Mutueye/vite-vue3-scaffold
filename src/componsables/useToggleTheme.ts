import { onMounted, ref } from 'vue';

export type ColorTheme = 'blue' | 'purple';
export const themeList: ColorTheme[] = ['blue', 'purple'];

export const useToggleTheme = () => {
  const currentTheme = ref<ColorTheme | ''>('');

  onMounted(() => {
    const htmlEl = document.getElementsByTagName('html')[0];
    themeList.forEach((theme) => {
      if (htmlEl.classList.contains(theme)) {
        currentTheme.value = theme;
      } else {
        toggleTheme('blue');
      }
    });
  });

  const toggleTheme = (themeName: ColorTheme): void => {
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

  return { currentTheme, toggleTheme };
};
