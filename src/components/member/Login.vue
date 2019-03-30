<template>
    <div class="login">
        <div class="headerbox">
            <router-link class="register" to="/member/register" tag="span">注册</router-link>
        </div>
        <div class="loginbox">
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>用户名</label>
                    <input type="text" v-model="username">
                </div>
                <div class="mui-input-row mui-password">
                    <label>密码</label>
                    <input type="password" class="mui-input-password" v-model="password">
                </div>
                <div class="mui-button-row">
                    <button type="button" class="mui-btn mui-btn-primary" @click="login">确认</button>&nbsp;&nbsp;
                    <button type="button" class="mui-btn mui-btn-danger" >取消</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
import utils from 'utility'
export default {
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        login(){
            if(this.username === ''||this.password === ''){
                Toast('用户名或者密码为空');
            }
            console.log(this.username+"---"+utils.md5(this.password));
            this.axios.get('api/login',{
                params: {
                    username: this.username,
                    password: utils.md5(this.password),
                }
            }).then(response=>{
                var res = response.data;
                console.log(res)
                if(res.success == true){
                    var userInfo = {
                        token: res.data.token,
                        userId: res.data.userId
                    };
                    this.$store.commit('login',userInfo);
                    this.$store.commit('setLogin',true);
                    this.$router.push('/member');
                }else{
                    Toast(res.msg);
                }
            })
        },
        check(){
            var token = this.$store.getters.getToken;
            this.axios.get('api/checkIsLogin',{
                params:{
                    'token': token
                }
            }).then(response=>{
                var res = response.data;
                if(res.success == true){
                    this.$router.push('/member');
                    this.$store.commit("setLogin",true);
                }
            })
        }

    },
    created(){
        this.check();
    }
}
</script>
<style scoped>
    .headerbox{
        width: 100%;
    }
    .register{
        margin-right: 100px;
    }

</style>
