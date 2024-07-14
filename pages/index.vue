<template>
  <v-rows class="tw-w-full">
    <v-carousel hide-delimiter-background show-arrows="hover" height="auto" v-if="!isMobile()">
      <v-carousel-item v-for="banner in banners" :src="banner" cover :key="banner">
      </v-carousel-item>
    </v-carousel>
    <v-carousel hide-delimiter-background show-arrows="hover" height="auto" v-if="isMobile()">
      <v-carousel-item v-for="banner in mobileBanners" :src="banner" cover :key="banner">
      </v-carousel-item>
    </v-carousel>
  </v-rows>
  <div class="tw-py-8 py-sm-16">
    <v-container>
      <MainTitleList title="男装" :list="man" desc="最新的时尚男装，适合各种场合的搭配，从休闲到正式，总有一款适合你。 " />
    </v-container>
  </div>

  <div class="bg-grey-lighten-5 tw-py-8 py-sm-16">
    <v-container>
      <MainTitleList title="女装" listType="equipment" :list="woman" desc="优雅时尚的女装，精致的设计和高质量的面料，展示女性的美丽与自信。 "
        href="/equipment" />
    </v-container>
  </div>

  <div class="tw-py-8 py-sm-16">
    <v-container>
      <MainTitleList title="童装" :list="children" href="/customize" desc="可爱舒适的童装，安全无害的材质，给孩子们最贴心的呵护。" />
    </v-container>
  </div>
  <div class="bg-grey-lighten-5 tw-py-8 py-sm-16">
    <v-container>
      <MainTitleList title="国风" :list="sports" href="/test" desc="专业的国风备，透气舒适，助你在运动中表现最佳。 " />
    </v-container>
  </div>
</template>

<script setup lang="ts">
import MainTitleList from '../components/MainTitleList.vue'
import { useCategoryStore } from '../stores/category'
import { computed } from 'vue'
import { isMobile } from '../utils'

const store = useCategoryStore()

const lab = computed(
  () =>
    store?.list?.[3] || {
      categoryDisplayName: '',
      list: []
    }
)

const man = [
  '/home/m1.jpg',
  '/home/m2.jpg',
  '/home/m3.jpg', '/home/m4.jpg',
]

const woman = [
  '/home/w1.jpg',
  '/home/w2.jpg',
  '/home/w3.jpg',
  '/home/w4.jpg',

]

const children = [
  '/home/k1.jpg',
  '/home/k2.jpg',
  '/home/k3.jpg',
  '/home/k4.jpg',
]

const sports = [
  '/home/g1.jpg',
  '/home/g2.jpg',
  '/home/g3.jpg',
  '/home/g4.jpg',
]

</script>
