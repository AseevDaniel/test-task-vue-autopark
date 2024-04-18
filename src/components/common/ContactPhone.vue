<template>
  <div class="contactPhone clickableItem">
    <div class="phoneIconContainer">
      <IconPhone color="white" />
    </div>
    067-322-16-63
  </div>
</template>

<style scoped lang="scss">
.contactPhone {
  padding: 4px;
  padding-right: 20px;
  border-radius: 28px;
  background: white;
  box-shadow: $defaultShadow;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  text-shadow: $defaultTextShadow;
  .phoneIconContainer {
    background: $secondColor;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
  }
}
</style>
<script setup>
import IconPhone from '@/components/icons/IconPhone.vue'
</script>
