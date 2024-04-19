<template>
  <div class="boxWrapper">
    <div class="registrationNumber">
      <div class="countryMarks">
        <slot name="header">
          <IconUkraine />
          UA
        </slot>
      </div>
      <span class="number">
        {{ currentNumberValue }}
      </span>
    </div>
    <span @click="isShown = !isShown" class="visibilityToggler clickableItem" v-if="hideable">
      <IconEyeClose v-if="isShown" />
      <IconEye v-else />
    </span>
  </div>
</template>

<script>
import IconUkraine from '@/components/icons/IconUkraine.vue'
import IconEye from '@/components/icons/IconEye.vue'
import IconEyeClose from '@/components/icons/IconEyeClose.vue'

export default {
  components: { IconEyeClose, IconEye, IconUkraine },
  props: {
    registrationNumber: String,
    hideable: Boolean
  },
  data() {
    return {
      isShown: true
    }
  },
  computed: {
    currentNumberValue() {
      if (!this.hideable || this.isShown) return this.registrationNumber

      return this.registrationNumber.replace(/[\s\S]/g, 'X')
    }
  }
}
</script>

<style scoped lang="scss">
.boxWrapper {
  display: flex;
  .visibilityToggler {
    margin-left: 8px;
    svg {
      height: 24px;
    }
  }
}
.registrationNumber {
  height: 24px;
  width: max-content;
  background: white;
  border-radius: 4px;
  border: 2px solid $nationalColor;
  overflow: hidden;
  display: flex;
  .countryMarks {
    height: 100%;
    background: $nationalColor;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    height: 100%;
    white-space: nowrap;
    font-size: 8px;
    line-height: 8px;
    color: white;
    svg {
      height: 10px;
      width: 18px;
    }
  }
  .number {
    height: 100%;
    text-align: center;
    width: 100%;
    line-height: 22px;
    font-size: 14px;
    padding: 0 8px;
  }
}
</style>
