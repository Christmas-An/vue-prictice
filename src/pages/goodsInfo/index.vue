<template>
  <div class="goodsInfoContainer">
    <!-- 商品图片 -->
    <div class="mui-card">
				<div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-swipe :auto="4000" >
              <mt-swipe-item v-for="(item, i) in lunboList" :key="i">
                <img :src="item.src" alt="">
              </mt-swipe-item>
            </mt-swipe>
          </div>
        </div>
		</div>
    <!-- 商品名称 -->
    <div class="mui-card">
			<div class="mui-card-header">商品名称</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
          <p class="price">
            市场价: 
            <del>￥{{ goodsList.market_price }}</del> &nbsp;&nbsp;销售价: 
            <span>￥{{ goodsList.sell_price }}</span>
          </p>
          <p class="numBox">
            购买数量: 
            <input type="text" v-model="buyCount">
            <input type="button" :disabled="buyCount <= 1" @click="buyCount > 1 && buyCount--" value="-" class="reduce">
            <input type="button" :disabled="buyCount >= goodsList.stock_quantity" 
            @click="buyCount <= goodsList.stock_quantity && buyCount++" value="+" class="increase">
          </p>
          <p>
            <button class="mint-button mint-button--primary mint-button--small">立即购买</button>
            <button class="mint-button mint-button--danger mint-button--small">加入购物车</button>
          </p>
        </div>
			</div>
		</div>
    <!-- 商品参数 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
          <p>商品货号：{{ goodsList.goods_no }}</p>
          <p>库存情况：{{ goodsList.stock_quantity }}件</p>
          <p>上架时间：{{ goodsList.add_time | dataFormat }}</p>
				</div>
			</div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
		</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      id:this.$route.params.id,
      buyCount:1,
      lunboList:[],
      goodsList:[],
    }
  },
  created(){
    this.getLunbo()
    this.getGoodsInfo()
  },
  methods:{
    // 获取轮播图
    getLunbo(){
      this.$http.get("api/getthumimages/" + this.id).then( result => {
        // console.log(result.body)
        if(result.body.status == 0){
          this.lunboList = result.body.message
        }
      })
    },
    // 获取商品详情
    getGoodsInfo(){
      this.$http.get("api/goods/getinfo/" + this.id).then( result => {
        // console.log(result.body)
        if(result.body.status == 0){
          this.goodsList = result.body.message[0]
        }
      })
    },
    // 评论页
    goComment(id){
      this.$router.push({ name:'goodsComment', params: { id } })
    },
    // 商品详情
    goDesc(id){
      this.$router.push({ name:'goodsDesc', params:{ id } })
    }
  }
}
</script>

<style lang="less" scoped>
  .goodsInfoContainer {
    // 轮播图
    .mint-swipe {
      height: 200px;
      .mint-swipe-item {
        height: 100%;
        img {
          width: 340px;
          height: 200px;
        }
      }
    }
    // 价格
    .price {
      span {
        color: red;
        font-size: 16px;
        font-weight: 700
      }
    }
    // 购买数量
    .numBox {
      height: 35px;
      input[type="text"] {
        position: relative;
        text-align: center;
        width: 130px;
        height: 100%;
      }
      input[type="button"] {
        position: absolute;
        width: 40px;
        height: 35px;
      }
      .reduce {
        left: 79px;
      }
      .increase {
        right: 105px;
      }
    }
    // 介绍和评论按钮
    .mui-card-footer {
      display: block;
      button {
        margin: 15px 0;
      }
    }
  }
</style>