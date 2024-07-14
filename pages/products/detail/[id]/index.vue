<template>
  <MobileProductDetail v-if="isMobile()" :info="info" />
  <ProductDetail v-else :info="info" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import ProductDetail from '~/components/ProductDetail.vue'
import MobileProductDetail from '~/components/MobileProductDetail.vue'
import type { Product, ProductImage } from '~/type'
import { useRoute } from 'vue-router'

const route = useRoute()

const info = ref<Partial<Product>>({})

let { data } = await useAsyncData('productsDetail', () => $fetch('https://apifoxmock.com/m1/4820049-0-default/shop/products/', {
  method: 'GET',
  params: {
    id: route.params.id
  }
}), {
  server: true  // 仅在服务器端获取数据
})

const { data: imagePath, error, pending: loading } = useAsyncData('random-image', () => {
  return fetch('/api/random-image')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch image');
      }
      return response.text();  // 假设 API 返回的是文本格式的路径
    })
}, {
  server: true  // 仅在服务器端获取数据
});


info.value = { ...data.value?.data, imgList: imagePath } as Product
console.log('%c [ imagePath ]-40', 'font-size:13px; background:pink; color:#bf2c9f;', imagePath)
</script>
