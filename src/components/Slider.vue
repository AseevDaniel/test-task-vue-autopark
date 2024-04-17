<template>
  <div>
    <v-carousel v-model="model">
      <v-carousel-item v-for="(color, i) in colors" :key="color" :value="i">
        <v-sheet :color="color" height="100%" tile>
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">Slide {{ i + 1 }}</div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: 0
    }
  },
  props: ['colors']
}
</script>

<style scoped lang="scss"></style>
