import Vue from 'vue'
import Router from 'vue-router'
import homeContainer from "../pages/home"
import vipContainer from "../pages/vip"
import shopcarContainer from "../pages/shopcar"
import searchContainer from "../pages/search"

Vue.use(Router)

export default new Router({
  routes: [
    { path:"/", redirect:"/home" },
    { path:"/home",component:homeContainer },
    { path:"/vip",component:vipContainer },
    { path:"/shopcar",component:shopcarContainer },
    { path:"/search",component:searchContainer }
  ],
  linkActiveClass:"mui-active"
})
