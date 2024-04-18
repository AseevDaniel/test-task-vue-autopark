<template>
  <div class="autoMainInfo">
    <div class="titleSection"></div>
    <div class="priceSection"></div>
    <div class="connectSection"></div>
    <div class="servicesSection">
      <ServiceItem service-title="Тест драйв" />
    </div>
    <div class="checkSection"></div>
  </div>
</template>

<script>
import ServiceItem from '@/components/common/ServiceItem.vue'

export default {
  components: {
    ServiceItem
  },
  props: ['autoInfo']
}
</script>

<style scoped lang="scss">
.autoMainInfo {
  width: 380px;
}
</style>
