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
          <p>
            购买数量: 
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
        <button class="mint-button mint-button--primary mint-button--large is-plain">图文介绍</button>
        <button class="mint-button mint-button--danger mint-button--large is-plain">商品评论</button>
      </div>
		</div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
  .goodsInfoContainer {
    .mint-swipe {
      height: 200px;
      .mint-swipe-item {
        height: 100%;
      }
    }
    .price {
      span {
        color: red;
        font-size: 16px;
        font-weight: 700
      }
    }
  }
</style>