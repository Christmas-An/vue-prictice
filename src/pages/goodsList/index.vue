<template>
  <div class="goodsListContainer">
    <div class="goods" v-for="item in goodsList" :key="item.id" @tap="getDetail(item.id)">
      <img :src="item.img_url" alt="">
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </div>

    <mt-button v-if="hasMore" type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      pageindex: 1, // 分页数
      goodsList: [], // 存放商品数组
      hasMore: true
    }
  },
  created(){
    this.getGoodsList()
  },
  methods: {
    // 获取商品
    getGoodsList(){
      this.$http.get("api/getgoods?pageindex=" + this.pageindex).then(result => {
        // console.log(result.body)
        if(result.body.status === 0){
          this.goodsList = this.goodsList.concat(result.body.message)
          if(result.body.message.length == 0){
            this.hasMore = false
          }
        }
      })
    },

    //加载更多
    getMore(){
      this.pageindex++
      this.getGoodsList()
    },

    // 路由导航 router-link另一种方式
    getDetail(id){
      this.$router.push({ name: "goodsInfo",params: { id } })
    }
  }
}
</script>

<style lang="less" scoped>
  .goodsListContainer {
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;

    .goods {
      width: 49%;
      border: 1px solid #ccc;
      box-shadow: 0 0 8px #ccc;
      margin: 4px 0;
      padding: 2px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 293px;
      img {
        width: 100%;
      }
      .title {
        font-size: 13px;
      }
      .info {
        background-color: #eee;
        p {
          margin: 0;
          padding: 5px;
        }
        .price {
          .now {
            color: red;
            font-weight: bold;
            font-size: 16px;
          }
          .old {
            text-decoration: line-through;
            font-size: 12px;
            margin-left: 10px;
          }
        }
        .sell {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
        }
      }
    }
  }
</style>