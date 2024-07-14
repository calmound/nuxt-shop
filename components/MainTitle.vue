<template>
  <div :class="'text-blue-darken-1 text-h4 tw-text-center ' + className">
    <b>{{ title }}</b>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  className: { default: 'tw-mb-[64px]', type: String }
})
</script>

<style lang="less" scoped></style>
