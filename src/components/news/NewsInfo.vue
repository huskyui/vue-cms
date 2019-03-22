<template>
    <div class="newsInfoContainer">
       <h3 class="title">{{newsInfo.title}}</h3>
       <p class="subtitle">
           <span>发表时间:{{newsInfo.createtime|dateFilter}}</span>
           <span>点击:{{newsInfo.clickTimes}}次</span>
       </p>
       <hr/>
       <div class="content" v-html="newsInfo.content"></div>

       <!-- 评论区域 -->
       <comment-box id="id"></comment-box>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
import comment from '../subcomponent/Comment.vue'
export default {
    data() {
        return {
            id : this.$route.params.id,
            newsInfo:''
        }
    },
    created(){
       this.getNewsInfo();
    },methods:{
        getNewsInfo(){
            this.axios.get("api/getNews",{params:{id:this.id}}).then((response)=>{
                if(response.data.success === true){
                    this.newsInfo = response.data.data;
                }else{
                    Toast('加载新闻详情获取失败')
                }
            }).catch((response)=>{
                console.log(response.data.message);
            })
        }
    },components:{
        'comment-box':comment,
    }
}
</script>

<style>
    .newsInfoContainer{
        padding: 0 4px;
    }
    .title{
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color: red;
    }
    .subtitle{
        font-size: 12px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
</style>
