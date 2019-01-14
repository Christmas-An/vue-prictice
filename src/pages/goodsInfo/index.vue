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

          </p>
        </div>
			</div>
		</div>
    <!-- 商品参数 -->
    <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
				</div>
			</div>
		</div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
  
</style>