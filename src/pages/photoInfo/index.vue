<template>
  <div class="photoInfoContainer">
    <h3>{{ photoinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoinfo.add_time | dataFormat }}</span>
      <span>点击：{{ photoinfo.click }}次</span>
    </p>

    <hr>

    <!-- 缩略图 -->
    <div class="thumbs">
      <img 
       class="preview-img"
       height="100px"
       v-for="(item,i) in list"
       :key="i"
       @click="$preview.open(i, list)"
       :src="item.src">
    </div>

    <!-- 内容 -->
    <div class="content" v-html="photoinfo.content"></div>

    <!-- 评论 -->
    <comment :id="id"></comment>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id:this.$route.params.id, 
      photoinfo: {}, // 图片详情
      list: [] // 缩略图数组
    }
  },
  created(){
    this.getPhotoInfo()
    this.getThumbs()
  },
  methods: {
    getPhotoInfo(){
      this.$http.get('api/getimageInfo/' + this.id).then(result => {
        // console.log(result.body)
        if(result.body.status === 0){
          this.photoinfo = result.body.message[0]
        }
      })
    },
    getThumbs(){
      this.$http.get('api/getthumimages/' + this.id).then(result => {
        // console.log(result.body)
        if(result.body.status === 0){
          // 循环每个图片数据，补全图片的宽和高
           result.body.message.forEach(item => {
            item.w = 600;
            item.h = 400;
          });
          // 把完整的数据保存到 list 中
          this.list = result.body.message;
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .photoInfoContainer {
    h3 {
      font-size: 16px;
      color: #26a2ff;
      text-align: center;
      margin: 15px 0;
    }
    .subtitle {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
    }
    .content {
      font-size: 13px;
      line-height: 30px;
    }
    .thumbs {
      img {
        margin: 10px;
        box-shadow: 0 0 8px #999;
      }
  }
  }
</style>