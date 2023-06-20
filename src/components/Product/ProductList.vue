<template>
  <div>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
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
