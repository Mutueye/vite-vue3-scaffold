import { defineStore } from 'pinia';
import type { ThemeConfig } from '@/utils/theme/types';
// import type { UITheme } from '@/utils/theme/themeManager';
import { defaultThemeList, defaultThemeConfig } from '@/utils/theme/themeConfig';
import { setThemeVariables } from '@/utils/theme/themeGenerator';
import { ElMessageBox } from 'element-plus';

interface ThemeState {
  themeList: ThemeConfig[];
  currentThemeIndex: number;
}

export const useThemeStore = defineStore('persist', {
  state: (): ThemeState => ({
    themeList: defaultThemeList,
    currentThemeIndex: 0,
  }),
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'theme',
        storage: localStorage,
      },
    ],
  },
  getters: {
    // 当前主题
    currentThemeData: (state) => {
      let themeData: ThemeConfig = defaultThemeConfig;
      if (state.themeList && state.themeList[state.currentThemeIndex]) {
        themeData = state.themeList[state.currentThemeIndex];
      }
      return themeData;
    },
  },
  actions: {
    setThemeList(themes: ThemeConfig[], toggle?: boolean) {
      this.themeList = themes;
      if (toggle) {
        this.currentThemeIndex = themes.length - 1;
      }
      setThemeVariables();
    },
    deleteThemeByIndex(themeIndex: number) {
      const themeName = this.themeList[themeIndex].name
        ? this.themeList[themeIndex].name
        : `THEME${themeIndex}`;
      ElMessageBox.confirm(`确定要删除主题：${themeName}？`, '提示', {
        confirmButtonText: '确定',
        cancelButtonClass: '取消',
        icon: '',
      })
        .then(() => {
          if (themeIndex > 0 && themeIndex < this.themeList.length) {
            if (themeIndex === this.currentThemeIndex) {
              this.setCurrentThemeIndex(0);
            } else if (themeIndex < this.currentThemeIndex) {
              this.setCurrentThemeIndex(this.currentThemeIndex - 1);
            }
            this.themeList.splice(themeIndex, 1);
          }
        })
        .catch(() => null);
    },
    resetThemeList() {
      this.themeList = defaultThemeList;
      this.currentThemeIndex = 0;
    },
    setCurrentThemeIndex(themeIndex: number) {
      // set theme class name on "html" tag
      const htmlEl = document.getElementsByTagName('html')[0];
      const themeName = `theme${themeIndex}`;
      this.themeList.forEach((_, index) => {
        const name = `theme${index}`;
        if (htmlEl.classList.contains(name) && name !== themeName) {
          htmlEl.classList.remove(name);
        }
      });
      if (!htmlEl.classList.contains(themeName)) {
        htmlEl.classList.add(themeName);
      }
      this.currentThemeIndex = themeIndex;
    },
  },
});
