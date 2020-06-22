<template>
<div>  
  <h2>首页</h2>
  <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  </div>

</template>
<script>
import NavBar from 'components/common/navbar/NavBar';
import {getHomeMultidata} from 'network/home';
export default {
  name: 'Home',
  components: {
    NavBar
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
      this.banner = res.data.banner;
      this.recommend = res.data.recommend;
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