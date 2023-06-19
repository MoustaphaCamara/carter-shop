<template>
  <div>
    <h2 className="text-2xl text-blue-600 font-bold">Product List</h2>
    <ProductItem />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductItem from "./ProductItem.vue";
export default defineComponent({
  components: { ProductItem },
});
</script>
