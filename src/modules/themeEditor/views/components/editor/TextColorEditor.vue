<template>
  <EditorSection section-title="文本色">
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
  import { getTextColorList, setThemeVariables } from '@/utils/theme/themeGenerator';
  import { ColorSchemeEnum, TextColorEnum } from '@/utils/theme/types';
  import EditorControlItem from './EditorControlItem.vue';
  import ColorEditor from './ColorEditor.vue';
  import { useToggleDayNight } from '@/componsables/useToggleDayNight';

  const themeStore = useThemeStore();
  const { currentThemeData } = storeToRefs(themeStore);
  const { isDark } = useToggleDayNight();

  const configDataList = computed(() => {
    return currentThemeData.value.colorSchemes[
      isDark.value ? ColorSchemeEnum.dark : ColorSchemeEnum.light
    ].textColors;
  });

  const colorList = computed(() => getTextColorList(configDataList.value));

  const onColorChange = (val: string, colorType: string) => {
    // currentThemeData.value.mainColors[colorType as MainColorEnum] = val;
    configDataList.value[colorType as TextColorEnum] = val;
    setThemeVariables();
  };
</script>
