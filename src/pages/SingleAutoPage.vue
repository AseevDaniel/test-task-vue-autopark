<script setup>
import autoData from '@/data/autoData.json'
import Slider from '@/components/Slider.vue'
</script>

<template>
  <div class="container">
    <Slider :images="autoData.images" />
  </div>
</template>

<style scoped lang="scss"></style>
