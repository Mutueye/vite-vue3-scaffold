<template>
  <div class="rule-box">
    <div class="text-size-13px font-bold mb-5px">
      {{ ruleInfo.rulesTitle ? ruleInfo.rulesTitle : '验证规则' }}
    </div>
    <div v-for="item in ruleInfo.rules" :key="item" class="rule-item">{{ item }}</div>

    <div v-if="ruleInfo.messages && ruleInfo.messages.length > 0" class="flex flex-col items-start">
      <div class="text-size-13px font-bold mb-5px separator w-full">提示信息</div>
      <div v-for="item in ruleInfo.messages" :key="item.condition" class="rule-item message">
        <span>{{ item.condition }}：</span>
        <span class="color-danger">{{ item.message }}</span>
      </div>
    </div>

    <div
      v-if="ruleInfo.regexInfo && ruleInfo.regexLabel"
      class="text-size-13px font-bold mb-5px separator">
      {{ ruleInfo.regexLabel }}
    </div>
    <div class="reg-content">
      {{ ruleInfo.regexInfo }}
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { toRefs } from 'vue';
  import { RuleInfo } from '../../utils/ruleInfo';
  const props = defineProps<{ ruleInfo: RuleInfo }>();
  const { ruleInfo } = toRefs(props);
</script>

<style lang="scss" scoped>
  .rule-box {
    @apply p-spacing-sm mt-spacing mb-spacing-xl border border-warning-light-7 rounded-base bg-warning-light-9;
    .rule-item {
      @apply pl-spacing-sm text-size-12px mt-spacing-xxs relative leading-18px;
      &::before {
        @apply content-empty absolute w-5px h-5px top-6px left-2px transform rotate-45 bg-text-secondary;
      }
      &.message::before {
        @apply rounded-full;
      }
    }
    .separator {
      @apply border-t border-warning-light-7 pt-spacing-sm mt-spacing-sm;
    }
    .reg-content {
      @apply font-bold text-size-12px color-warning;
    }
  }
</style>
