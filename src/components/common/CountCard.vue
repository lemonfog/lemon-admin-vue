<script setup lang='ts'>
defineProps(['title', 'count', 'description', 'icon'])
</script>

<template>
  <div class="card mb-24px box-border p-4  bg-white text-[#97a6ad] rounded-2">
    <div class="flex">
      <div class="flex-1">
        <p class="text-gray">{{ title }}</p>
        <p class="text-6 text-[#6c757d] font-700">{{ count }}</p>
      </div>
      <div>
        <iconify-icon class="p-1 rounded-1  bg-[#00ffcc] text-[#f8b500]" :icon="icon" width="32"></iconify-icon>
      </div>
    </div>

    <p class="text-nowrap overflow-hidden text-ellipsis hover:text-wrap">
      <slot></slot>
    </p>
  </div>
</template>
<style scoped>
.card {
  box-shadow: 2px 2px 8px rgba(0, 0, 0, .1)
}
</style>
