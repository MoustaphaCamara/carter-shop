<template>
  <div v-for="product in products">
    <figure
      class="relative w-48 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
    >
      <a href="#">
        <img class="rounded-lg" :src="product.img" alt="manga" />
      </a>
      <figcaption class="absolute px-4 text-lg text-white bottom-6">
        <p class="bg-gray-800 p-2 rounded-lg">
          {{ product.title }}
        </p>
      </figcaption>
    </figure>
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
