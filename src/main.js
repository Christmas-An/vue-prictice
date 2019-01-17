import Vue from 'vue'
import App from './App'
import router from './router'
// 导入resource
import resource from 'vue-resource'

Vue.config.productionTip = false

//导入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 导入MUI
import "./lib/mui/css/mui.css"
import "./lib/mui/css/icons-extra.css"

// 使用mint-ui
Vue.use(MintUI)
// 使用resource
Vue.use(resource)

// 配置根域名
Vue.http.options.root = 'http://www.lovegf.cn:8899/'

// 配置默认的post提交数据类型为传统表单
Vue.http.options.emulateJSON = true

// 导入moment包
import moment from "moment"

Vue.filter('dataFormat',(content,pattern = "YYYY-MM-DD HH:mm:ss") => {
  return moment(content).format(pattern)
})

// 导入全局评论组件
import comment from "./components/common/comment"
Vue.component('comment',comment)

import VuePreview from 'vue2-preview'
Vue.use(VuePreview)

// 导入vuex
import Vuex from "vuex"

Vue.use(Vuex)

let store = new Vuex.Store({
  state:{
    car:JSON.parse(localStorage.getItem('car') || '[]')
  },
  mutations:{
    addToCar(state, goodsInfo){

      // 如果没找到
      let flag = false

      state.car.some(item => {
        if(item.id == goodsInfo.id){
          // 找到了
          item.count += goodsInfo.count
          return flag = true
        }
      })
      // 没找到则push
      if(!flag){
        state.car.push(goodsInfo)
      }

      localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  getters:{
    totalCount(state){
      let allCount = 0
      state.car.forEach(item => allCount += item.count)
      return allCount
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
