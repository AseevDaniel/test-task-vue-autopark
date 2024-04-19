<template>
  <div class="preHeader">
    <ul class="socialLinks">
      <li class="socialItem clickableItem" v-for="({ link, icon }, i) in links" :key="i">
        <a class="socialItemLink" :href="link" target="_blank">
          <Component :is="icon" />
        </a>
      </li>
    </ul>
    <div class="otherActions">
      <ContactPhone />
      <LangSwitcher />
      <IconBookmark
        @click="isSaved = !isSaved"
        :class="[isSaved ? 'active' : '', 'bookmark', 'clickableItem']"
      />
    </div>
  </div>
</template>

<script>
import IconInstagram from '@/components/icons/IconInstagram.vue'
import IconTelegram from '@/components/icons/IconTelegram.vue'
import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconViber from '@/components/icons/IconViber.vue'
import IconYoutube from '@/components/icons/IconYoutube.vue'
import IconTiktok from '@/components/icons/IconTiktok.vue'
import IconBookmark from '@/components/icons/IconBookmark.vue'
import IconPhone from '@/components/icons/IconPhone.vue'
import { markRaw } from 'vue'
import LangSwitcher from '@/components/common/LangSwitcher.vue'
import ContactPhone from '@/components/common/ContactPhone.vue'

export default {
  components: {
    ContactPhone,
    LangSwitcher,
    IconBookmark,
    IconPhone
  },
  data() {
    return {
      isSaved: false,
      links: [
        {
          link: 'https://google.com',
          icon: markRaw(IconInstagram)
        },
        {
          link: 'https://web.telegram.org/',
          icon: markRaw(IconTelegram)
        },
        {
          link: 'https://www.facebook.com/',
          icon: markRaw(IconFacebook)
        },
        {
          link: 'https://account.viber.com/',
          icon: markRaw(IconViber)
        },
        {
          link: 'https://www.youtube.com/',
          icon: markRaw(IconYoutube)
        },
        {
          link: 'https://www.tiktok.com/',
          icon: markRaw(IconTiktok)
        }
      ]
    }
  },
  props: ['images']
}
</script>

<style scoped lang="scss">
.preHeader {
  margin-top: 34px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .socialLinks {
    display: flex;
    align-items: center;
    .socialItem {
      margin-right: 20px;
      a {
        display: flex;
        align-items: center;
      }
    }
  }
  .otherActions {
    display: flex;
    align-items: center;
    .bookmark {
      height: 40px;
      width: auto;
      &.active {
        fill: $colorThemeDark;
      }
    }
  }
}
</style>
