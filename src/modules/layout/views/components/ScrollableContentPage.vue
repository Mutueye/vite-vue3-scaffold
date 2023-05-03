<template>
  <div class="w-full flex flex-col flex-1 min-h-0 border-t border-border-lighter">
    <el-scrollbar>
      <div class="p-spacing-xl flex-shrink-0">
        <slot />
      </div>
    </el-scrollbar>
  </div>
</template>
