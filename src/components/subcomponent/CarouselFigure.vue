<template>
    <div>
        <!-- 轮播图 抽离出轮播图模块-->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in info" :key="item.id"><a :href="item.url"><img :src="item.img"/></a></mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    props:['info']
}
</script>
<style>
.mint-swipe{
    height:200px;
}
.mint-swipe-item img{
    width: 100%;
    height:100%;
}
</style>

