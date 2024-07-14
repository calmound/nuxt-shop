<script setup lang="ts">
import { isMobile } from '~/utils'
import MobileHeader from '~/components/MobileHeader.vue'

import { useCategoryStore } from '~/stores/category'

const categoryStore = useCategoryStore()
categoryStore.getList()
</script>

<template>
  <Header v-if="!isMobile()" />
  <MobileHeader v-if="isMobile()" />
  <div class="tw-min-h-[700px]">
    <NuxtPage />
  </div>
  <Footer />
</template>
