<template>
    <div>
        <!-- 轮播图 使用轮播图组件-->
        <carousel-figure :info="carouseList" :isFull="false"></carousel-figure>

        <!-- 九宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newsList">
                    <img src="../../images/menu1.png"/>
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/imageList">
                    <img src="../../images/menu2.png"/>
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodsList">
                    <img src="../../images/menu3.png"/>
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu4.png"/>
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu5.png"/>
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu6.png"/>
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
		</ul> 

    </div>
</template>
<script>
import {Toast} from 'mint-ui'
import carouselFigure from '../subcomponent/CarouselFigure.vue'
export default {
    data() {
        return {
            carouseList:[]
        }
    },
    created(){
        this.getCarouseInfo();
    },methods:{
        getCarouseInfo(){
            this.axios.get("api/carouselInfo").then((response)=>{
                if(response.data.success === true){
                    this.carouseList = response.data.data;
                }else{
                    Toast('加载轮播图获取失败')
                }
            }).catch((response)=>{
                console.log(response.data.message);
            })
        }
    },components:{
        "carousel-figure": carouselFigure
    }
    
}
</script>
<style scoped>
.mui-table-view .mui-grid-view .mui-grid-9{
    border:none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border:none;
}
img{
    width: 60px;
    height: 60px;
}
.mui-table-view .mui-grid-view .mui-table-view-cell .mui-media-body {
    font-size: 13px;
}
</style>
