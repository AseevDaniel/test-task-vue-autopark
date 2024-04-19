<template>
  <div class="autoDescription">
    <h1>Описание</h1>
    <RegisterNumber :registrationNumber="registrationNumber" />
    <ExpansionBlock :content="description" />
  </div>
</template>

<script>
import ExpansionBlock from '@/components/common/ExpansionBlock.vue'
import RegisterNumber from '@/components/common/RegisterNumber.vue'

export default {
  components: { RegisterNumber, ExpansionBlock },
  props: ['description', 'registrationNumber']
}
</script>

<style scoped lang="scss">
.autoDescription {
  .registrationNumber {
    margin-top: 20px;
  }
  .expansionBlock {
    margin-top: 20px;
  }
}
</style>
