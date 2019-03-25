<template>
   <div class="goods-list">
       <div class="goods-item" v-for="item in goodsList" :key="item.id" @click="goPage(item.id)">
            <img :src="item.imgUrl"/>
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.sellPrice}}</span>
                    <span class="old">￥{{item.marketPrice}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.inQuality}}件</span>
                </p>
            </div>           
       </div>
       <mt-button type="danger" size="large" @click="showMore">加载更多</mt-button>
   </div>
</template>
<script>
export default {
    data() {
        return {
            goodsList: [],
            pageIndex: 1
        }
    },
    methods:{
        getGoodsList(){
            this.axios.get("api/getGoodsList",{
                params: {
                   pageIndex: this.pageIndex, 
                }
            }).then((response)=>{
                this.goodsList=this.goodsList.concat(response.data.data);
            })
        },
        showMore(){
            this.pageIndex++
            this.getGoodsList();
        },
        goPage(id){
            
            this.$router.push({path:`goodsInfo/${id}`})
        }
    },created(){
        this.getGoodsList();
    }
}
</script>
<style >
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding:7px;
    justify-content: space-between;
}
.goods-item{
    width:49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 3px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
img{
    width:100%;
}
.title{
    color:black;
}
.info{
    background-color: #dde;
}
p{
    margin-block-end: 0em;
    padding:5px;
}
.now{
    color:red;
    font-weight: bold;
    font-size: 16px;
}
.old{
    text-decoration: line-through;
    font-size: 12px;
    margin-left: 12px;
}
.sell{
    display: flex;
    margin: 12px;
    justify-content: space-between;
}
</style>
