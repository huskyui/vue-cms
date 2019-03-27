<template>
  <div id="app">
    <!-- 顶部Header区域 -->
    <mt-header fixed title="黑马程序员vue项目">

			<span @click="goBack" slot="left" v-if="homeFlag">
    		<mt-button icon="back">返回</mt-button>
  		</span>
		</mt-header>
    <!-- 中间路由 router-view区域 -->
		<transition>
    	<router-view></router-view>
		</transition>

    <!-- 底部tabber -->

    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link >
			<router-link  class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-person"></span>
				<span class="mui-tab-label">会员</span>
			</router-link >
			<router-link  class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{this.$store.getters.getAllCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link >
			<router-link  class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link >
		</nav>
  </div>
</template>

<script>
export default {
	name: 'app',
	data() {
		return {
		}
	},
	computed: {
		'homeFlag':function(){
			if(this.$route.path==='/home'){
				return false;
			}else{
				return true;
			}
		}
	},
	methods:{
		goBack(){
			this.$router.go(-1);
		}
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 40px;
	margin-bottom: 50px;
	background-color: white;
	overflow-x: hidden;
}

.v-enter{
	opacity: 0;
	transform: translateX(100%);
}

.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}

.v-enter-active,
.v-leave-active{
	transition: all 0.5s ease;
}
.mint-header.is-fixed {
	z-index: 2 !important;
}

</style>
