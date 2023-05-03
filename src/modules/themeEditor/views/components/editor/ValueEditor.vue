<template>
  <div v-if="editing" class="flex flex-row items-center justify-between w-full min-w-0">
    <el-input v-model="inputValue" class="mr-spacing-xs flex-1"></el-input>
    <el-button type="primary" @click="onConfirm">确定</el-button>
  </div>
  <div
    v-else
    class="flex flex-row items-center w-full justify-start px-spacing-xs color-text-primary bg-bg-secondary h-component-size rounded-base border border-border-light cursor-pointer"
    @click="toggleEditMode">
    <div class="color-text-regular">{{ cssValue }}</div>
  </div>
</template>

<script lang="ts" setup>
  import { toRefs, ref } from 'vue';

  const props = defineProps<{
    cssValue: string;
  }>();
  const { cssValue } = toRefs(props);

  const editing = ref(false);
  const inputValue = ref(cssValue.value);

  const emit = defineEmits(['change']);

  const toggleEditMode = () => {
    editing.value = !editing.value;
  };

  const onConfirm = () => {
    editing.value = false;
    if (inputValue.value !== cssValue.value) {
      emit('change', inputValue.value);
    }
  };
</script>
