<template>
    <div>
        <h3>发表评论</h3>
        <hr/>
        <textarea placeholder="请输入要BB的内容(最多吐槽120字)"
        maxlength="120" v-model="content"></textarea>
        <mt-button type="primary" size="large" @click="addComment">发表评论</mt-button>
        <div class="cmt-list" v-for="(item, index) in commentList" :key="item.createtime">
            <div class="cmt-item">
                <div class="cmt-title">
                    <span>第{{index+1}}楼&nbsp;&nbsp;用户：{{item.username}}</span><span>发表时间:{{item.createtime|dateFilter}}</span>
                </div>
                <div class="cmt-body">
                    {{item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="showMore">加载更多</mt-button>
        
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    props:['id'],
    data() {
        return {
            pageIndex: 1,
            commentList: [],
            content:''
        }
    },
    methods: {
        getComment(){
            this.axios.get("api/getCommentList/"+this.id+"?pageIndex="+this.pageIndex)
            .then((response)=>{
                if(response.data.success){
                    this.commentList = this.commentList.concat(response.data.data);
                }else{
                    Toast("评论加载失败");
                }
            })
        },
        addComment(){
            this.axios.get('api/addComment',{
                params:{
                    'foreignId': this.id,
                    'userId': -1,
                    'content': this.content,
                    'type': 0,
                }
            }).then((response)=>{
                if(response.data.success){
                    Toast("评论成功");
                    this.pageIndex = 1;
                    this.commentList = [];
                    this.getComment();
                    this.content = ""
                }else{
                    Toast("插入失败");
                }
            })
        },
        showMore(){
            this.pageIndex = this.pageIndex + 1;
            this.getComment();

        }
    },
    created(){
        this.getComment();
    }
}
</script>
<style>
h3{
    font-size:18px;
}
textarea{
    font-size: 14px;
    height:85px;
    margin: 0;
}
.cmt-list{
    margin: 10px 0;
}
.cmt-list .cmt-item .cmt-title{
    font-size: 13px;
    background-color: #ccc;
    line-height: 30px;
}
.cmt-list .cmt-item .cmt-body{
    font-size: 13px;
    line-height: 35px;
    text-indent: 2em;
}
.cmt-title{
    display: flex;
    justify-content: space-between;
}
</style>
