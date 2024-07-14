<template>
  <div class="pr-4 tw-h-[48px] tw-leading-[48px] border-b tw-flex tw-justify-between tw-items-center">
    <span class="ml-4 tw-font-bold">{{ filterName?.name }}</span>
    <span class="ml-1 text-grey-darken-4 text-body-2" @click="drawerVis = !drawerVis">筛选 <v-icon> mdi-filter-outline
      </v-icon></span>
  </div>
  <v-layout>
    <v-navigation-drawer @update:model-value="handleDrawerHide" v-model="drawerVis" location="bottom" touchless
      class="!tw-h-[70%] bg-grey-lighten-4 tw-overflow-y-auto tw-overflow-x-hidden">
      <div class="mb-4 pa-2 tw-bg-[#fff]" v-for="(item, index) in categoryStore.list" :key="index">
        <div class="mb-4 tw-flex tw-items-center">
          <strong class="tw-m-0 tw-inline">{{ item.name }}</strong>
        </div>
        <div class="tw-flex tw-flex-wrap tw-justify-between">
          <div cols="6" v-for="(k, i) in item.children" :class="'tw-w-[48%] mb-4 py-3 px-2 tw-rounded-lg tw-whitespace-nowrap tw-overflow-hidden tw-text-ellipsis' +
            (categoryStore.selectedSubCategory === k.id
              ? ' bg-blue-darken-1 text-white '
              : ' bg-grey-lighten-4 ')
            " :key="k.id" @click="handleCategoryClick(item, k.id)">
            {{ k.name }}
          </div>
        </div>
      </div>
    </v-navigation-drawer>
  </v-layout>
</template>

<script setup lang="ts">
import { useCategoryStore } from '@/stores/category'
import { useProductListStore } from '@/stores/product_list'
import type { CategoryRootType } from '@/type'
import { computed, ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const categoryStore = useCategoryStore()
const productStore = useProductListStore()

const drawerVis = ref(false)

const filterName = computed(() => categoryStore.list?.find((item) => {
  return item.id === categoryStore.selectedCategory
}))

const handleDrawerHide = () => {
  productStore.updatePageNo(1)

  router.push({ query: { category: categoryStore.selectedCategory } })
}

const handleCategoryClick = (item: CategoryRootType, id: string) => {
  categoryStore.updateCategory(item.id)
  categoryStore.updateSubCategory(id)
}
</script>
