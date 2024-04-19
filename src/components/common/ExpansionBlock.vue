<template>
  <div class="expansionBlock">
    <slot />
    <div :class="[isExpand && 'expandedContent', 'expansionContent']">
      <p>{{ content }}</p>
    </div>
    <div @click="isExpand = !isExpand" class="expandToggler clickableItem">
      {{ isExpand ? 'Скрыть' : 'Показать больше' }}
      <IconArrowDown :class="[isExpand && 'active', 'arrowIcon']" />
    </div>
  </div>
</template>

<script>
import IconArrowDown from '@/components/icons/IconArrowDown.vue'

export default {
  components: { IconArrowDown },
  props: ['content'],
  data() {
    return {
      isExpand: false
    }
  }
}
</script>

<style scoped lang="scss">
.expansionBlock {
  .expansionContent {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -moz-box;
    -moz-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-clamp: 2;
    box-orient: vertical;
    &.expandedContent {
      //overflow: initial;
      line-clamp: initial;
      -webkit-line-clamp: initial;
    }
  }
  .expandToggler {
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    .arrowIcon {
      margin-left: 4px;
      &.active {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
