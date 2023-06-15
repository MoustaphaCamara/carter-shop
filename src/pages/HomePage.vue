<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'

defineProps<{ title: string }>();

// const count = ref(0)
</script>

<style scoped></style>
