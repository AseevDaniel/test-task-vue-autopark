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

  <section class="container detailedContainer">
    <AutoDescription
      class="descriptionBlock"
      :description="autoData.description"
      :registrationNumber="autoData.registrationNumber"
    />
  </section>

  <section class="container detailedContainer">
    <AutoCharacteristics
      :vehicle-specifications="autoData.vehicleSpecifications"
      :vin="autoData.vin"
    />
  </section>

  <section class="container detailedContainer">
    <h2>Дополнительные опции</h2>
    <FeaturesList
      class="featuesBlock"
      single-column
      :items="autoData.additionalOptions.map((item) => item.text)"
      :tags="autoData.additionalOptions.map((item) => item.tag)"
    />
  </section>

  <section
    v-for="(feature, i) in autoData.allFeatures"
    :key="i"
    class="container detailedContainer"
  >
    <h2>{{ feature.title }}</h2>
    <FeaturesList class="featuesBlock" :items="feature.items" />
  </section>
</template>

<script>
import autoData from '@/data/autoData.json'
import Slider from '@/components/common/Slider.vue'
import Breadcrumbs from '@/components/common/Breadcrumbs.vue'
import PostInfo from '@/components/common/PostInfo.vue'
import AutoMainInfo from '@/pages/FirstScreenSection/AutoMainInfo.vue'
import AutoMainCharacteristics from '@/pages/FirstScreenSection/AutoMainCharacteristics.vue'
import SectionsDivider from '@/components/common/SectionsDivider.vue'
import AutoDescription from '@/pages/DetailedInfoSection/AutoDescription.vue'
import FeaturesList from '@/components/common/FeaturesList.vue'
import AutoCharacteristics from '@/pages/DetailedInfoSection/AutoCharacteristics.vue'

export default {
  components: {
    AutoCharacteristics,
    FeaturesList,
    AutoDescription,
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

.featuesBlock {
  width: 80%;
  margin-top: 20px;
}
</style>
