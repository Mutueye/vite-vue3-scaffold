import { defineStore } from 'pinia';
import type { UITheme } from '@itshixun/qst-ui-system';
import { setThemeVariables } from '@/utils/theme/themeManager';
import {
  defaultThemeList,
  setThemeClassByIndex,
  currentThemeList,
  initQstTheme,
} from '@itshixun/qst-ui-system';
import { ElMessageBox } from 'element-plus';
import { cloneDeep } from 'lodash-es';

interface ThemeState {
  themeList: UITheme[];
  currentThemeIndex: number;
}

const LSThemeKey = 'qst-theme';

export const useThemeStore = defineStore('persist', {
  state: (): ThemeState => {
    const storedThemeData = localStorage.getItem(LSThemeKey);
    if (storedThemeData) {
      const themeData: ThemeState = JSON.parse(storedThemeData);
      if (themeData && themeData.themeList && themeData.themeList.length > 0) {
        initQstTheme({
          themeList: themeData.themeList,
        });
      }
    } else {
      initQstTheme();
    }

    return {
      themeList: cloneDeep(currentThemeList),
      currentThemeIndex: 0,
    };
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: LSThemeKey,
        storage: localStorage,
      },
    ],
  },
  getters: {
    // 当前主题
    currentThemeData: (state) => {
      let themeData: UITheme = currentThemeList[0];
      if (state.themeList && state.themeList[state.currentThemeIndex]) {
        themeData = state.themeList[state.currentThemeIndex];
      }
      return themeData;
    },
  },
  actions: {
    setThemeList(themes: UITheme[], toggle?: boolean) {
      this.themeList = themes;
      setThemeVariables(themes);
      if (toggle) {
        this.setCurrentThemeIndex(themes.length - 1);
      }
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
            setThemeVariables(this.themeList);
          }
        })
        .catch(() => null);
    },
    resetThemeList() {
      this.setThemeList(cloneDeep(defaultThemeList));
      this.setCurrentThemeIndex(0);
    },
    resetTheme(themeIndex: number) {
      if (themeIndex < 3) {
        const themeName = this.themeList[themeIndex].name
          ? this.themeList[themeIndex].name
          : `THEME${themeIndex}`;
        ElMessageBox.confirm(`确定要重置主题：${themeName}到初始状态？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonClass: '取消',
          icon: '',
        })
          .then(() => {
            this.themeList[themeIndex] = cloneDeep(defaultThemeList[themeIndex]);
            setThemeVariables(this.themeList);
          })
          .catch(() => null);
      }
    },
    setCurrentThemeIndex(themeIndex: number) {
      // set theme class name on "html" tag
      setThemeClassByIndex(themeIndex);
      this.currentThemeIndex = themeIndex;
    },
    // setCurrentThemeIndex(themeIndex: number) {
    //   // set theme class name on "html" tag
    //   const htmlEl = document.getElementsByTagName('html')[0];
    //   const themeName = `theme${themeIndex}`;
    //   this.themeList.forEach((_, index) => {
    //     const name = `theme${index}`;
    //     if (htmlEl.classList.contains(name) && name !== themeName) {
    //       htmlEl.classList.remove(name);
    //     }
    //   });
    //   if (!htmlEl.classList.contains(themeName)) {
    //     htmlEl.classList.add(themeName);
    //   }
    //   this.currentThemeIndex = themeIndex;
    // },
  },
});
