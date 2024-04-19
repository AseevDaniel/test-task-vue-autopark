<template>
  <div class="autoCharacteristics">
    <h2>Характеристики</h2>
    <ul class="characteristicsList">
      <li>
        <RegisterNumber hideable :registration-number="vin">
          <template v-slot:header> <span class="vinMark">VIN-код:</span> </template>
        </RegisterNumber>
      </li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>0</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
    </ul>
  </div>
</template>

<script>
import RegisterNumber from '@/components/common/RegisterNumber.vue'

export default {
  components: { RegisterNumber },
  props: ['vehicleSpecifications', 'vin']
}
</script>

<style scoped lang="scss">
.autoCharacteristics {
  .characteristicsList {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 12px;
    margin-top: 20px;
    .vinMark {
      padding: 0 8px;
      color: white;
      font-size: 14px;
    }
  }
}
</style>
