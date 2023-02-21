<template>
  <EditorSection section-title="背景色">
    <div class="flex flex-col w-full">
      <EditorControlItem
        v-for="item in colorList"
        :key="item.type"
        :title="item.type"
        :label="item.cssVar">
        <ColorEditor :color="item.value" @change="(val) => onColorChange(val, item.type)" />
      </EditorControlItem>
    </div>
  </EditorSection>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import EditorSection from './EditorSection.vue';
  import { useThemeStore } from '@/store/theme';
  import { getBgColorList, setThemeVariables } from '@/utils/theme/themeGenerator';
  import { BgColorEnum, ColorSchemeEnum } from '@/utils/theme/types';
  import EditorControlItem from './EditorControlItem.vue';
  import ColorEditor from './ColorEditor.vue';
  import { useToggleDayNight } from '@/componsables/useToggleDayNight';

  const themeStore = useThemeStore();
  const { currentThemeData } = storeToRefs(themeStore);
  const { isDark } = useToggleDayNight();

  const configDataList = computed(() => {
    return currentThemeData.value.colorSchemes[
      isDark.value ? ColorSchemeEnum.dark : ColorSchemeEnum.light
    ].bgColors;
  });

  const colorList = computed(() =>
    getBgColorList(configDataList.value).filter(
      // No need to show overlay color cause it's value equals to default bg color
      (item) => item.type !== BgColorEnum.overlay,
    ),
  );

  const onColorChange = (val: string, colorType: string) => {
    // currentThemeData.value.mainColors[colorType as MainColorEnum] = val;
    configDataList.value[colorType as BgColorEnum] = val;
    if (colorType === BgColorEnum.default) {
      // overlay color is the same as default bg color
      configDataList.value[BgColorEnum.overlay] = val;
    }
    setThemeVariables();
  };
</script>
