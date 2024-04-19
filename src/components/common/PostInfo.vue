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
import { getDatesDifference } from '@/services/date.js'

export default {
  components: { IconPhone, IconBookmark, IconUser },
  props: ['postInfo'],
  computed: {
    datePostWord() {
      const { differenceInDays } = getDatesDifference(this.postInfo.postDate)

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
