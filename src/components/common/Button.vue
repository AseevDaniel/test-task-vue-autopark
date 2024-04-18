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
  line-height: 16px;
  font-weight: bold;
  box-shadow: none;
  transition: $transitionDefaultTime;
  &:hover {
    filter: brightness(1.1);
  }
  &:active {
    transition: 0.05s;
    scale: 0.95;
  }
}
</style>
<script setup></script>
