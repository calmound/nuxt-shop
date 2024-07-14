<template>
  <div class="text-blue-darken-1 text-h4 text-sm-h3 tw-text-center tw-mb-[16px] font-weight-bold">
    <div :class="titleCls">{{ title }}</div>
  </div>
  <div class="text-body-1 tw-max-w-[600px] tw-m-auto tw-mb-8">
    <span class="tw-mb-[64px] tw-max-w-[600px] tw-m-auto font-weight-medium text-grey-darken-1">{{
      desc
    }}</span>
  </div>
  <v-item-group multiple v-if="!responsive">
    <v-row>
      <v-col v-for="(item, index) in list" :key="index" cols="6" :lg="lgCol" md="4" sm="6">
        <v-hover v-slot="{ isHovering, props }" open-delay="200" :disabled="disabled">
          <v-card color="blue-darken-1" variant="outlined" :elevation="isHovering ? 16 : 2"
            :class="{ 'on-hover': isHovering }" class="mx-auto" max-width="260" v-bind="props"
            @click="handleCardClick(item)">
            <v-img :src="item" :alt="item.name" />
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-item-group>
  <v-item-group multiple v-if="responsive">
    <v-row>
      <v-col v-for="(item, index) in list" :key="index">
        <v-hover v-slot="{ isHovering, props }" open-delay="200" :disabled="disabled">
          <v-card color="blue-darken-1" variant="outlined" :elevation="isHovering ? 16 : 2"
            :class="{ 'on-hover': isHovering }" class="pt-5 mx-auto" height="350" v-bind="props"
            :href="item.href ? item.href : undefined" @click="handleCardClick(item)">
            <v-img :src="item.imageUrl" width="250" class="text-center ma-auto" />
            <div
              class="text-center bg-blue-darken-1 tw-absolute tw-bottom-0 tw-text-center tw-w-full tw-h-9 tw-leading-9">
              {{ item.name }}
            </div>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-item-group>
</template>

<script setup lang="ts">
import type { Category } from '@/type'
import { computed } from 'vue'

import { useCategoryStore } from '@/stores/category'
import { useRouter } from 'vue-router'
import { useProductListStore } from '@/stores/product_list'

const router = useRouter()
const categoryStore = useCategoryStore()
const productStore = useProductListStore()

const props = defineProps<{
  title: string
  desc?: string
  list: string[]
  cardNum?: number
  href?: string
  disabled?: boolean
  responsive?: boolean
  titleCls?: string
  titleDivider?: boolean
  listType?: string
}>()

const lgCol = computed(() => (props.cardNum === 3 ? 4 : 3))

const handleCardClick = (item: any) => {
  if (props.listType !== 'equipment' && item.href) {
    router.push(item.href)
  } else {
    categoryStore.updateCategory(categoryStore.list[3].categoryDisplayName)
    categoryStore.updateSubCategory(item.id)
    productStore.updatePageNo(1)
    router.push(item.href)
  }
}
</script>
