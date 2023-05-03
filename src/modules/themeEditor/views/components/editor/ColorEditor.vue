<template>
  <el-popover placement="top" width="auto" :visible="pickerVisible" @before-enter="onShow">
    <template #reference>
      <div
        class="w-full h-component-size rounded-base cursor-pointer flex flex-row items-center justify-start px-spacing-sm"
        :style="{ backgroundColor: color }"
        @click.prevent="onClickColor">
        <div class="text-size-12px" :style="{ color: tc }">{{ color }}</div>
      </div>
    </template>
    <div v-click-outside="onClickOutside" class="flex flex-col">
      <hex-alpha-color-picker :color="pickerColor" @color-changed="handleColorChanged" />
      <div class="flex flex-row items-center justify-between pt-spacing-xs">
        <el-input v-model="pickerColor" class="mr-spacing-xs flex-1 w-50px"></el-input>
        <el-button type="primary" @click="onConfirmPicker">确定</el-button>
      </div>
    </div>
  </el-popover>
</template>

<script lang="ts" setup>
  import 'vanilla-colorful/hex-alpha-color-picker.js';
  import { toRefs, ref, computed } from 'vue';
  import { hasBadContrast } from 'color2k';
  import { ClickOutside as vClickOutside } from 'element-plus';

  const props = defineProps<{
    color: string;
  }>();
  const { color } = toRefs(props);

  const pickerColor = ref(color.value);
  const pickerVisible = ref(false);

  const emit = defineEmits(['change']);

  const tc = computed(() => (hasBadContrast('#fff', 'decorative', color.value) ? '#000' : '#fff'));

  const onShow = () => {
    pickerColor.value = color.value;
  };

  const onClickColor = () => {
    if (!pickerVisible.value) {
      pickerVisible.value = true;
    }
  };

  const onClickOutside = () => {
    if (pickerVisible.value) {
      setTimeout(() => {
        pickerVisible.value = false;
      }, 10);
    }
  };

  const handleColorChanged = (event: CustomEvent<{ value: string }>) => {
    pickerColor.value = event.detail.value;
  };

  const onConfirmPicker = () => {
    pickerVisible.value = false;
    if (pickerColor.value !== color.value) {
      emit('change', pickerColor.value[0] !== '#' ? '#' + pickerColor.value : pickerColor.value);
    }
  };
</script>
