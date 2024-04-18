<template>
  <div class="postInfo">
    <span class="postDateWord">{{ datePostWord }}</span>
    <span class="postDate">{{ postInfo.postDate }}</span>

    <ul class="statistics">
      <li class="statisticsItem">
        <IconUser />
        {{ postInfo.views }}
      </li>
      <li class="statisticsItem">
        <IconBookmark />
        {{ postInfo.saved }}
      </li>
      <li class="statisticsItem">
        <IconPhone />
        {{ postInfo.phoneCheck }}
      </li>
      <li class="statisticsItem">
        <span>VIN-код: </span>
        {{ postInfo.vinCheck }}
      </li>
    </ul>
  </div>
</template>

<script>
import IconUser from '@/components/icons/IconUser.vue'
import IconBookmark from '@/components/icons/IconBookmark.vue'
import IconPhone from '@/components/icons/IconPhone.vue'

export default {
  components: { IconPhone, IconBookmark, IconUser },
  props: ['postInfo'],
  computed: {
    datePostWord() {
      const formattedDate = this.postInfo.postDate.split('.').reverse().join('-')
      const postDate = new Date(formattedDate)
      const todayDate = new Date()

      const differenceInMs = todayDate - postDate
      const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24))

      console.log(differenceInDays)

      if (differenceInDays == 0) {
        return 'Сегодня'
      }

      if (differenceInDays == 1) {
        return 'Вчера'
      }

      return 'Ранее'
    }
  }
}
</script>

<style scoped lang="scss">
.postInfo {
  display: flex;
  align-items: center;
  .postDateWord {
    font-weight: bold;
    margin-right: 12px;
  }
  .postDate {
    color: $disabled;
    max-resolution: 12px;
  }
  .statistics {
    display: flex;
    align-items: center;
    .statisticsItem {
      display: flex;
      align-items: center;
      color: $mainColor;
      padding: 0 8px;
      font-size: 16px;
      svg {
        margin-right: 3px;
      }
      span {
        margin-right: 3px;
      }
      &:not(:last-child) {
        border-right: 2px solid $disabled-opacity;
      }
    }
  }
}
</style>
