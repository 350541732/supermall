<template>
<div>  
  <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  <home-swiper :banner="banner"></home-swiper>
  </div>

</template>
<script>
import NavBar from 'components/common/navbar/NavBar';
import HomeSwiper from './childComps/HomeSwiper'

import {getHomeMultidata} from 'network/home';

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper
  },
  data() {
    return {
      banner: [],
      recommend: []
    }
  },
  created() {
    //1.请求多个数据
    getHomeMultidata().then(res => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    })
  }
}
</script>
<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>