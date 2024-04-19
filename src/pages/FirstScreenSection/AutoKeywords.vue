<template>
  <div class="keywordsSection">
    <div class="tagsList">
      <Chip v-for="(keyword, i) in keywords" :key="i">
        {{ keyword }}
      </Chip>
    </div>
    <p class="postDate opacityText">{{ 'Опубликовано ' + postDate }}</p>
  </div>
</template>

<script>
import Chip from '@/components/common/Chip.vue'

export default {
  components: { Chip },
  props: ['keywords', 'postDate']
}
</script>

<style scoped lang="scss">
.keywordsSection {
  .tagsList {
    display: flex;
    flex-wrap: wrap;
    .chip {
      margin-right: 12px;
      margin-bottom: 12px;
    }
  }
  .postDate {
    font-size: 18px;
  }
}
</style>
