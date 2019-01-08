<template>
  <div class="homeContainer">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="( item, index ) in lunboList" :key="index">
        <img :src="item.img" alt>
      </mt-swipe-item>
    </mt-swipe>

    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newsList">
          <img src="../../assets/menu1.png" alt>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photoList">
          <img src="../../assets/menu2.png" alt>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodsList">
          <img src="../../assets/menu3.png" alt>
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/menu4.png" alt>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/menu5.png" alt>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/menu6.png" alt>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lunboList: []
    };
  },
  created() {
    this.getLunbo();
  },
  methods: {
    getLunbo() {
      this.$http.get("api/getlunbo").then(result => {
        // console.log(result.body)
        if (result.body.status === 0) {
          this.lunboList = result.body.message;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.homeContainer {
  // 轮播图
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
  // 九宫格
  .mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;
    .mui-table-view-cell {
      border: 0;
      img {
        width: 60px;
        height: 60px;
      }
    }
    .mui-media-body {
      font-size: 13px;
    }
  }
}
</style>
