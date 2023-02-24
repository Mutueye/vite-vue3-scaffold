<template>
  <EditorSection section-title="边框色">
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
  import { getBorderColorList, setThemeVariables } from '@/utils/theme/themeGenerator';
  import { BorderColorEnum, DayNightModeEnum } from '@/utils/theme/types';
  import EditorControlItem from './EditorControlItem.vue';
  import ColorEditor from './ColorEditor.vue';
  import { useToggleDayNight } from '@/componsables/useToggleDayNight';

  const themeStore = useThemeStore();
  const { currentThemeData } = storeToRefs(themeStore);
  const { isDark } = useToggleDayNight();

  const configDataList = computed(() => {
    return currentThemeData.value.colorSchemes[
      isDark.value ? DayNightModeEnum.dark : DayNightModeEnum.light
    ].borderColors;
  });

  const colorList = computed(() => getBorderColorList(configDataList.value));

  const onColorChange = (val: string, colorType: string) => {
    configDataList.value[colorType as BorderColorEnum] = val;
    setThemeVariables();
  };
</script>
