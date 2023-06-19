<template>
  <NavBar />
  <router-view :products="products"></router-view>
</template>

<script lang="ts">
import NavBar from "./components/NavBar/NavBar.vue";
import { defineComponent, ref } from "vue";
import Product from "./types/Product";

export default defineComponent({
  setup() {
    const products = ref<Product[]>([
      {
        title: "title1",
        name: "name1",
        description: "desc1",
        price: 1,
        id: 1,
      },
      {
        title: "title2",
        name: "name2",
        description: "desc2",
        price: 2,
        id: 2,
      },
      {
        title: "title3",
        name: "name3",
        description: "desc3",
        price: 3,
        id: 3,
      },
    ]);
    return { products };
  },
});
</script>

<style scoped></style>
