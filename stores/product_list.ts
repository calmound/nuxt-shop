import { getProductList } from './../service';
import { ref, watchEffect } from 'vue';
import { defineStore } from 'pinia';
import type { Product, ProductImage, ProductListQuery } from '@/type';

export const useProductListStore = defineStore('productList', () => {
  const list = ref<Product[]>([]);
  const productCategoryId = ref(''); // 选中的类别
  const keyword = ref();
  const pageNo = ref(1);
  const pageSize = ref(20);
  const total = ref(0);
  const params = ref();

  // 图片列表数组
  const images = [
    'g1.jpg',
    'g2.jpg',
    'g3.jpg',
    'g4.jpg',
    'k1.jpg',
    'k2.jpg',
    'k3.jpg',
    'k4.jpg',
    'm1.jpg',
    'm2.jpg',
    'm3.jpg',
    'm4.jpg',
    'w1.jpg',
    'w2.jpg',
    'w3.jpg',
    'w4.jpg',
  ];

  function getRandomImage() {
    // 生成一个随机索引，范围从 0 到 images 数组的长度减 1
    const randomIndex = Math.floor(Math.random() * images.length);
    // 返回随机选择的图片文件名
    return images[randomIndex];
  }

  const getList = async (params: ProductListQuery) => {
    if (params.productCategoryId || params.keyword) {
      const { data } = await useAsyncData('products', () =>
        $fetch('https://apifoxmock.com/m2/4820049-0-default/193668746', {
          method: 'GET',
          params: {
            ...params,
            pageNo: pageNo.value,
            pageSize: pageSize.value,
          },
        })
      );

      list.value = (data.value?.data?.list || []).map((item) => {
        const imagePath = getRandomImage(); // 获取随机图片路径

        return {
          ...item,
          picture: '/home/' + imagePath,
        };
      });

      total.value = data.value?.data?.total || 0;
    }
  };

  const updatePageNo = (value: number) => {
    pageNo.value = value;
  };

  const updateCategory = (value: string) => {
    productCategoryId.value = value;
  };

  const updateParams = (value: any) => {
    params.value = value;
  };

  const updateKeyword = (value: string) => {
    keyword.value = value;
  };

  return {
    pageNo,
    pageSize,
    total,
    list,
    keyword,
    params,
    getList,
    updateCategory,
    updatePageNo,
    updateParams,
    updateKeyword,
  };
});
