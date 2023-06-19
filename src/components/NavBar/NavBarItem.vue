<template>
  <li>
    <router-link
      :to="route"
      class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
      aria-current="page"
      >{{ routeName }}</router-link
    >
  </li>
  <slot></slot>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    routeName: {
      required: true,
      type: String,
    },
    route: {
      required: true,
      type: String,
    },
  },
  data() {
    return {};
  },
});
</script>
