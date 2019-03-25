import VueRouter from 'vue-router'
import HomeContainer from './components/tabber/HomeContainer.vue'
import MemberContainer from './components/tabber/MemberContainer.vue'
import SearchContainer from './components/tabber/SearchContainer.vue'
import ShopCarContainer from './components/tabber/ShopCarContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'

var router = new VueRouter({
    routes:[//配置路由规则
        {path: '/',redirect:'/home'},
        {path: '/home',component: HomeContainer},
        {path: '/member',component: MemberContainer},
        {path: '/shopcar',component: ShopCarContainer},
        {path: '/search',component: SearchContainer},
        {path: '/home/newsList',component: NewsList},
        {path: '/home/newInfo/:id',component: NewsInfo},
        {path: '/home/goodslist',component: GoodsList},
        {path: '/home/goodsInfo/:id',component: GoodsInfo},
    ],
    linkActiveClass:'mui-active'//覆盖默认路由高亮的
})
export default router