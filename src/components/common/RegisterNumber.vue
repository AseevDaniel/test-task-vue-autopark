<template>
  <div class="registrationNumber">
    <div class="countryMarks">
      <IconUkraine />
      UA
    </div>
    <span class="number">
      {{ registrationNumber }}
    </span>
  </div>
</template>

<script>
import IconUkraine from '@/components/icons/IconUkraine.vue'

export default {
  components: { IconUkraine },
  props: ['registrationNumber']
}
</script>

<style scoped lang="scss">
.registrationNumber {
  height: 24px;
  width: 100px;
  background: white;
  border-radius: 4px;
  border: 2px solid $nationalColor;
  overflow: hidden;
  display: flex;
  .countryMarks {
    width: 18px;
    background: $nationalColor;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 8px;
    line-height: 8px;
    color: white;
    height: 100%;
    svg {
      height: 10px;
    }
  }
  .number {
    text-align: center;
    width: 100%;
    line-height: 22px;
    font-size: 14px;
  }
}
</style>
