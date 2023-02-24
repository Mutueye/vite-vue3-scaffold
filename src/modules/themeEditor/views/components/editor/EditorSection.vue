<template>
  <div class="px-space pt-space pb-space-xxs flex flex-col">
    <div class="font-bold color-text-primary mb-space-xxs">{{ editorCategory.title }}</div>
    <div class="flex flex-col w-full">
      <EditorControlItem
        v-for="item in configList"
        :key="item.type"
        :title="item.type"
        :label="item.cssVar">
        <div v-if="editorCategory.configType === ThemeEditorControlType.Input">
          {{ item.value }}
        </div>
        <ColorEditor
          v-else
          :color="item.value"
          @change="(val: string) => onConfigChange(val, item.type)" />
      </EditorControlItem>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed, toRefs } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useThemeStore } from '@/store/theme';
  import { useToggleDayNight } from '@/componsables/useToggleDayNight';
  import {
    setThemeVariables,
    DayNightModeEnum,
    cssVarPrepend,
    ThemeCategory,
    ThemeEditorCategory,
    ThemeEditorControlType,
  } from '@/utils/theme/themeManager';
  import EditorControlItem from './EditorControlItem.vue';
  import ColorEditor from './ColorEditor.vue';

  const { isDark, dayNightMode } = useToggleDayNight();

  const themeStore = useThemeStore();
  const { currentThemeData } = storeToRefs(themeStore);

  const props = defineProps<{ editorCategory: ThemeEditorCategory }>();
  const { editorCategory } = toRefs(props);

  const targetConfigData = computed(() => {
    return currentThemeData.value.config[dayNightMode.value][
      editorCategory.value.category
    ] as Record<string, string>;
  });

  const opsiteModeConfigData = computed(() => {
    return currentThemeData.value.config[isDark ? DayNightModeEnum.light : DayNightModeEnum.dark][
      editorCategory.value.category
    ] as Record<string, string>;
  });

  const configList = computed(() => {
    return getConfigList(targetConfigData.value);
  });

  const getConfigList = (configObj: Record<string, string>) => {
    const list: { type: string; cssVar: string; value: string }[] = [];
    Object.keys(configObj).forEach((configKey) => {
      const configVal = configObj[configKey];
      const cssVar = `${cssVarPrepend}-${editorCategory.value.category}${
        configKey === 'DEFAULT' ? '' : '-' + configKey
      }`;
      list.push({
        type: configKey,
        cssVar,
        value: configVal,
      });
    });
    return list;
  };

  const onConfigChange = (val: string, configKey: string) => {
    targetConfigData.value[configKey] = val;
    // 主题颜色和其他非颜色的配置项，同步修改日/夜间模式的值
    if (
      editorCategory.value.category === ThemeCategory.Color ||
      editorCategory.value.configType === ThemeEditorControlType.Input
    ) {
      opsiteModeConfigData.value[configKey] = val;
    }
    setThemeVariables();
  };
</script>
