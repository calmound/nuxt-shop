// import axios from 'axios'
// import type { ProductListQuery } from './type'

export const getCategoryList = () => {
  // http://39.108.227.113:3000/mock/11/shop/product/category
  // return axios.post('/mock/11/shop/product/category', {})
  // return axios.post('/shop/product/category', {})
};

export const getProductList = (params: ProductListQuery) => {
  // return axios.post('/shop/product/list', params)
};

export const getDetail = (params: { id: string }) => {
  // return axios.post('/shop/product/', params)
};
