<template>
  <div class="text-blue-darken-1 tw-text-center tw-mb-[16px] font-weight-bold text-h4 text-sm-h3">
    <div :class="titleCls">{{ title }}</div>
  </div>
  <div class="text-body-1 tw-max-w-[600px] tw-m-auto tw-mb-8">
    <span class="tw-mb-[64px] tw-max-w-[600px] tw-m-auto font-weight-medium text-grey-darken-1">{{
      desc
      }}</span>
    <router-link :to="href" v-if="href">
      <span
        class="font-weight-bold text-decoration-underline tw-inline-block tw-underline tw-text-sky-500 hover:tw-text-sky-800">
        <v-icon class="tw-mt-[-4px]" size="18" icon="mdi-arrow-right"></v-icon>
      </span>
    </router-link>
  </div>
  <v-item-group multiple>
    <v-row>
      <v-col v-for="(item, index) in list" :key="index" cols="6" lg="3" md="4" sm="6">
        <v-hover v-slot="{ isHovering, props }" open-delay="200" :disabled="disabled">
          <v-card color="blue-darken-1" variant="outlined" :elevation="isHovering ? 16 : 2"
            :class="{ 'on-hover': isHovering }" class="pt-5 mx-auto" v-bind="props" @click="handleCardClick(item)">
            <v-img :src="item.imageUrl" class="text-center ma-auto" />
            <div class="text-center bg-blue-darken-1 tw-text-center tw-w-full tw-h-9 tw-leading-9">
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

import { useCategoryStore } from '@/stores/category'
import { useRouter } from 'vue-router'
import { useProductListStore } from '@/stores/product_list'

const router = useRouter()
const categoryStore = useCategoryStore()
const productStore = useProductListStore()

defineProps<{
  title: string
  desc?: string
  list: Category[] | { name: string; imageUrl?: string; href: string }[]
  cardNum?: number
  href?: string
  disabled?: boolean
  responsive?: boolean
  titleCls?: string
  titleDivider?: boolean
}>()

const handleCardClick = (item: any) => {
  categoryStore.updateCategory(item.name)
  const find = categoryStore.list.find((c) => c.categoryDisplayName === item.name)!
  categoryStore.updateSubCategory(find.list[0].id)
  productStore.updatePageNo(1)
  router.push(item.href)
}
</script>
