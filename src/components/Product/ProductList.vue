<template>
  <div>
    <h2 className="text-2xl text-blue-600 font-bold">Product List</h2>
    <ProductItem :products="products" />
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import ProductItem from "./ProductItem.vue";
import Product from "../../types/Product";
export default defineComponent({
  components: { ProductItem },
  props: {
    products: {
      required: true,
      type: Array as PropType<Product[]>,
    },
  },
});
</script>
