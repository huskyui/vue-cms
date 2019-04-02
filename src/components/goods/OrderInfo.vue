<template>
    <div class="shopcar-container">
        <div class="goodsList">
            <div class="mui-card" v-for="item in goodsList" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <img :src="item.imgUrl">
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <p class="countClass">
                                <span class="price">￥{{item.sellPrice}}</span>
                                <numbox :count="item.count"></numbox>
                            </p>
                        </div>
					</div>
				</div>
			</div>
        </div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner calculate">
                   <div class="left">
                       <p>总计(不含运费)</p>
                       <p>商品数量<span class="red">{{count}}</span>件，总价<span class="red">￥{{totalAmount}}</span></p>
                   </div>
                </div>
            </div>
		</div>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
import numbox from '../subcomponent/NumberBoxOrderInfo.vue';

export default {
    data() {
        return {
            orderId: this.$route.params.orderId,
            count: 0,
            totalAmount: 0,
            goodsList: []
        }
    },
    methods: {
        getOrderInfo(){
            this.axios.get('order/getOrderInfo',{
                params: {
                    'orderId' :this.orderId
                }
            }).then(response=>{
                var data = response.data;
                console.log(data);
                if(data.success===true){
                    data = data.data;
                    this.count = data.count;
                    this.totalAmount = data.totalAmount;
                    this.goodsList = data.orderDetailVOList;  
                }else{
                    Toast("加载失败");
                }
            })
        }
    },
    components:{
        numbox
    },
    created() {
        this.getOrderInfo();
    },
}
</script>
<style scoped>
.shopcar-container{
    background-color: #eee;
    overflow: hidden;
}
img{
    width: 50px;
    height:50px;
}
.el-input-number {
    width:120px;
    margin-top:10px;
}
.mui-card-content-inner {
    display: flex;
}
.price{
    color:red;
    font-weight: bold;
}
.info{
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.el-input {
    width: 50%;
}

.el-switch{
    margin: auto;
}
.countClass{
    display: flex;
    justify-content: space-between;
}
span{
    margin:auto;
}
a{
    margin: auto;
}
h1{
    color: gray;
}
.calculate{
    display: flex;
    justify-content: space-between;
}
.red{
    color:red;
    font-weight: bold;
    font-size: 15px;
}

</style>
