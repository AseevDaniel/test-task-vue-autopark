<script>
import autoData from '@/data/autoData.json'
import Slider from '@/components/common/Slider.vue'
import Breadcrumbs from '@/components/common/Breadcrumbs.vue'
import PostInfo from '@/components/common/PostInfo.vue'
import AutoMainInfo from '@/pages/components/AutoMainInfo.vue'
import AutoMainCharacteristics from '@/pages/components/AutoMainCharacteristics.vue'

export default {
  components: {
    AutoMainCharacteristics,
    AutoMainInfo,
    PostInfo,
    Breadcrumbs,
    Slider
  },
  data() {
    return {
      autoData,
      listOfRoutes: ['Главная', 'Купить', 'Автомобили Ford']
    }
  },
  computed: {
    breadcrumbsItems() {
      const { id, brand, model, year } = autoData
      const lastItem = `${brand} ${model} ${year} - Код товара: ${id}`

      return [...this.listOfRoutes, lastItem]
    }
  }
}
</script>

<template>
  <section class="container tagsBlock">
    <Breadcrumbs class="routesTags" :items="breadcrumbsItems" />
    <Breadcrumbs class="autoTags" :items="autoData.tags" secondary />
  </section>
  <section class="container infoBlock">
    <PostInfo :post-info="autoData.postInfo" />
    <div class="mainInfo">
      <div class="autoResume">
        <Slider :images="autoData.images" />
        <AutoMainCharacteristics />
      </div>
      <AutoMainInfo :auto-info="autoInfo" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.tagsBlock {
  margin-top: 40px;
  .routesTags {
  }
  .autoTags {
    margin-top: 20px;
  }
}

.infoBlock {
  margin-top: 38px;
  .mainInfo {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
}
</style>
