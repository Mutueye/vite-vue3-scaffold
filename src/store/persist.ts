/**
 * stores persist data using pinia-plugin-persist
 */

import { defineStore } from 'pinia';
import type { ThemeConfig } from '@/utils/theme/types';
import { defaultThemeList } from '@/utils/theme/themeConfig';
import { setThemeVariables } from '@/utils/theme/themeGenerator';

interface PersistState {
  themeList: ThemeConfig[];
  currentThemeIndex: number;
}

export const usePersistStore = defineStore('persist', {
  state: (): PersistState => ({
    themeList: defaultThemeList,
    currentThemeIndex: 0,
  }),
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'persist',
        storage: localStorage,
      },
    ],
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
      if (themeIndex > 0 && themeIndex < this.themeList.length) {
        this.themeList.splice(themeIndex, 1);
        if (themeIndex === this.currentThemeIndex) {
          this.setCurrentThemeIndex(0);
        } else if (themeIndex < this.currentThemeIndex) {
          this.setCurrentThemeIndex(this.currentThemeIndex - 1);
        }
      }
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
