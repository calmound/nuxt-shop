<template>
  <v-container>
    <v-item-group mandatory>
      <v-row>
        <v-col v-for="n in list" :key="n.id" cols="3">
          <v-hover v-slot="{ isHovering, props }">
            <v-card :class="{ 'on-hover': isHovering }" :elevation="isHovering ? 16 : 2" v-bind="props">
              <v-img :src="n.img" />
              <v-card-text class="flex justify-between">
                <span class="font-bold"> {{ n.name }} </span><span class="text-orange-500">¥ {{ n.price }}</span>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-item-group>
    <v-pagination class="pagination"></v-pagination>
  </v-container>

</template>

<script setup lang="ts">
const list = [{
  id: '1',
  name: '商品1',
  price: 100,
  img: '/home/m1.jpg'
}, {
  id: '2',
  name: '商品1',
  price: 100,
  img: '/home/m1.jpg'
}, {
  id: '3',
  name: '商品1',
  price: 100,
  img: '/home/m1.jpg'
}, {
  id: '4',
  name: '商品1',
  price: 100,
  img: '/home/m1.jpg'
}, {
  id: '5',
  name: '商品1',
  price: 100,
  img: '/home/m1.jpg'
}, {
  id: '6',
  name: '商品1',
  price: 100,
  img: '/home/m1.jpg'
}]
</script>

<style scoped>
.pagination :deep .v-pagination__list {
  justify-content: end;
}
</style>
