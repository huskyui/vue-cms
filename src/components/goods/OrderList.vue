<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in orderlist" :key="item.id">
					<router-link  :to="'/orderInfo/'+item.id">
						<div class="mui-media-body">
							<h1>{{item.id}}</h1>
							<p class='mui-ellipsis'>
                                <span>购买:{{item.createtime|dateFilter}}</span>
                            </p>
						</div>
					</router-link>
				</li>
                
				

			</ul>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
           orderlist: []
        }
    },created(){
        this.getNewsList();
    },methods: {
        getNewsList(){
            this.axios.get('order/getOrderList',{params:{'userId':this.$store.getters.getUserId}}).then((response)=>{
                if(response.data.success === true){
                    this.orderlist = response.data.data;
                }else{
                    Toast('加载订单失败')
                }
            }).catch((response)=>{
                console.log(response.data.message);
            })
        }
    },
}
</script>
<style>
.mui-h1, h1 {
    font-size: 14px;
}
.mui-ellipsis {
    font-size: 12px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
}
</style>
