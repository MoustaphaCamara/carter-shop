<template>
  <NavBar />
  <router-view :products="products"></router-view>
</template>

<script lang="ts">
import NavBar from "./components/NavBar/NavBar.vue";
import { defineComponent } from "vue";
import Product from "./types/Product";
import axios from "axios";
export default defineComponent({
  data() {
    return {
      products: Array<Product[]>,
    };
  },
  methods: {
    getData() {
      const url = "https://moustaphacamara.fr/json/index.php";
      axios.get(url).then((res) => {
        console.log(res.data.products);
        this.products = res.data.products;
      });
    },
  },
  mounted() {
    this.getData();
  },
});
</script>

<style scoped></style>
