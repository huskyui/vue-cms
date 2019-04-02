import VueRouter from 'vue-router'
import HomeContainer from './components/tabber/HomeContainer.vue'
import MemberContainer from './components/tabber/MemberContainer.vue'
import SearchContainer from './components/tabber/SearchContainer.vue'
import ShopCarContainer from './components/tabber/ShopCarContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsComment from './components/goods/GoodsComment.vue'
import UserInfo from './components/member/UserInfo.vue'
import login from './components/member/Login.vue'
import register from './components/member/Register.vue'
import OrderList from './components/goods/OrderList.vue'
import orderInfo from './components/goods/OrderInfo.vue'

var router = new VueRouter({
    routes:[//配置路由规则
        {path: '/',redirect:'/home'},
        {path: '/home',component: HomeContainer},
        {path: '/member',component: MemberContainer},
        {path: '/member/userinfo',component:UserInfo},
        {path: '/member/login',component:login},
        {path: '/member/register',component:register},
        {path: '/shopcar',component: ShopCarContainer},
        {path: '/search',component: SearchContainer},
        {path: '/home/newsList',component: NewsList},
        {path: '/home/newInfo/:id',component: NewsInfo},
        {path: '/home/goodslist',component: GoodsList},
        {path: '/home/goodsInfo/:id',component: GoodsInfo},
        {path: '/home/goodsComment/:id',component:GoodsComment},
        {path: '/member/orderList',component:OrderList},
        {path:'/member/orderInfo/:orderId',component:orderInfo}
    ],
    linkActiveClass:'mui-active'//覆盖默认路由高亮的
})
export default router