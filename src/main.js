import Vue from 'vue'
// 导入路由的包
import VueRouter from 'vue-router'
import App from './App.vue'
import Mint from 'mint-ui';
import { Header,Swipe, SwipeItem, Button } from 'mint-ui';
import 'mint-ui/lib/style.css'
import './lib/css/mui.min.css'
import './lib/css/icons-extra.css'
import router from './router.js'
import axios from './http.js'
import VueAxios from 'vue-axios'
import './lib/css/animate.css'
import moment from 'moment'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import vuex from 'vuex'
import store from './store.js'
Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.use(Mint)
Vue.use(vuex)
// 安装路由
Vue.use(VueRouter)
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name,Button)
Vue.config.productionTip = false
Vue.config.devtools = true

// 创建路由对象，并将该对象挂载到vue上
Vue.filter('dateFilter',function(value,pattern = "YYYY-MM-DD HH:mm:ss"){
  return moment(value).format(pattern);
})



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
