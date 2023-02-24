<template>
  <div class="px-space pt-space pb-space-xxs flex flex-col">
    <div class="font-bold color-text-primary mb-space-xxs">{{ title }}</div>
    <div class="flex flex-col w-full">
      <EditorControlItem
        v-for="item in configList"
        :key="item.type"
        :title="item.type"
        :label="item.cssVar">
        <ColorEditor
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
  import { setThemeVariables, cssVarPrepend, ThemeCategory } from '@/utils/theme/themeManager';
  import EditorControlItem from './EditorControlItem.vue';
  import ColorEditor from './ColorEditor.vue';

  const { dayNightMode } = useToggleDayNight();

  const themeStore = useThemeStore();
  const { currentThemeData } = storeToRefs(themeStore);

  const props = defineProps<{ title: string; configCategory: ThemeCategory }>();
  const { configCategory } = toRefs(props);

  const targetConfigData = computed(() => {
    return currentThemeData.value.config[dayNightMode.value][configCategory.value] as Record<
      string,
      string
    >;
  });

  const configList = computed(() => {
    return getConfigList(targetConfigData.value);
  });

  const getConfigList = (configObj: Record<string, string>) => {
    const list: { type: string; cssVar: string; value: string }[] = [];
    Object.keys(configObj).forEach((configKey) => {
      const configVal = configObj[configKey];
      const cssVar = `${cssVarPrepend}-${configCategory.value}${
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
    setThemeVariables();
  };
</script>
