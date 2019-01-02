<template>
  <div>
    <mt-swipe :auto="4000" >
      <mt-swipe-item v-for="item in lunboList" :key="item.url">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data(){
    return {
      lunboList:[]
    }
  },
  created(){
    this.getLunbo()
  },
  methods:{
    getLunbo () {
      this.$http.get('http://www.lovegf.cn:8899/api/getlunbo').then(result => {
        // console.log(result.body)
        if(result.body.status === 0) {
          this.lunboList = result.body.message
        }
      })
    }
  }
};
</script>

<style lang="less">
  .mint-swipe {
    height: 200px;
    .mint-swipe-item {
      height: 200px;
      &:nth-child(1) {
        background-color: yellow;
      }
      &:nth-child(2) {
        background-color: skyblue;
      }
      &:nth-child(3) {
        background-color: pink;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
