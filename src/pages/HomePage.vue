<template>
  <div>
    <div
      class="max-w-2xl mx-auto mt-6 flex justify-center items-center flex-col"
    >
      <img
        src="https://logo-marque.com/wp-content/uploads/2021/08/Akatsuki-Logo.png"
        alt="logo"
        class="w-32"
      />
      <h1
        class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
      >
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
          >Manga List</span
        >
      </h1>
    </div>
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
