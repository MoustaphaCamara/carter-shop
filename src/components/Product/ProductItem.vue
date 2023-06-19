<template>
  <div>
    <h2 className="text-2xl text-blue-600 font-bold">Product Item</h2>
    <div v-for="product in products">
      {{ product.name }}
      {{ product.description }}
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import Product from "../../types/Product";
export default defineComponent({
  props: {
    products: {
      required: true,
      type: Array as PropType<Product[]>,
    },
  },
});
</script>
