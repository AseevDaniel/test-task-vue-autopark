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
        <AutoMainCharacteristics :characteristics="autoData.vehicleSpecifications" />
      </div>
      <AutoMainInfo :auto-info="autoData" />
    </div>
  </section>
  <SectionsDivider />
</template>

<script>
import autoData from '@/data/autoData.json'
import Slider from '@/components/common/Slider.vue'
import Breadcrumbs from '@/components/common/Breadcrumbs.vue'
import PostInfo from '@/components/common/PostInfo.vue'
import AutoMainInfo from '@/pages/FirstScreenSection/AutoMainInfo.vue'
import AutoMainCharacteristics from '@/pages/FirstScreenSection/AutoMainCharacteristics.vue'
import SectionsDivider from '@/components/common/SectionsDivider.vue'

export default {
  components: {
    SectionsDivider,
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
  padding-bottom: 40px;
  .mainInfo {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .autoResume {
      .autoMainCharacteristics {
        margin-top: 20px;
      }
    }
  }
}
</style>
