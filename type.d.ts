export interface Category {
  name: string
  imageUrl: string
  id: string
  href?: string
}

export interface CategoryRootType {
  categoryDisplayName: string
  list: Category[]
  productFunctions: Category[]
}

export interface Product {
  name: string
  id: string
  imageUrl: string
  basename1: string
  basename2: string
  basename3: string
  basecore1: string
  basecore2: string
  basecore3: string
  model: string
  brandName: string
  physicalproperty: string
  storage: string
  productimageliststore: ProductImage[]
  imgList: ProductImage[]
  productAttributeList?: { name: string; value: string }[]
  ticketTypes: { rank: string; typeName: string; price: string }[]
  advantage: string
  introduction: string
  description: string
}

export interface ProductListQuery {
  productCategoryId: string
  productFunctionId?: string
  keyword?: string
  pageNo: number
  pageSize: number
}

export interface ProductImage {
  url: string
  fileKey: string
}
