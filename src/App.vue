<template>
  <NavBar />
  <router-view :products="products"></router-view>
  {{ data }}
</template>

<script lang="ts">
import NavBar from "./components/NavBar/NavBar.vue";
import { defineComponent, ref } from "vue";
import Product from "./types/Product";
import axios from "axios";
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

    const getData = () => {
      const url = "https://moustaphacamara.fr/json/index.php";
      axios.get(url).then((res) => {
        return res.data.products;
      });
    };
    const data = getData();

    return { products, data };
  },
});
</script>

<style scoped></style>
