<template>
    <div class="shopcar-container">
        <div class="goodsList">
            <div class="mui-card" v-for="item in goodsList" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<switchbox :cflag="item.flag" :id="item.id"></switchbox>
                        <img :src="item.imgUrl">
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <p class="countClass">
                                <span class="price">￥{{item.price}}</span>
                                <numbox :max="50" :num="item.count" :id="item.id"></numbox>
                                <a href="#" @click.prevent="remove(item.id)">删除 </a>
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
                       <p>已勾选商品<span class="red">{{this.$store.getters.getGoodsCount}}</span>件，总价<span class="red">￥{{this.$store.getters.getGoodsTotal}}</span></p>
                   </div>
                   <mt-button type="danger" @click="buy">去结算</mt-button>
                </div>
            </div>
		</div>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
import numbox from '../subcomponent/NumberBoxShopCar.vue';
import switchbox from '../subcomponent/Switch.vue'
export default {
    data() {
        return {
            goodsList:this.$store.getters.getCar,
        }
    },
    components:{
        numbox,
        switchbox
    },
    methods: {
        remove(id){
            this.$store.commit("removeFromCar",id);
        },
        buy(){
            if(this.$store.getters.getGoodsTotal===0){
                Toast('还未购买，请勿点击');
                return;
            }
            var goodsList = this.$store.getters.getGoodsChecked;
            var userId = this.$store.getters.getUserId;
            this.axios.post('order/addOrder/'+userId, 
                        JSON.stringify(goodsList),
                {headers: {'Content-Type': 'application/json'}}
            ).then(response=>{
                if(response.data.success===true){
                    Toast("购买成功");
                    this.$store.commit('removeBuyedGoods');
                    this.goodsList=this.$store.getters.getCar;
                }
            })

        }
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
    margin: auto;
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
