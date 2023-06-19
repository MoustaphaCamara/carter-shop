<template>
  <div>
    <h2 className="text-2xl text-blue-600 font-bold">Product List</h2>
    <ProductItem :products="products" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ProductItem from "./ProductItem.vue";
import Product from "../../types/Product";
export default defineComponent({
  components: { ProductItem },
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
    ]);
    return { products };
  },
});
</script>
