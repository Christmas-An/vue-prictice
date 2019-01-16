<template>
  <div class="goodsInfoContainer">

    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>

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
            <input type="button" :disabled="buyCount <= 1" @click="buyCount > 1 && buyCount--" value="-" class="reduce">
            <input type="text" v-model="buyCount">
            <input type="button" :disabled="buyCount >= goodsList.stock_quantity" 
            @click="buyCount <= goodsList.stock_quantity && buyCount++" value="+" class="increase">
          </p>
          <p>
            <button class="mint-button mint-button--primary mint-button--small">立即购买</button>
            <button class="mint-button mint-button--danger mint-button--small" @click="addToShopCar">加入购物车</button>
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
      ballFlag: false
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
    },
    // 添加到购物车
    addToShopCar(){
      this.ballFlag = !this.ballFlag
    },
    beforeEnter(el) {
      el.style.transform = "translate(0, 0)";
    },
    enter(el,done){
      el.offsetHeight;

      // 获取小球的 在页面中的位置
      const ballPlace = this.$refs.ball.getBoundingClientRect();
      // 获取 徽标 在页面中的位置
      const badgePlace = document
        .getElementById("badge")
        .getBoundingClientRect();

      const x = badgePlace.left - ballPlace.left;
      const y = badgePlace.top - ballPlace.top;

      el.style.transform = `translate(${x}px, ${y}px)`;
      el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
      done();
    },
    afterEnter(el){
      this.ballFlag = !this.ballFlag
    }
  }
}
</script>

<style lang="less" scoped>
  .goodsInfoContainer {
    background-color: #eee;
    overflow: hidden;
    // 小球
    .ball {
      position: absolute;
      width: 15px;
      height: 15px;
      background-color: red;
      border-radius: 50%;
      z-index: 999;
      top: 390px;
      left: 157px;
    }
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
        text-align: center;
        width: 65px;
        height: 100%;
      }
      input[type="button"] {
        width: 40px;
        height: 100%;
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