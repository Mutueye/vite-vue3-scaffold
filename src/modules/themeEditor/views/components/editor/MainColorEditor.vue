<template>
  <EditorSection section-title="主题色">
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
  import { getMainColorList, setThemeVariables } from '@/utils/theme/themeGenerator';
  import { MainColorEnum } from '@/utils/theme/types';
  import EditorControlItem from './EditorControlItem.vue';
  import ColorEditor from './ColorEditor.vue';

  const themeStore = useThemeStore();
  const { currentThemeData } = storeToRefs(themeStore);

  const configDataList = computed(() => currentThemeData.value.mainColors);

  const colorList = computed(() =>
    getMainColorList(configDataList.value).filter(
      // No need to show error color cause it's value equals to danger color
      (item) => item.type !== MainColorEnum.error,
    ),
  );

  const onColorChange = (val: string, colorType: string) => {
    configDataList.value[colorType as MainColorEnum] = val;
    if (colorType === MainColorEnum.danger) {
      // error color is the same as danger color
      configDataList.value[MainColorEnum.error] = val;
    }
    setThemeVariables();
  };
</script>
