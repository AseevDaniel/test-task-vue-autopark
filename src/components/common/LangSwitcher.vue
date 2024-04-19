<template>
  <div class="langSwitcher">
    <span
      v-for="(lang, i) in langOptions"
      :key="i"
      @click="currentLang = lang.title"
      :class="currentLang === lang.title && 'active'"
    >
      <Component v-if="lang.icon" :is="lang.icon" />
      {{ lang.title }}
    </span>
  </div>
</template>

<script>
import { markRaw } from 'vue'
import IconUkraine from '@/components/icons/IconUkraine.vue'

const langOptions = [
  {
    title: 'RU'
  },
  {
    title: 'UA',
    icon: markRaw(IconUkraine)
  }
]

export default {
  data() {
    return {
      langOptions,
      currentLang: langOptions[0].title
    }
  }
}
</script>

<style scoped lang="scss">
.langSwitcher {
  margin: 0 20px;
  display: flex;
  align-items: center;
  font-size: 16px;
  height: 40px;
  span {
    padding: 0 10px;
    display: flex;
    align-items: center;
    color: $disabled;
    cursor: pointer;
    svg {
      margin-right: 4px;
    }
    &:not(:last-child) {
      border-right: 2px solid $disabled;
    }
    &.active {
      color: $colorThemeDark;
    }
  }
}
</style>
