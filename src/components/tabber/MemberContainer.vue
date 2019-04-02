<template>
    <div class="member">
        <div class="jumpbox" v-if="!isLogin">
            <router-link to="/member/login" tag="span">登录</router-link>
            <router-link to="/member/register" tag="span">注册</router-link>
        </div>
        <div class="jumpbox2" v-if="isLogin">
            <span @click="logout">登出</span>
        </div>
        <div class="cellbox">
            <!-- <mt-cell title="用户详情" is-link @click.native="goPage('/member/userinfo')">
            </mt-cell> -->
            <mt-cell title="我的订单" is-link @click.native="goPage('/member/orderList')">
            </mt-cell>
            <mt-cell title="关于我们" is-link >
            </mt-cell>
        </div>
    </div>   
</template>
<script>
export default {
    data() {
        return {
            isLogin: this.$store.state.isLogin    
        }
    },
    methods: {
        goPage(url){
            this.$router.push(url);
        },
        logout(){
            localStorage.removeItem("userId");
            localStorage.removeItem("token");
            this.$store.commit("logout");
            this.$router.push("/")
        }
    },


}
</script>
<style scoped>
    .member{
        background-color: #f2f2f2
    }
    .jumpbox{
        display:flex;
        justify-content: space-between;
        padding:5px;
    }
    .cellbox{
        padding:50px;
    }
</style>
