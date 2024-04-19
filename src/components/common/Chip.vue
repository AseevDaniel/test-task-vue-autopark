<template>
  <div class="chip">
    <slot />
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.chip {
  background: white;
  border: 1px solid $mainColor;
  border-radius: 8px;
  font-size: 16px;
  padding: 4px 8px;
  white-space: nowrap;
  width: min-content;
}
</style>
