<template>
  <v-breadcrumbs
    :class="[secondary && 'secondaryStyle', 'breadcrumbs']"
    :divider="secondary ? '|' : '/'"
    :items="items"
  ></v-breadcrumbs>
</template>

<script>
export default {
  props: {
    items: Array,
    secondary: Boolean
  }
}
</script>

<style lang="scss">
.breadcrumbs {
  &.v-breadcrumbs {
    padding: 0;
    .v-breadcrumbs-item {
      cursor: pointer;
      transition: $transitionDefaultTime;
      &:hover {
        color: $mainColor;
      }
      &:first-child {
        padding-left: 0;
      }
      &.v-breadcrumbs-item--disabled {
        opacity: 1;
        pointer-events: initial;
      }
    }
    .v-breadcrumbs-divider {
      padding: 0 2px;
    }
  }
  &.secondaryStyle {
    .v-breadcrumbs-divider {
      //padding: 0 3px;
      color: $disabled-opacity;
      font-size: 26px;
    }
  }
}
</style>
