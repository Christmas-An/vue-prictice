<template>
  <div class="cmtContainter">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120" v-model="msg"></textarea>

    <hr>
    
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in comments" :key="i">
        <div class="cmt-title">
          第{{ i+1 }}楼&nbsp;&nbsp;用户: {{ item.user_name }}&nbsp;&nbsp;发表时间: {{ item.add_item | dataFormat }}
        </div>
        <div class="cmt-body">
          {{ item.content = '' ? "此用户很懒什么都没留下" : item.content }}
        </div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getMore" >加载更多</mt-button>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'

export default {
  data(){
    return {
      pageIndex: 1,
      comments: [],
      msg: ""
    }
  },
  created(){
    this.getComments()
  },
  methods: {
    getComments(){
      this.$http.get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex).then(result => {
        // console.log(result.body)
        if(result.body.status === 0){
          this.comments = this.comments.concat(result.body.message)
        }else{
          Toast('加载评论失败')
        }
      })
    },
    getMore(){
      this.pageIndex++
      this.getComments()
    },
    postComment(){
      if(this.msg.trim().length == 0) return Toast('评论不能为空')
      this.$http.post('api/postcomment/' + this.$route.params.id,{ content: this.msg.trim() }).then(result => {
        // console.log(result.body)
        if(result.body.status === 0) {
          this.comments = []
          this.pageIndex = 1
          this.getComments()
          this.msg = ''
        }
      })
    }
  },
  props: ["id"]
}
</script>

<style lang="less">
  .cmtContainter {
    h3 {
      font-size: 18px;
    }
    textarea {
      font-size: 14px;
      height: 85px;
      margin: 0;
    }
    .cmt-list {
      margin: 5px;
      .cmt-item {
        font-size: 13px;
        .cmt-title {
          line-height: 30px;
          background-color: #ccc;
        }
        .cmt-body {
          line-height: 35px;
          text-indent: 2em;
        }
      }
    }
  }
</style>
