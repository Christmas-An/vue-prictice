<template>
  <div class="shopCarContainer">
      <!-- 商品列表 -->
      <div class="goodsList">
        <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch :v-model="true"></mt-switch>
            <img src="http://www.lovegf.cn:8899/xm1.jpg" alt="">
            <div class="info">
              <h3>华为（HUAWEI）荣耀6Plus 16G双4G版</h3>
              <div>
                <span class="price">￥2195</span> 
                <div class="numbox">
                  <input type="button" value="-">
                  <input type="text" value="1">
                  <input type="button" value="+">
                </div>
                <a href="javascript:;">删除</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <!-- 结算 -->
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
						<div class="left">
              <p>总计（不含运费）</p>
              <p>
                已勾选商品 <span class="red">2</span>
                 件， 总价 <span class="red">￥4390</span>
              </p>
            </div>
            <mt-button type="danger" size="small">结算</mt-button>
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
  .shopCarContainer {
     background-color: #eee;
     // 商品详情
    .goodsList {
       .mui-card-content-inner {
        display: flex;
        align-items: center;
      }
      img {
        width: 60px;
      }
      h3 {
        font-size: 13px;
      }
      .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .price {
          color: red;
          font-weight: 700;
        }
        .numbox {
          display: inline-block;
          height: 35px;
          input[type="text"] {
            width: 65px;
            height: 100%;
            text-align: center;
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }
          input[type="button"] {
            width: 40px;
            height: 100%;
          }
        }
      }
    }
    // 结算
    .jiesuan {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .red {
        color: red;
        font-weight: bold;
        font-size: 16px;
      }
    }
  }
</style>