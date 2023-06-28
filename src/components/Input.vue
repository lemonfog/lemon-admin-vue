<script setup >
defineProps(['value'])

</script>

<template>
  <input @input="$emit('update:value', $event.target.value)" :value="value" class="outline-blue outline-1 text-dark py-2 px-3
    bg-white border-1 border-solid border-gray rounded-1">
</template>

<style lang="scss" scoped></style>