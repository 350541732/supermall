<template>
    <swiper>
    <swiper-item v-for="(item, index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  name: 'HomeSwiper',
  components: {
    SwiperItem,
    Swiper
  },
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>
<style scoped>

</style>