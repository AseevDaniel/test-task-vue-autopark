<template>
  <div class="autoSlider">
    <v-carousel height="588" hide-delimiter-background v-model="currentImage">
      <template v-slot:prev="{ props }">
        <div class="arrowWrapper">
          <IconArrow class="arrowIcon prevIcon" @click="props.onClick" />
        </div>
      </template>
      <template v-slot:next="{ props }">
        <div class="arrowWrapper">
          <IconArrow class="arrowIcon nextIcon" @click="props.onClick" />
        </div>
      </template>
      <v-carousel-item v-for="(image, i) in images" :key="image" :value="i">
        <div class="d-flex fill-height justify-center align-center">
          <v-img cover class="autoPhoto fill-height" :src="image" :alt="'Auto photo' + (i + 1)">
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
              </div>
            </template>
          </v-img>
        </div>
      </v-carousel-item>
      <div class="bottomPanel">
        <div class="bottomItem counter">
          {{ currentImage + 1 }} <span>из</span> {{ images.length }}
        </div>
        <div class="bottomItem socialLink">
          <IconYoutube />
        </div>
      </div>
      <IconLogo class="logo" />
    </v-carousel>
    <div class="imagesList">
      <img
        v-for="(image, i) in images"
        :key="image"
        :class="[currentImage === i ? 'activeImage' : '', 'imageItem']"
        :src="image"
        @click="currentImage = i"
      />
    </div>
  </div>
</template>

<script>
import IconArrow from '../icons/IconArrowDown.vue'
import IconYoutube from '../icons/IconYoutubeRed.vue'
import IconLogo from '../icons/IconAutoparkLogo.vue'
export default {
  components: {
    IconArrow,
    IconYoutube,
    IconLogo
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
.autoSlider {
  width: min(780px, 100vw) !important;
  .v-carousel {
    .bottomPanel {
      position: absolute;
      bottom: 0;
      right: -20px;
      display: flex;
      align-items: center;
      .bottomItem {
        padding: 8px;
        border-radius: 8px;
        background: $colorThemeDark;
        color: white;
        font-size: 18px;
        font-weight: bold;
        height: 40px;
        &.counter {
          margin-right: 12px;
          span {
            color: white;
          }
        }
        &.socialLink {
          padding-right: 40px;
        }
      }
    }
    .logo {
      position: absolute;
      left: 43px;
      bottom: 8px;
      scale: 1.66;
    }

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
      transition: $transitionDefaultTime;
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
        display: none;
      }
      .v-btn--variant-elevated,
      .v-btn--variant-flat {
        background: transparent;
        color: white;
        backdrop-filter: blur(4px);
      }
    }
  }
  .imagesList {
    display: flex;
    align-items: center;
    height: 132px;
    margin-top: 12px;
    max-width: 100%;
    overflow-y: hidden;
    overflow-x: auto;
    @include custom-scroll();

    .imageItem {
      height: 100%;
      width: 180px;
      object-fit: cover;
      cursor: pointer;
      transition: $transitionDefaultTime;
      &:not(:last-child) {
        margin-right: 12px;
      }
      &.activeImage {
        filter: brightness(50%);
      }
    }
  }
}
</style>
