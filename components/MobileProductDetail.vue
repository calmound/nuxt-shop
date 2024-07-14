<template>
  <v-container class="ma-0 pa-0 bg-grey-lighten-5">
    <v-carousel class="tw-float-left" height="450" v-model="slide" hide-delimiter-background>
      <v-carousel-item cover v-for="(slide, i) in info.productimageliststore" :src="slide.url" :key="i"
        :alt="info.name">
      </v-carousel-item>
    </v-carousel>
    <div class="mb-3 bg-white mb-sm-10 text-h4 font-weight-medium pa-4">
      {{ info.name }}
    </div>
    <v-row class="mx-4 mt-0 mb-4 bg-white rounded-lg">
      <v-col cols="6">
        <div class="text-body-1 text-grey-darken-3">Brand：</div>
        <div class="text-h6">{{ info.brandName }}</div>
      </v-col>
      <v-col cols="6">
        <div class="text-body-1 text-grey-darken-3">Product Model：</div>
        <div class="text-h6">{{ info.model }}</div>
      </v-col>
      <v-col cols="6" v-if="info.basename1">
        <div class="text-body-1 text-grey-darken-3">{{ info.basename1 }}：</div>
        <div class="text-h6">{{ info.basecore1 }}</div>
      </v-col>
      <v-col cols="6" v-if="info.basename2">
        <div class="text-body-1 text-grey-darken-3">{{ info.basename2 }}：</div>
        <div class="text-h6">{{ info.basecore2 }}</div>
      </v-col>
      <v-col cols="6" v-if="info.basename3">
        <div class="text-body-1 text-grey-darken-3">{{ info.basename3 }}：</div>
        <div class="text-h6">{{ info.basecore3 }}</div>
      </v-col>
    </v-row>
    <div v-if="info.ticketTypes?.length" class="py-4 mx-4 bg-white rounded-lg tw-flex tw-flex-wrap tw-justify-around">
      <v-sheet v-for="item in info.ticketTypes || []" :key="item.rank" rounded="lg" border class="tw-w-[40%] mb-4">
        <div
          class="tw-bg-[#dcecfa] tw-h-[64px] !tw-leading-[64px] rounded-lg rounded-b-0 pa-2 tw-text-center text-h6 tw-overflow-hidden tw-text-ellipsis">
          {{ item.typeName }}
        </div>
        <div class="tw-h-[82px] pa-2">
          <div class="text-caption">Product Code</div>
          <div class="text-body-1 !tw-font-[500]">
            {{ item.rank }}
          </div>
        </div>
      </v-sheet>
      <v-btn size="large" color="blue-darken-1" @click="dialogStore.updateDialog(true)">
        Quotation Inquiry
      </v-btn>
    </div>
    <!-- <v-dialog v-model="dialog" activator="parent" width="auto">
          <v-card> Contact us Email: contact@sanmu.com QQ: 3003597584 / 2902385824 </v-card>
        </v-dialog> -->
    <div class="tw-pb-[64px] ma-4 rounded-lg">
      <v-tabs class="tabs" v-model="tab" bg-color="#fff" slider-color="#1d89e4" selected-class="active">
        <v-tab :value="1">Product Details</v-tab>
        <v-tab :value="2">Specification</v-tab>
        <!-- <v-tab :value="3">商品百科</v-tab> -->
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item key="1" :value="1">
          <div v-if="info.advantage" class="tw-mb-[24px]">
            <div class="py-2 pl-2 text-h6">Advantage</div>
            <v-divider class="tw-mb-[12px]"></v-divider>
            <div v-html="info.advantage"></div>
          </div>
          <div v-if="info.physicalproperty" class="tw-mb-[24px]">
            <div class="py-2 pl-2 text-h6">Physical Property</div>
            <v-divider class="tw-mb-[12px]"></v-divider>
            <div v-html="info.physicalproperty"></div>
          </div>
          <div v-if="info.advantage" class="tw-mb-[24px]">
            <div class="py-2 pl-2 text-h6">Storage</div>
            <v-divider class="tw-mb-[12px]"></v-divider>
            <div v-html="info.storage"></div>
          </div>
          <div v-if="info.introduction" class="tw-mb-[24px]">
            <div class="py-2 pl-2 text-h6">Introduction</div>
            <v-divider class="tw-mb-[12px]"></v-divider>
            <div v-html="info.introduction"></div>
          </div>
          <div v-if="info.advantage" class="tw-mb-[24px]">
            <div class="py-2 pl-2 text-h6">Description</div>
            <v-divider class="tw-mb-[12px]"></v-divider>
            <div v-html="info.description"></div>
          </div>
        </v-window-item>
        <v-window-item key="2" :value="2">
          <v-table density="compact" class="table2">
            <tbody>
              <tr class="tr" v-for="item in info.productAttributeList || []" :key="item.name">
                <td class="td tw-w-[400px]">{{ item.name }}</td>
                <td class="td">{{ item.value }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-window-item>
        <!-- <v-window-item key="3" :value="3"> 2 </v-window-item> -->
      </v-window>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import type { Product } from '~/type'
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
.tabs {
  border-bottom: 2px solid #cbd9e4;
}

.active {
  background-color: #fff;
}
</style>
