<template>
  <div class="wrapper">
    <ul class="content">
      <button @click="btnClick">按钮</button>
      <li v-for="(item, i) in [1,2,3,4,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,,4,6,5,5,5,5,5,5,5,5,5,5,5,5]">{{ 'item -----'  +  item}}</li>
    </ul>
  </div>

</template>
<script>
import BScroll from 'better-scroll'

export default {
  name: 'Category',
  data() {
    return {
      scroll: null,
    }
  },
  mounted() {
    this.scroll = new BScroll(document.querySelector('.wrapper'), {
      probeType: 3,
      pullUpLoad: true,
    })
    this.scroll.on('scroll',(position) => {
      console.log(position);
    })

    this.scroll.on('pullUpLoad',)
  },
  methods: {
    btnClick() {
        console.log('btnClick');
    }
  }
}
</script>
<style scoped>
.wrapper {
  height:150px;
  background-color:red;
  overflow: hidden;
}
</style>
