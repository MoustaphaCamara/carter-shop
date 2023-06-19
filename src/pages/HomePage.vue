<template>
  <div>
    <h1 className="text-3xl text-blue-600 font-bold">HomePage</h1>
    <ProductList :products="products" />
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import ProductList from "../components/Product/ProductList.vue";
import Product from "../types/Product";
export default defineComponent({
  components: { ProductList },
  props: {
    products: {
      required: true,
      type: Array as PropType<Product[]>,
    },
  },
});
</script>

<style scoped></style>
