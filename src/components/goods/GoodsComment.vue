<template>
    <div>
        <comment :id="1" :type="1" ></comment>
    </div>
</template>
<script>
import comment from '../subcomponent/Comment.vue'
export default {
    created(){
        console.log("enter comment");
    },
    data() {
        return {
            id:this.$route.params.id
        }
    },
    components:{
        comment
    }
}
</script>
<style>

</style>
