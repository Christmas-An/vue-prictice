import Vue from 'vue'
import Router from 'vue-router'
import homeContainer from "../pages/home"
import vipContainer from "../pages/vip"
import shopcarContainer from "../pages/shopcar"
import searchContainer from "../pages/search"
import newsListContainer from "../pages/newslist"
import newsInfoContainer from "../pages/newsinfo"
import photoListContainer from "../pages/photoList"
import photoInfoContainer from "../pages/photoInfo"

Vue.use(Router)

export default new Router({
  routes: [
    { path:"/", redirect:"/home" },
    { path:"/home",component:homeContainer },
    { path:"/vip",component:vipContainer },
    { path:"/shopcar",component:shopcarContainer },
    { path:"/search",component:searchContainer },
    { path:"/home/newsList",component:newsListContainer },
    { path:"/home/newsInfo/:id",component:newsInfoContainer },
    { path:"/home/photoList",component:photoListContainer },
    { path:"/home/photoInfo/:id",component:photoInfoContainer }
  ],
  linkActiveClass:"mui-active"
})
