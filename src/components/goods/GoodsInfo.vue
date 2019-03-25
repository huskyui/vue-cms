<template>
    <div>
       <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                   <carousel-figure :info="carouseList" isFull="true"></carousel-figure>
                </div>
            </div>
		</div>
        <div class="mui-card">
            <div class="mui-card-header">{{goodsInfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：<del>￥{{goodsInfo.marketPrice}}</del>&nbsp;&nbsp;销售价:<span class="now_price">￥{{goodsInfo.sellPrice}}</span>
                    </p>
                    <p>购买数量：
                        <number-box ref="numberbox"></number-box>
                    </p>
                    <p class="justify">
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small">加入购物车</mt-button>
                    </p>
                </div>
            </div>
		</div>
        <div class="mui-card">
            <div class="mui-card-header">商品详情</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>库存情况：{{goodsInfo.inQuality}}件</p>
                    <p>上架时间：{{goodsInfo.createtime|dateFilter}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                 <mt-button type="primary" size="small" @click="goComment">商品评论</mt-button>
            </div>
		</div>

    </div>
</template>
<script>
import carouselFigure from '../subcomponent/CarouselFigure.vue'
import numberBox from '../subcomponent/NumberBox.vue'
import {Toast} from 'mint-ui'
export default {
      data() {
          return {
              carouseList: [],
              id: this.$route.params.id,
              goodsInfo: '',
          }
      },  
      components:{
          "carousel-figure": carouselFigure,
          "number-box": numberBox
      },
      created() {
          this.getCarouseInfo();
          this.getGoodsInfo();
      },
      methods:{
          getCarouseInfo(){
            console.log(this.id);
            this.axios.get("api/carouselInfo",{
                params:{
                    goodsId: this.id
                }
            }).then((response)=>{
                if(response.data.success === true){
                    this.carouseList = response.data.data;
                }else{
                    Toast('加载轮播图获取失败')
                }
            }).catch((response)=>{
                console.log(response);
            })
        },
        getGoodsInfo(){
            console.log(this.id)
            this.axios.get("api/getGoodsInfo",{
                params:{
                    goodsId: this.id
                }
            }).then((response)=>{
                if(response.data.success === true){
                    this.goodsInfo = response.data.data;
                }else{
                    Toast('加载')
                }
            }).catch((response)=>{
                console.log(response);
            })
        },
        goComment(){
            this.$router.push({path: "/home/goodsComment/1"});
        }
      }
}
</script>
<style>
.justify{
    display:flex;
    justify-content: space-between;
    margin: 0 10%;
}
</style>
