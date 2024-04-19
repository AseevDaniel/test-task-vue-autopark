<template>
  <ul class="mainMenu">
    <li
      v-for="item in menuItems"
      :key="item.route"
      :class="[currentRouteName === item.route && 'active', 'menuItem']"
    >
      <a :href="'/' + item.route">{{ item.title }}</a>
    </li>
  </ul>
</template>

<style scoped lang="scss"></style>

<script>
export default {
  data() {
    return {
      currentRouteName: 'buy', // for test becouse without router
      menuItems: [
        {
          title: 'Купить',
          route: 'buy'
        },
        {
          title: 'Продать',
          route: 'sell'
        },
        {
          title: 'Услуги',
          route: 'services.js'
        },
        {
          title: 'Блог',
          route: 'blog'
        },
        {
          title: 'Вакансии',
          route: 'vacancies'
        },
        {
          title: 'Контакты',
          route: 'contacts'
        }
      ]
    }
  }
  // computed: {
  //   currentRouteName() {
  //     return this.$route.name;
  //   }
  // }
}
</script>

<style scoped lang="scss">
.mainMenu {
  display: flex;
  align-items: center;
  .menuItem {
    &:not(:last-child) {
      margin-right: 16px;
    }
    a {
      transition: $transitionDefaultTime;
    }
    &.active,
    &:hover {
      a {
        color: $mainColor;
      }
    }
  }
}
</style>
