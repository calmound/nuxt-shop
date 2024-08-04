<template>
  <v-container>
    <v-row class="items-center px-12 mt-3 mb-0">
      <v-text-field class="mr-6" label="输入关键字" variant="solo" append-inner-icon="mdi-magnify"
        hide-details="auto"></v-text-field>
      <v-btn variant="text" color="blue-darken-2">
        联系我们
      </v-btn>
    </v-row>
  </v-container>
  <v-tabs selected-class="active" v-model="tab" bg-color="blue-darken-1">
    <v-tab value="1" to="/">首页</v-tab>
    <v-tab value="2" to="/products">产品列表</v-tab>
    <v-tab value="3" to="/about">关于我们</v-tab>
    <v-tab value="4" to="/contact">联系我们</v-tab>
  </v-tabs>
</template>

<script lang="ts" setup>
const tab = ref()

</script>

<style scoped>
.active :deep .v-tab__slider {
  bottom: 3px;
}
</style>
