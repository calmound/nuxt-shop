<template>
  <div class="tw-m-auto tw-pb-[64px]">
    <CategoryList v-if="categoryStore.categoryVisible && !isMobile()" />
    <MobileCategoryList v-if="categoryStore.categoryVisible && isMobile()" />
    <v-container class="">
      <div class="tw-text-center" v-if="loading">
        <v-progress-circular color="blue-lighten-2" indeterminate size="64" class="tw-m-auto"></v-progress-circular>
      </div>
      <v-item-group multiple>
        <v-row v-if="!loading">
          <v-col v-for="(item, i) in productStore.list" :key="i" cols="6" lg="3" md="4" sm="6">
            <v-hover v-slot="{ isHovering, props }" open-delay="200">
              <v-card :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }" class="mx-auto"
                v-bind="props" :to="`/products/detail/${item.id}`">
                <v-img :src="item.picture" :alt="item.name" />
                <v-card-text class="tw-flex tw-text-left font-weight-medium tw-justify-between ">{{ item.name }}
                  <span class="tw-text-orange-500">¥ {{
                    item.price
                    }}</span></v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
        <div v-if="!productStore.total && !loading" class="text-medium-emphasis text-body-1 tw-text-center tw-m-[64px]">
          暂无数据
        </div>
      </v-item-group>
      <v-row>
        <v-col>
          <v-pagination :size="isMobile() ? 'small' : 'default'" v-if="productStore.total" v-model="productStore.pageNo"
            @update:modelValue="productStore.updatePageNo" :length="length" rounded="0"
            class="tw-float-right tw-mt-[32px]" total-visible="5"></v-pagination></v-col></v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { isMobile, isEqual } from '~/utils'
import { useProductListStore } from '~/stores/product_list'
import { useCategoryStore } from '~/stores/category'
import CategoryList from '~/components/CategoryList.vue'
import MobileCategoryList from '~/components/MobileCategoryList.vue'
import { watchEffect, computed, ref } from 'vue'

const productStore = useProductListStore()
const categoryStore = useCategoryStore()
const loading = ref(false)

watchEffect(async () => {
  let params: any = {
    pageNo: productStore.pageNo,
    pageSize: 20
  }

  loading.value = true
  if (productStore.keyword && !isEqual(productStore.params, params)) {
    params.keyword = productStore.keyword
    productStore.updateParams(params)
    await productStore.getList(params)
    loading.value = false
    return
  }

  params.productCategoryId = categoryStore.selectedSubCategory

  if (categoryStore.selectedSubCategory && !isEqual(productStore.params, params)) {
    productStore.updateParams(params)

    await productStore.getList(params)
  }
  loading.value = false
})

const length = computed(() =>
  productStore.total ? Math.ceil(productStore.total / productStore.pageSize) : 0
)
</script>

<style scoped>
.title {
  height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
