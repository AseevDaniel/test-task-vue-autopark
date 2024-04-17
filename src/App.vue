<script setup>
import autoData from './data/autoData.json'
import Slider from './components/Slider.vue'

console.log(autoData)
</script>

<template>
  <Slider :images="autoData.images" />
</template>

<style scoped></style>
