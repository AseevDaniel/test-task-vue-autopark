<template>
  <div>
    <v-carousel v-model="currentImage">
      <v-carousel-item v-for="(image, i) in images" :key="image" :value="i">
        <div class="d-flex fill-height justify-center align-center">
          <img class="fill-height fill-width" :src="image" :alt="'Auto photo' + (i + 1)" />
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentImage: 0
    }
  },
  props: ['images'],
  mounted() {
    console.log(this.images)
  }
}
</script>

<style scoped lang="scss"></style>
