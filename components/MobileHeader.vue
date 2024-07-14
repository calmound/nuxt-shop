<template>
  <!-- <div class="bg-grey-lighten-3 tw-w-full tw-h-[60px]"></div> -->
  <!-- color="grey-lighten-3" -->
  <v-card class="mx-auto !tw-z-10" max-width="" height="60">
    <v-layout>
      <v-app-bar scroll-behavior="elevate" color="white" density="default">
        <v-app-bar-title v-if="!showSearch">
          <a href="/"><v-img src="/mobile/index-logo.png" width="100" height="40" /></a>
        </v-app-bar-title>
        <template v-slot:append>
          <v-btn icon v-if="!showSearch">
            <v-icon @click="showSearch = !showSearch">mdi-magnify</v-icon>
          </v-btn>

          <v-app-bar-nav-icon @click="drawer = !drawer" v-if="!drawer"></v-app-bar-nav-icon>
          <v-app-bar-nav-icon @click="drawer = !drawer" v-if="drawer" icon="mdi-window-close"></v-app-bar-nav-icon>
        </template>

        <div class="tw-h-[36px] tw-w-[300px] ml-8" v-if="showSearch">
          <v-text-field dense density="compact" height="24" label="关键字" hide-details="auto" variant="solo"
            append-inner-icon="mdi-close" @click:appendInner="handleClick" @keydown="handleKeyDown" v-model="input">
          </v-text-field>
        </div>
      </v-app-bar>

      <v-navigation-drawer width="512" v-model="drawer" location="right" temporary floating>
        <v-list density="compact" nav>
          <v-list-item to="/" title="首页" value="home" @click="handleTabClick" color="blue-darken-1">
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item to="/products" title="产品" value="Products" @click="handleTabClick"
            color="blue-darken-1"></v-list-item>
          <v-divider></v-divider>
          <v-list-item to="/about" title="关于" value="about" @click="handleTabClick" color="blue-darken-1"></v-list-item>
          <v-divider></v-divider>
          <v-list-item to="/contact" title="联系我们" value="contact" @click="handleTabClick"
            color="blue-darken-1"></v-list-item>
          <v-divider></v-divider>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
  <ContactDialog />
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useProductListStore } from '@/stores/product_list'
import { useRouter } from 'vue-router'
import { useDialogStore } from '@/stores/dialog'
import { useCategoryStore } from '@/stores/category'
import { useDisplay } from 'vuetify'

const drawer = ref(false)
const showSearch = ref(false)

const productStore = useProductListStore()
const categoryStore = useCategoryStore()

const input = ref()

const router = useRouter()

const handleKeyDown = (e: any) => {
  if (e.keyCode == 13) {
    categoryStore.updateDisplay(!input.value)
    productStore.updateKeyword(input.value)
    productStore.updatePageNo(1)
    router.push('/products')
  }
}

const handleClick = () => {
  showSearch.value = false
}

const handleTabClick = () => {
  categoryStore.updateDisplay(true)
  productStore.updateKeyword('')
}

watchEffect(() => {
  input.value = productStore.keyword
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
