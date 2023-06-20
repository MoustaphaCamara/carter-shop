<template>
  <div>
    <div class="max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      <ProductItem :products="products" />
    </div>
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
