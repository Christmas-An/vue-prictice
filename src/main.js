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


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
