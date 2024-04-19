<template>
  <div :class="[singleColumn && 'singleColumn', 'featuresList']">
    <FeatureItem v-for="(item, i) in items" :key="i">
      <span v-if="!!tags?.[i]">
        {{ tags?.[i] }}
      </span>
      {{ item }}
    </FeatureItem>
  </div>
</template>

<script>
import FeatureItem from '@/components/common/FeatureItem.vue'

export default {
  components: {
    FeatureItem
  },
  props: {
    items: Array,
    tags: Array,
    singleColumn: Boolean
  }
}
</script>

<style scoped lang="scss">
.featuresList {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;
  &.singleColumn {
    grid-template-columns: 1fr;
  }
  span {
    margin-right: 8px;
    color: $colorThemeDark;
    opacity: 0.7;
  }
}
</style>
