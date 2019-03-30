<template>
    <div class="login">
        <div class="headerbox">
            <router-link class="login" to="/member/login" tag="span">已账号去登录</router-link>
        </div>
        <div class="loginbox">
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>用户名</label>
                    <input type="text" v-model="username" @change="isExist">
                </div>
                <div class="mui-input-row">
                    <label>密码</label>
                    <input type="password" class="mui-input-password" v-model="password">
                </div>
                <div class="mui-input-row">
                     <label>再次输入密码</label>
                    <input type="password" class="mui-input-password" v-model="repassword">
                </div>
                <div class="mui-input-row">
                    <label>email</label>
                    <input type="text" v-model="email">
                </div>
                <div class="mui-input-row">
                    <label>生日</label>
                    <input type="text" v-model="birthday" @click="open('datePicker')">
                </div>
                
                <div class="mui-button-row">
                    <button type="button" class="mui-btn mui-btn-primary" @click="register">确认</button>&nbsp;&nbsp;
                    <button type="button" class="mui-btn mui-btn-danger" >取消</button>
                </div>
            </form>
            <mt-datetime-picker
                v-model="pickerVisible"
                type="date"
                ref="datePicker"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日"
                @confirm="handleConfirm">
            </mt-datetime-picker>
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
            repassword: '',
            email: '',
            birthday: '',
            pickerValue: '',
            pickerVisible: ''
        }
    },
    methods: {
        register(){
            if(this.password != this.repassword){
                Toast("两次密码输入不一样");
                return;
            }
            this.axios.get('api/register',{
                params: {
                    username: this.username,
                    password: utils.md5(this.password),
                    email: this.email,
                    birthday: this.birthday,
                }
            }).then(response=>{
                if(response.data.success===true){
                    Toast("注册成功");
                    this.$router.push('/member');
                }
            })
        },
        open(picker){
            this.$refs[picker].open();
        },
        handleConfirm(value){
            this.birthday = this.formatDate(value);
        },
        formatDate(date){
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            return `${year}-${month}-${day}`
        },
        isExist(){
            this.axios.get("api/isExist",{
                params:{
                    username: this.username
                }
            }).then(response=>{
               if(response.data.success === false){
                   Toast("用户名已存在");
               }
            })
        }
    }
}
</script>
<style scoped>
    .headerbox{
        width: 100%;
    }
    .login{
        margin-right: 100px;
    }
    .mui-input-group .mui-input-row {
    height: 50px;
    }

</style>
