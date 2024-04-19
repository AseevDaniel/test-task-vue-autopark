<script setup>
import IconPhone from '@/components/icons/IconPhone.vue'
import { DEFAULT_CONTACT_PHONE } from '@/constants/contacts.js'
</script>

<template>
  <div class="contactPhone clickableItem">
    <div class="phoneIconContainer">
      <IconPhone color="white" />
    </div>
    {{ DEFAULT_CONTACT_PHONE }}
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
