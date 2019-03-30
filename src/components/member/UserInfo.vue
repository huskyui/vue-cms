<template>
    <div class="member">
        <h1>userInfo界面</h1>
        <!-- <div class="loginbox">
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
        </div> -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            email: '',
            birthday: '',
            pickerValue: '',
            pickerVisible: ''
        }
    }, 
    methods: {
        getUserInfo(){
            this.axios.get('user/getUserInfo',{
                params: {
                    userId: this.$store.state.userId
                }
            }).then(response=>{
                console.log(response);
            })
        }
    }, 
    created() {
        this.getUserInfo();
    },
}
</script>
<style scoped>
    .member{
        padding:50px;
        background-color:steelblue;
    }

</style>
