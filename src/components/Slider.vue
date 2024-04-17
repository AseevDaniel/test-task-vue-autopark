<template>
  <div>
    <v-carousel hide-delimiter-background v-model="currentImage">
      <template v-slot:prev="{ props }">
        <div class="arrowWrapper">
          <ArrowIcon class="arrowIcon prevIcon" @click="props.onClick" />
        </div>
      </template>
      <template v-slot:next="{ props }">
        <div class="arrowWrapper">
          <ArrowIcon class="arrowIcon nextIcon" @click="props.onClick" />
        </div>
      </template>
      <v-carousel-item v-for="(image, i) in images" :key="image" :value="i">
        <div class="d-flex fill-height justify-center align-center">
          <img class="fill-height fill-width" :src="image" :alt="'Auto photo' + (i + 1)" />
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import ArrowIcon from './icons/IconArrowDown.vue'
export default {
  components: {
    ArrowIcon
  },
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

<style lang="scss">
.v-carousel {
  .arrowWrapper {
    height: 24px;
    width: 24px;
    background: transparent;
    backdrop-filter: blur(4px);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      scale: 1.1;
    }
    .arrowIcon {
      position: relative;
      height: 18px;
      path {
        stroke: white;
      }
      &.prevIcon {
        rotate: 90deg;
      }
      &.nextIcon {
        rotate: 270deg;
      }
    }
  }

  .v-carousel__controls {
    height: 24px !important;
    .v-carousel__controls__item.v-btn.v-btn--icon {
      background-color: $mainColor;
      opacity: 0.4;
      height: 8px;
      width: 8px;
      margin: 0 2px;
      &.v-btn--active,
      &:hover,
      &:focus {
        opacity: 1;
      }
    }

    .v-btn__content .v-icon {
      display: none; /* Removes the default icon */
    }
    .v-btn--variant-elevated,
    .v-btn--variant-flat {
      background: transparent;
      color: white;
      backdrop-filter: blur(4px);
    }
  }
}
</style>
