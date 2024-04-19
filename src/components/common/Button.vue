<template>
  <button :class="[thin && 'thinButton', 'button']" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    thin: Boolean
  }
}
</script>

<style scoped lang="scss">
.button {
  width: 100%;
  height: 100%;
  padding: 17px 65px;
  background: $mainColor;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  line-height: 16px;
  font-weight: bold;
  box-shadow: none;
  transition: $transitionDefaultTime;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    filter: brightness(1.1);
  }
  &:active {
    transition: 0.05s;
    scale: 0.95;
  }
  &.thinButton {
    height: 40px;
  }
}
</style>
