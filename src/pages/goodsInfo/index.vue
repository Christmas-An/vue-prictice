<template>
  <div class="goodsInfoContainer">
    <!-- 商品图片 -->
    <div class="mui-card">
				<div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-swipe :auto="4000">
              <mt-swipe-item>1</mt-swipe-item>
              <mt-swipe-item>2</mt-swipe-item>
              <mt-swipe-item>3</mt-swipe-item>
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
            市场价: <del>￥2499</del> &nbsp;&nbsp;销售价: <span>￥2195</span>
          </p>
          <p class="numBox">
            购买数量: 
            <input type="text" v-model="buyCount">
            <input type="button" :disabled="buyCount <= 1" @click="buyCount > 1 && buyCount--" value="-" class="reduce">
            <input type="button" @click=" buyCount++" value="+" class="increase">
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
          <p>商品货号：SD9102356032</p>
          <p>库存情况：60件</p>
          <p>上架时间：2015-04-20 00:51:03</p>
				</div>
			</div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain >图文介绍</mt-button>
        <mt-button type="danger" size="large" plain >商品评论</mt-button>
      </div>
		</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      buyCount:1,
    }
  },
  
}
</script>

<style lang="less" scoped>
  .goodsInfoContainer {
    // 轮播图
    .mint-swipe {
      height: 200px;
      .mint-swipe-item {
        height: 100%;
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