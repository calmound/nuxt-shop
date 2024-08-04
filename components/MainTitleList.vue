<template>
  <div class="py-8">
    <h2 class="mb-2 !font-bold text-center text-blue-darken-1 text-h4 ">{{ title }}</h2>
    <div class="mb-2 text-center text-body-1">{{ desc }}</div>
    <v-item-group mandatory>
      <v-row>
        <v-col v-for="n in list" :key="n" cols="3">
          <v-hover v-slot="{ isHovering, props }">
            <v-card :class="{ 'on-hover': isHovering }" :elevation="isHovering ? 16 : 2" v-bind="props">
              <v-img :src="n" />
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-item-group>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  desc: string;
  list: string[]
}>()

</script>

<style lang="less" scoped></style>
