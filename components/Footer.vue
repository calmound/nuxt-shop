<template>
  <div class="bg-grey-darken-3 tw-flex tw-pt-[32px] tw-pb-[32px] text-white">
    <v-container>
      <v-row>
        <v-col cols="12" lg="4" sm="12" md="6">
          <b>商品分类</b>
          <p><router-link to="/equipment">男装</router-link></p>
          <p><router-link to="/customize">女装</router-link></p>
          <p><router-link to="/pack">童装</router-link></p>
          <p><router-link to="/pack">国风</router-link></p>
        </v-col>
        <v-col cols="12" lg="4" sm="12" md="6">
          <b>关于</b>
          <p><router-link to="/about">企业介绍</router-link></p>
        </v-col>
        <v-col cols="12" lg="4" sm="12" md="6">
          <div class="tw-w-[250px] tw-float-left tw-mr-[8px]">
            <b>联系我们</b>
            <p>Email: sanmu@emial.com</p>
            <p>Phone： +86 180xxxxxxxx</p>
            <p>Wechat： sanmu159</p>
          </div>
          <img class="tw-float-left" src="/wechat.png" width="80" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts"></script>

<style>
b {
  margin-bottom: 12px;
  display: block;
}

p {
  cursor: pointer;
  margin-bottom: 8px;
}

p a:hover {
  color: #e0e0e0;
}
</style>
