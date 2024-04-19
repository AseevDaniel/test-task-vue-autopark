<template>
  <v-tabs class="tabsList" v-model="tab">
    <span class="tabsTitle"> Цена </span>
    <v-tab v-for="(item, i) in tabs" :key="i" :value="i">{{ item.title }}</v-tab>
  </v-tabs>

  <v-card-text class="tabsContent">
    <v-window v-model="tab">
      <v-window-item v-for="(item, i) in tabs" :key="i" :value="i">
        <p class="tabContent" v-html="item.htmlContent" />
        <!--        <p>{{ item.content }}</p>-->
      </v-window-item>
    </v-window>
  </v-card-text>
</template>

<script>
export default {
  props: ['tabsTitle', 'tabs'],
  data() {
    return {
      tab: null
    }
  }
}
</script>

<style lang="scss">
.tabsList {
  font-size: 16px;

  &.v-tabs {
    height: min-content;
  }

  .tabsTitle {
    font-weight: bold;
  }

  .v-slide-group__content {
    display: flex;
    align-items: center;
    height: max-content;
  }

  .v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-text.v-tab {
    height: min-content;
    min-width: auto;
    padding: 0;
    margin-left: 12px;
    .v-btn__content {
      .v-tab__slider {
        background: $mainColor;
        height: 1px;
      }
    }
    &.v-slide-group-item--active.v-tab--selected {
      .v-btn__content {
        color: $mainColor;
      }
    }
  }
}
.tabsContent {
  &.v-card-text {
    padding: 12px 0;
  }
  .tabContent {
    h1 {
      font-size: 24px;
    }
    span {
      display: block;
      margin-top: 12px;
      font-size: 18px;
    }
    p {
      margin-top: 12px;
      font-size: 14px;
      opacity: 0.6;
    }
  }
}
</style>
