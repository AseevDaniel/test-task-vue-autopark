<template>
  <div class="featureItem">
    <IconCheck />
    <slot />
  </div>
</template>

<script setup>
import IconCheck from '@/components/icons/IconCheck.vue'
</script>

<style scoped lang="scss">
.featureItem {
  display: flex;
  align-items: center;
  font-size: 18px;
  svg {
    margin-right: 14px;
  }
}
</style>
