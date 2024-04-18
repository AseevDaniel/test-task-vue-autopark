<script setup>
import autoData from '@/data/autoData.json'
import Slider from '@/components/Slider.vue'
import PreHeader from '@/components/layout/PreHeader.vue'
import Header from '@/components/layout/Header.vue'
</script>

<template>
  <section class="container">
    <PreHeader />
    <Header />
  </section>

  <section class="container">
    <Slider :images="autoData.images" />
  </section>
</template>

<style scoped lang="scss"></style>
