import Vue from 'vue'
import Router from 'vue-router'
import homeContainer from "../pages/home"
import vipContainer from "../pages/vip"
import shopcarContainer from "../pages/shopcar"
import searchContainer from "../pages/search"
import userListContainer from "../pages/userlist"
import userInfoContainer from "../pages/userinfo"

Vue.use(Router)

export default new Router({
  routes: [
    { path:"/", redirect:"/home" },
    { path:"/home",component:homeContainer },
    { path:"/vip",component:vipContainer },
    { path:"/shopcar",component:shopcarContainer },
    { path:"/search",component:searchContainer },
    { path:"/home/userList",component:userListContainer },
    { path:"/home/userInfo/:id",component:userInfoContainer }
  ],
  linkActiveClass:"mui-active"
})
