<template>
  <div>
    <h1 className="text-3xl text-blue-600 font-bold underline">
      {{ title }}
    </h1>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<style scoped></style>
