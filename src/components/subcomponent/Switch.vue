<template>
    <div>
        <el-switch
            v-model="flag"
            active-color="#13ce66"
            inactive-color="grey"
            @change="update">
        </el-switch>
    </div>
</template>
<script>
export default {
    data() {
        return {
            flag:this.cflag
        }
    },
    props:["cflag","id"],
    methods:{
        update(value){
            var info = {id:this.id,flag:value}
            this.$store.commit('updateFlag',info);
        }
    }
}
</script>
<style>

</style>
