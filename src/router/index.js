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
import goodsListContainer from "../pages/goodsList"
import goodsInfoContainer from "../pages/goodsInfo"
import goodsDescContainer from "../pages/goodsDesc"
import goodsCommentContainer from '../pages/goodsComment'


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
    { path:"/home/photoInfo/:id",component:photoInfoContainer },
    { path:"/home/goodsList",component:goodsListContainer },
    { path:"/home/goodsInfo/:id",component:goodsInfoContainer, name: 'goodsInfo' },
    { path:"/home/goodsDesc/:id",component:goodsDescContainer, name: 'goodsDesc' },
    { path: '/home/goodsComment/:id', component: goodsCommentContainer, name: 'goodsComment' },

  ],
  linkActiveClass:"mui-active"
})
