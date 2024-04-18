<template>
  <button class="button" @click="$emit('click')">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button {
  padding: 17px 65px;
  background: $mainColor;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  box-shadow: none;
}
</style>
<script setup></script>
