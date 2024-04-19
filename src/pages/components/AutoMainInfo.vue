<template>
  <div class="autoMainInfo">
    <div class="titleSection">
      {{ title }}
      <div class="actions">
        <IconShare class="clickableItem" />
        <IconBookmark class="clickableItem" />
      </div>
    </div>
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
import IconShare from '@/components/icons/IconShare.vue'
import IconBookmark from '@/components/icons/IconBookmark.vue'
import { computed } from 'vue'

export default {
  components: {
    ServiceItem,
    IconShare,
    IconBookmark
  },
  props: ['autoInfo'],
  computed: {
    title() {
      const { brand, model, year } = this.autoInfo
      return `${brand} ${model} ${year}`
    }
  }
}
</script>

<style scoped lang="scss">
.autoMainInfo {
  width: 380px;
  .titleSection {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    .actions {
      svg {
        &:not(:last-child) {
          margin-right: 4px;
        }
      }
    }
  }
}
</style>
