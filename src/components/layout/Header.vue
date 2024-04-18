<script setup>
import Button from '@/components/common/Button.vue'
import IconLogoBig from '@/components/icons/IconLogoBig.vue'
import MainMenu from '@/components/common/MainMenu.vue'
</script>

<template>
  <header class="header">
    <IconLogoBig />

    <MainMenu />

    <Button @click="console.log('')">Войти</Button>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  height: 50px;
  box-shadow: $menuShadow;
}
</style>
