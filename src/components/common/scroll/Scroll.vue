<template>
<!--  ref/chiildren  绑定到组件v -->
<div class="wrapper" ref="wrapper">
  <div class="content">
    <slot>
    </slot>
  </div>
</div>
</template>

<script>

import BScroll from 'better-scroll';

export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  name: "scroll",
  data() {
    return {
      scroll: null,
    }
  },
  methods: {
    scrollToElement(el, time = 500) {
      this.scroll.scrollToElement(el, time);
    },
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y , time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll.refresh();
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });

    //监听滚动
    if (this.probeType != 0) {
      this.scroll.on("scroll", pos => {
        this.$emit("scrollEvent", pos);
      });
    }

    //监听上拉
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUpEvent");
      });
    }
  }
};
</script>

<style scoped>

</style>
