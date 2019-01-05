<template>
  <div class="userInfoContainer">
    <h3 class="title">{{ newsInfo.title }}</h3>
    
    <p class="subtitle">
      <span>发表时间：{{ newsInfo.add_time | dataFormat }}</span>
      <span>点击：{{ newsInfo.click }}次</span>
    </p>

    <hr>

    <div class="content" v-html="newsInfo.content"></div>

    <comment :id="this.id"></comment>

  </div>
</template>

<script>
import { Toast } from "mint-ui"
export default {
  data(){
    return {
      id: this.$route.params.id, // 将 URL 地址中传递过来的 Id值，挂载到 data上，方便以后调用
      newsInfo: {} // 新闻对象
    }
  },
  created(){
    this.getNewsInfo()
  },
  methods: {
    getNewsInfo(){
      this.$http.get('api/getnew/' + this.id).then(result => {
        // console.log(result.body)
        if(result.body.status === 0){
          this.newsInfo = result.body.message[0]
        }else {
          Toast('获取数据失败')
        }
      })
    }
  }
}
</script>

<style lang="less">
  .userInfoContainer {
    padding: 0 4px;
    .title {
      color: red;
      font-size: 16px;
      text-align: center;
      margin: 15px 0;
    }
    .subtitle {
      color: #226aff;
      font-size: 13px;
      display: flex;
      justify-content: space-between;
    }
  }
</style>