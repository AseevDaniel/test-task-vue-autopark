<template>
  <div class="servicesList">
    <h3>{{ listTitle }}</h3>
    <ul class="servicesItems">
      <li v-for="(service, i) in services" :key="i">
        <ServiceItem :service-title="service.title" :service-icon="service.icon" />
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ServiceItem from '@/components/common/ServiceItem.vue'

export default defineComponent({
  components: { ServiceItem },
  props: ['listTitle', 'services']
})
</script>

<style scoped lang="scss">
.servicesList {
  .servicesItems {
    margin-top: 12px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 12px;
  }
}
</style>
