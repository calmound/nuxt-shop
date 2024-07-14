<template>
  <v-container>
    <v-row class="mb-16 ma-0">
      <v-col cols="12" sm="5">
        <v-carousel class="tw-float-left" height="450" v-model="slide" hide-delimiter-background>
          <v-carousel-item cover v-for="(slide, i) in info.productimageliststore" :src="slide.url" :key="i"
            :alt="info.name">
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12" sm="7">
        <v-row class=" text-h4 font-weight-medium">
          <v-col>{{ info.name }}</v-col>
        </v-row>
        <v-row class="text-xs font-weight-medium tw-text-gray-500 tw-mb-0 ">
          <v-col class="!tw-py-0">已卖 {{ info.sold_quantity }} 件</v-col>
        </v-row>
        <v-row class="text-h6 mb-sm-1 font-weight-medium tw-text-orange-500">
          <v-col>¥ {{ info.price }}</v-col>
        </v-row>
        <div class="tw-flex tw-flex-wrap">
          <div class="tw-w-1/2 mb-sm-4">
            <span class="tw-leading-[10px] tw-m-[16px] "> 类型：{{ info.type }} </span>
          </div>
          <div class="tw-w-1/2">
            <span class="tw-leading-[10px] tw-m-[16px]"> 品牌：{{ info.brand }} </span>
          </div>
          <div class="tw-w-1/2 ">
            <span class="tw-leading-[10px] tw-m-[16px]">材质：{{ info.material }}</span>
          </div>
          <div class="tw-w-1/2">
            <span class="tw-leading-[10px] tw-m-[16px]">库存：{{ info.stock_quantity }}</span>
          </div>
          <div class="tw-w-1/2" v-if="info.basename3">
            <span class="tw-leading-[10px] tw-m-[16px]">{{ info.basename3 }}：{{ info.basecore3 }}</span>
          </div>
        </div>
        <v-table density="comfortable" class="table1 tw-mt-8 " v-if="info.size_chart?.length">
          <thead>
            <tr class="bg-grey-lighten-3">
              <th class="text-left headerBorder text-grey-darken-1">体重</th>
              <th class="text-left headerBorder text-grey-darken-1">身高</th>
              <th class="text-left headerBorder text-grey-darken-1">推荐尺寸</th>
            </tr>
          </thead>
          <tbody>
            <tr class="tr" v-for="item in info.size_chart || []" :key="item.recommended_size">
              <td class="td text-grey-darken-4 font-weight-medium">{{ item.weight }}</td>
              <td class="td text-grey-darken-4 font-weight-medium">{{ item.height }}</td>
              <td class="td">{{ item.recommended_size }}</td>
            </tr>
          </tbody>
        </v-table>
        <!-- <v-dialog v-model="dialog" activator="parent" width="auto">
          <v-card> Contact us Email: contact@sanmu.com QQ: 3003597584 / 2902385824 </v-card>
        </v-dialog> -->
      </v-col>
    </v-row>
    <div class="tw-pb-[64px]">
      <v-tabs class="tabs" v-model="tab" color="white" bg-color="#eeeeee" slider-color="blue-lighten-1"
        selected-class="active">
        <v-tab :value="1">商品详情</v-tab>
        <v-tab :value="2">商品评价</v-tab>
      </v-tabs>
      <v-window v-model="tab" class="tw-p-[24px]">
        <v-window-item key="1" :value="1" class="tw-leading-8">
          <div v-html="info.description"></div>
        </v-window-item>
        <v-window-item key="2" :value="2">
          <v-table density="compact" class="table2">
            <tbody>
              <tr class="tr" v-for="item in info.reviews || []" :key="item.name">
                <td class="td tw-w-[200px]">{{ item.username }}</td>
                <td class="td">{{ item.comment }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-window-item>
      </v-window>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import type { Product, ProductImage } from '~/type'
import { onMounted, ref } from 'vue'
import { useDialogStore } from '~/stores/dialog'
const dialogStore = useDialogStore()

const props = defineProps<{
  info: Product
}>()
const info = props.info

// onMounted(() => {
//   dialogStore.updateDialog(true)
// })

const tab = ref(0)
const slide = ref(0)
</script>

<style lang="scss" scoped>
.headerBorder {
  border-top: 3px solid #1f88e5 !important;
}

.tabs {
  border-bottom: 2px solid #1f88e5;
}

.active {
  background-color: #1086e8;
}

.td,
th {
  border: 1px solid #dcdcdc;
  border-right: 0px;
  border-bottom: 0px !important;
  height: 50px !important;

  &:last-child {
    border: 1px solid #dcdcdc;
  }
}

.tr:last-child {
  .td {
    border-bottom: 1px solid #dcdcdc !important;
  }
}
</style>
