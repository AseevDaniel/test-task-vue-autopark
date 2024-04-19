<template>
  <div class="autoMainInfo">
    <div class="titleSection">
      {{ title }}
      <div class="actions">
        <IconShare class="clickableItem" />
        <IconBookmark class="clickableItem" />
      </div>
    </div>
    <div class="idSection">
      <span class="autoId opacityText">Код товара: {{ autoInfo.id }}</span>
      <span class="location">{{ autoInfo.location }}</span>
    </div>
    <AutoPriceSection :priceList="autoInfo.priceList" />
    <AutoKeywords :keywords="autoInfo.keywords" :post-date="autoInfo.postInfo.postDate" />
    <div class="connectSection">
      <Button thin>
        <IconPhone color="white" />
        Показать телефон
      </Button>
    </div>
    <!--    <AutoServices />-->
    <ServicesList
      class="servicesSection"
      list-title="Заказать услугу"
      :services="availableAutoServices"
    />
    <ServicesList
      class="servicesSection"
      list-title="Заказать проверку"
      :services="availableCheckServices"
    >
      <Button thin>Полная проверка авто</Button>
    </ServicesList>
    <div class="checkSection"></div>
  </div>
</template>

<script>
import IconShare from '@/components/icons/IconShare.vue'
import IconBookmark from '@/components/icons/IconBookmark.vue'
import AutoPriceSection from '@/pages/components/AutoPriceSection.vue'
import AutoKeywords from '@/pages/components/AutoKeywords.vue'
import Button from '@/components/common/Button.vue'
import IconPhone from '@/components/icons/IconPhone.vue'
import ServicesList from '@/components/common/ServicesList.vue'
import { availableAutoServices, availableCheckServices } from '@/constants/services.js'
import { shallowRef } from 'vue'
export default {
  components: {
    ServicesList,
    IconPhone,
    Button,
    AutoKeywords,
    AutoPriceSection,
    IconShare,
    IconBookmark
  },
  props: ['autoInfo'],
  computed: {
    title() {
      const { brand, model, year } = this.autoInfo
      return `${brand} ${model} ${year}`
    }
  },
  data() {
    return {
      availableAutoServices: shallowRef(availableAutoServices),
      availableCheckServices: shallowRef(availableCheckServices)
    }
  }
}
</script>

<style scoped lang="scss">
.autoMainInfo {
  width: 380px;
  .titleSection {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    .actions {
      svg {
        &:not(:last-child) {
          margin-right: 4px;
        }
      }
    }
  }
  .idSection {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
    span {
      font-size: 18px;
      &.autoId {
        color: $colorThemeDark;
      }
      &.location {
        color: black;
      }
    }
  }
  .priceSection {
    margin-top: 16px;
    @include sections-divider;
  }
  .keywordsSection {
    margin-top: 12px;
    @include sections-divider;
  }
  .connectSection {
    margin-top: 20px;
    @include sections-divider;
    padding-bottom: 20px;
    svg {
      margin-right: 4px;
    }
  }
  .servicesSection {
    margin-top: 16px;
    @include sections-divider;
    padding-bottom: 20px;
    .button {
      margin-top: 12px;
    }
  }
}
</style>
