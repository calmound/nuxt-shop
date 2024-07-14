<template>
  <v-container>
    <v-row class="tw-m-auto tw-flex tw-items-center">
      <v-col cols="2" class="pa-0 tw-h-[64px]">
        <router-link to="/"><v-img src="/logo.jpg" /></router-link>
      </v-col>
      <v-col cols="6" md="8" class="px-0">
        <v-text-field label="关键字" hide-details="auto" variant="solo" append-inner-icon="mdi-magnify"
          @click:appendInner="handleClick" @keydown="handleKeyDown" v-model="input">
        </v-text-field>
      </v-col>
      <v-col cols="4" md="2" class="px-0">
        <v-btn variant="text" href="/contact" color="blue-darken-2 mt-4">联系我们
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
  <div class="tabs">
    <div class="tw-max-w-[1200px] tw-mx-auto">
      <v-tabs mobile-breakpoint="580" v-model="tab" bg-color="blue-darken-1" slider-color="grey-lighten-3"
        tab-slider-size="6px" selected-class="active" :grow="screenWidth > 600 ? false : true">
        <v-tab :value="1" to="/"><span @click="handleTabClick" class="text-grey-lighten-3 tw-font-bold">首页</span>
        </v-tab>
        <v-tab :value="2" to="/products">
          <span @click="handleTabClick" class="text-grey-lighten-3 tw-font-bold">产品</span>
        </v-tab>
        <v-tab :value="3" to="/about"><span @click="handleTabClick" class="text-grey-lighten-3 tw-font-bold">关于</span>
        </v-tab>
        <v-tab :value="4" to="/contact"><span @click="handleTabClick"
            class="text-grey-lighten-3 tw-font-bold">联系我们</span>
        </v-tab>
      </v-tabs>
    </div>
  </div>
  <ContactDialog />
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import ContactDialog from '@/components/ContactDialog.vue'
import { useProductListStore } from '@/stores/product_list'
import { useRouter } from 'vue-router'
import { useDialogStore } from '@/stores/dialog'
import { useCategoryStore } from '@/stores/category'
import { useDisplay } from 'vuetify'

const { width: screenWidth } = useDisplay()

const productStore = useProductListStore()
const categoryStore = useCategoryStore()

const input = ref()

const router = useRouter()

const dialog = useDialogStore()

const handleKeyDown = (e: any) => {
  if (e.keyCode == 13) {
    handleClick()
  }
}

const handleClick = () => {
  categoryStore.updateDisplay(!input.value)
  productStore.updateKeyword(input.value)
  productStore.updatePageNo(1)
  router.push('/products')
}

const tab = ref(1)

const handleTabClick = () => {
  categoryStore.updateDisplay(true)
  productStore.updateKeyword('')
}

watchEffect(() => {
  input.value = productStore.keyword
})

onMounted(() => {
  // 获取url的参数
  const url = window.location.href
  const index = url.indexOf('?')
  if (index !== -1) {
    const params = url.slice(index + 1).split('&')
    const obj: any = {}
    params.forEach((item) => {
      const arr = item.split('=')
      obj[arr[0]] = arr[1]
    })
    // 获取dialog的状态
    if (obj.flag) {
      dialog.updateDialog(true)
    }
  }
})
</script>

<style lang="scss" scoped>
.tabs {
  background-color: #1f88e5;
}

.active :deep {
  .v-tab__slider {
    bottom: 3px;
  }
}
</style>
