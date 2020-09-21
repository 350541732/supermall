<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <!--    <scroll class="content">-->
<!--      <home-swiper :banner="banner"></home-swiper>-->
<!--      <recommend-view :recommends="recommends"></recommend-view>-->
<!--      <feature-view></feature-view>-->
<!--      <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>-->
<!--      <goods-list :goods="showGoods"></goods-list>-->
<!--    </scroll>-->
    <scroll class="home-scroll" ref="scroller" :probeType="3" @scroll="getPosition">
            <home-swiper :banner="banner"></home-swiper>
            <recommend-view :recommends="recommends"></recommend-view>
            <feature-view></feature-view>
            <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
            <goods-list :goods="showGoods"></goods-list>
    </scroll>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import { getHomeMultidata, getHomeGoods } from "network/home";

import Scroll from "components/common/scroll/Scroll"

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll
  },
  data() {
    return {
      banner: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
    };
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /**
     * 事件监听相关
     */
    tabClick(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    /**
     * 网络请求相关
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banner = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  }
};
</script>
<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
}

.home-nav {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}

.content {
  /*height: calc(100%);*/
  overflow: hidden;
  height: 300px;
}
</style>
