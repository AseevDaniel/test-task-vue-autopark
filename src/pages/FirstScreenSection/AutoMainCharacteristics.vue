<template>
  <div class="autoMainCharacteristics">
    <ul class="firstColumn characteristicsColumn">
      <li>
        <IconSpeedometer />
        Пробег:
        <span> {{ characteristics.mileage }}</span>
      </li>
      <li>
        <IconFuelling />
        Объем двигателя:
        <span> {{ characteristics.engineCapacity }}</span>
      </li>
      <li>
        <IconDrive />
        Привод:
        <span> {{ characteristics.mainWheel }}</span>
      </li>
      <li>
        <IconHorse />
        Лошадиные силы:
        <span> {{ characteristics.horsePower }}</span>
      </li>
    </ul>
    <ul class="secondColumn characteristicsColumn">
      <li>
        <IconExpence />
        Топливо:
        <span> {{ characteristics.fuel }}</span>
      </li>
      <li>
        <IconGearbox />
        Трансмиссия:
        <span> {{ characteristics.transmission }}</span>
      </li>
      <li>
        <IconExpenceMinus />
        Расход:
        <span> {{ characteristics.consumption }}</span>
      </li>
      <li>
        <IconDtp />
        ДТП:
        <span> {{ characteristics.accident }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import IconSpeedometer from '@/components/icons/Auto/IconSpeedometer.vue'
import IconFuelling from '@/components/icons/Auto/IconFuelling.vue'
import IconDrive from '@/components/icons/Auto/IconDrive.vue'
import IconHorse from '@/components/icons/Auto/IconHorse.vue'
import IconExpence from '@/components/icons/Auto/IconExpence.vue'
import IconGearbox from '@/components/icons/Auto/IconGearbox.vue'
import IconExpenceMinus from '@/components/icons/Auto/IconExpenceMinus.vue'
import IconDtp from '@/components/icons/Auto/IconDtp.vue'

export default {
  components: {
    IconDtp,
    IconExpenceMinus,
    IconGearbox,
    IconExpence,
    IconHorse,
    IconDrive,
    IconFuelling,
    IconSpeedometer
  },
  props: ['characteristics']
}
</script>

<style scoped lang="scss">
.autoMainCharacteristics {
  display: flex;
  justify-content: space-between;
  .characteristicsColumn {
    width: 50%;
    li {
      display: flex;
      align-items: center;
      color: $colorThemeDark-opacity;
      &:not(:last-child) {
        margin-bottom: 20px;
      }
      svg {
        margin-right: 12px;
      }
      span {
        margin-left: auto;
        color: $colorThemeDark;
        font-weight: 600;
      }
    }
    &.firstColumn {
      padding-right: 30px;
      border-right: 1px solid $disabled-opacity;
    }
    &.secondColumn {
      padding-left: 30px;
    }
  }
}
</style>
