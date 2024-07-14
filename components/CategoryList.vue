<template>
  <v-container>
    <div class="tw-border tw-border-solid tw-border-[#1f88e5]">
      <v-row
        class="ma-0 pl-4 bg-grey-lighten-3 tw-border-0 tw-border-b tw-border-solid tw-border-[#1f88e5] md:tw-leading-[64px]">
        <div class="tw-pr-0 tw-font-bold tw-w-[80px] tw-h-[36px] tw-leading-[64px] text-grey-darken-3">
          分类:
        </div>
        <v-col class="flex pa-0" cols="12" sm="9">
          <span :class="'tw-leading-[50px] tw-inline-flex tw-cursor-pointer px-4 mb-1 mr-1 tw-font-medium rounded hover:tw-text-[#fff] hover:tw-bg-[#1e88e5] ' +
            (categoryStore.selectedCategory === item.id &&
              'tw-text-[#fff] tw-bg-[#1e88e5]')
            " v-for="(item, index) in categoryStore.list" :key="index" @click="handleCategoryClick(item)">
            <b class="tw-m-0 tw-inline">{{ item.name }}</b>
          </span>
        </v-col>
      </v-row>
      <v-row class="pa-4 ma-0 bg-grey-lighten-4">
        <div class="tw-pr-0 tw-font-bold tw-w-[80px] tw-h-[36px] tw-leading-[36px] text-grey-darken-3">
        </div>
        <v-col class="pa-0" cols="12" sm="9">
          <span :class="'px-4 py-1 mb-1 mr-1 tw-font-medium  rounded  tw-inline-flex tw-cursor-pointer hover:tw-text-[#fff] hover:tw-bg-[#1e88e5] ' +
            (categoryStore.selectedSubCategory === item.id && 'tw-text-[#fff] tw-bg-[#1e88e5]')
            " v-for="(item, index) in subCategoryList" :key="index" @click="handleSubCategoryClick(item.id)">
            {{ item.name }}
          </span>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { useCategoryStore } from '@/stores/category'
import { useProductListStore } from '@/stores/product_list'
import type { CategoryRootType } from '@/type'
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()

const categoryStore = useCategoryStore()
const productStore = useProductListStore()

const handleCategoryClick = (item: CategoryRootType) => {
  categoryStore.updateCategory(item.id)
  categoryStore.updateSubCategory(item.children[0].id)
  productStore.updatePageNo(1)
}

const handleSubCategoryClick = (value: string) => {
  categoryStore.updateSubCategory(value)
  productStore.updatePageNo(1)
}

const subCategoryList = computed(() => {
  if (categoryStore.selectedCategory) {
    const list = categoryStore.list.find(
      (item) => item.id === categoryStore.selectedCategory
    )?.children || []
    return list
  }
  return []
})
</script>
