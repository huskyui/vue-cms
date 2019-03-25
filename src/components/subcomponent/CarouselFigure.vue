<template>
    <div>
        <!-- 轮播图 抽离出轮播图模块-->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in info" :key="item.id">
                <img :src="item.img" :class="{'full':isFull}"/>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    props:['info','isFull']
}
</script>
<style scopd>
.mint-swipe{
    height:200px;
}
.mint-swipe-item{
    text-align: center;
}
.mint-swipe-item img{
    height:100%;
}

.full {
  width: 100%;
}
</style>

