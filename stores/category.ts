import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Category, CategoryRootType } from '../type';

export const useCategoryStore = defineStore('category', () => {
  const list = ref<CategoryRootType[]>([]);
  const selectedCategory = ref(''); // 选中的一级类别
  const selectedSubCategory = ref(''); // 选中的二级类别
  const categoryVisible = ref(true);
  let resetFuncValue = '';
  let resetCategoryValue = '';

  const getList = async () => {
    const config = useRuntimeConfig();
    // 在SSR中，数据仅在服务器端获取并传递到客户端。
    const { data } = await useAsyncData(
      'category',
      () =>
        $fetch('https://apifoxmock.com/m2/4820049-0-default/193631824', {
          method: 'GET',
        }),
      {
        server: true, // 仅在服务器端获取数据
      }
    );

    list.value = data.value?.data || [];
    selectedCategory.value = list.value[0].id;
    selectedSubCategory.value = list.value[0].children[0].id;
  };

  const updateCategory = (value: string) => {
    selectedCategory.value = value;
  };

  const updateSubCategory = (value: string) => {
    selectedSubCategory.value = value;
  };

  const updateDisplay = (visible: boolean) => {
    categoryVisible.value = visible;
  };

  return {
    list,
    selectedCategory,
    selectedSubCategory,
    resetCategoryValue,
    categoryVisible,
    getList,
    updateCategory,
    updateSubCategory,
    updateDisplay,
  };
});
