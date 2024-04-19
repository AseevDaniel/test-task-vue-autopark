<template>
  <div class="priceSection">
    <Tabs
      :tabs="
        priceList.map(({ value, currency, cyrrencySymbol, creditValue }) => {
          return {
            title: currency,
            // content: ,
            htmlContent: `
              <h1>${getFormattedPrice(value, currency)}</h1>
              <span>${getCreditText(creditValue, cyrrencySymbol)}</span>
              <p>${creditInfoText}</p>
            `
          }
        })
      "
    />
  </div>
</template>

<script>
import Tabs from '@/components/common/Tabs.vue'
import { getCreditText, getFormattedPrice } from '@/services/currency.js'
import { creditInfoText } from '@/constants/textContent.js'

export default {
  methods: {
    getCreditText,
    getFormattedPrice
  },
  components: { Tabs },
  props: ['priceList'],
  data() {
    return {
      creditInfoText
    }
  }
}
</script>

<!--<style scoped lang="scss">-->
<!--.priceSection {-->
<!--  padding-bottom: 10px;-->
<!--  border-bottom: 1px solid $disabled-opacity;-->
<!--}-->
<!--</style>-->
