<template>
  <v-container>
    <MainTitleList :list="manList" title="男装" desc="最新的时尚男装，适合各种场合的搭配，从休闲到正式，总有一款适合你。 " />
  </v-container>
  <v-container class="bg-grey-lighten-4">
    <MainTitleList :list="womanList" title="女装" desc="优雅时尚的女装，精致的设计和高质量的面料，展示女性的美丽与自信。 " />
  </v-container>
  <v-container>
    <MainTitleList :list="childrenList" title="童装" desc="可爱舒适的童装，安全无害的材质，给孩子们最贴心的呵护。" />
  </v-container>
  <v-container class="pb-12 bg-grey-lighten-4">
    <MainTitleList :list="countryList" title="国风" desc="专业的国风备，透气舒适，让你神采飞扬。" />
  </v-container>
</template>

<script setup lang="ts">

import MainTitleList from '@/components/MainTitleList.vue';

const manList = [
  '/home/m1.jpg',
  '/home/m2.jpg',
  '/home/m3.jpg',
  '/home/m4.jpg',
]

const womanList = [
  '/home/w1.jpg',
  '/home/w2.jpg',
  '/home/w3.jpg',
  '/home/w4.jpg',
]
const childrenList = [
  '/home/k1.jpg',
  '/home/k2.jpg',
  '/home/k3.jpg',
  '/home/k4.jpg',
]
const countryList = [
  '/home/g1.jpg',
  '/home/g2.jpg',
  '/home/g3.jpg',
  '/home/g4.jpg',
]

</script>
