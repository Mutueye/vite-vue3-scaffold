<template>
  <EditorSection section-title="主题色">
    <div class="flex flex-col w-full">
      <EditorControlItem v-for="item in mainColorList" :key="item.colorType" :label="item.cssVar">
        <!-- <div class="w-full h-24px rounded-base" :style="{ backgroundColor: item.value }" /> -->
        <ColorEditor
          :color="item.value"
          @change="(val) => onMainColorChange(val, item.colorType)" />
      </EditorControlItem>
    </div>
  </EditorSection>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { storeToRefs } from 'pinia';
  // import { ColorPicker } from 'vue3-colorpicker';
  import EditorSection from './EditorSection.vue';
  import { useThemeStore } from '@/store/theme';
  import { getMainColorList, setThemeVariables } from '@/utils/theme/themeGenerator';
  import { MainColorEnum } from '@/utils/theme/types';
  import EditorControlItem from './EditorControlItem.vue';
  import ColorEditor from './ColorEditor.vue';

  // import 'vue3-colorpicker/style.css';

  const themeStore = useThemeStore();
  const { currentThemeData } = storeToRefs(themeStore);

  const mainColorList = computed(() =>
    getMainColorList(currentThemeData.value.mainColors).filter(
      // No need to show error color cause it's value equals to danger color
      (item) => item.colorType !== MainColorEnum.error,
    ),
  );

  const onMainColorChange = (val: string, colorType: string) => {
    currentThemeData.value.mainColors[colorType as MainColorEnum] = val;
    setThemeVariables();
  };
</script>
