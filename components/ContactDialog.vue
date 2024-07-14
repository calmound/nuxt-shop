<template>
  <v-dialog v-model="dialogStore.dialog" width="auto">
    <!-- <v-toolbar color="blue-darken-1" title="Contact Us"></v-toolbar> -->
    <v-card class="pt-2 mt-8">
      <v-card-text class="pa-1">
        <span class="text-grey-darken-1 font-weight-medium tw-w-[100px] tw-inline-block tw-text-right">Email：
        </span>
        <span class="text-grey-darken-4 font-weight-medium"> contact@sanmu.com </span>
      </v-card-text>
      <!-- <v-card-text class="py-2">
        <span
          class="text-grey-darken-1 font-weight-medium tw-w-[100px] tw-inline-block tw-text-right"
        >
          QQ：
        </span>
        <span class="text-grey-darken-4 font-weight-medium"> 3632191327 </span>
      </v-card-text> -->
      <v-card-text class="pa-1">
        <span class="text-grey-darken-1 font-weight-medium tw-w-[100px] tw-inline-block tw-text-right">
          Phone：
        </span>
        <span class="text-grey-darken-4 font-weight-medium"> +86 19867737979 </span>
      </v-card-text>
      <v-card-text class="pa-1">
        <span class="text-grey-darken-1 font-weight-medium tw-w-[100px] tw-inline-block tw-text-right">
          Telegram：
        </span>
        <span class="text-grey-darken-4 font-weight-medium"> contactsanmu </span>
      </v-card-text>
      <v-card-text class="pa-1">
        <span class="text-grey-darken-1 font-weight-medium tw-w-[100px] tw-inline-block tw-text-right">
          Wechat：
        </span>
        <span class="text-grey-darken-4 font-weight-medium"> contactsanmu </span>
      </v-card-text>
      <p>
        <img src="/wechat.png" alt="" width="140" class="tw-m-auto tw-block" />
      </p>
      <!-- <v-card-actions class="pa-0">
        <v-btn color="blue-darken-1" block @click="dialogStore.updateDialog(false)">Close </v-btn>
      </v-card-actions> -->
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { useDialogStore } from '~/stores/dialog'
const dialogStore = useDialogStore()

</script>

<style lang="less" scoped></style>
