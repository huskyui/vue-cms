import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
    state: { //this.$store.state.XXX
        car:JSON.parse(localStorage.getItem('car'))||[],
        token: localStorage.getItem('token')||'',
        userId: localStorage.getItem('userId')||'',
        isLogin: false,
    },
    mutations: {//this.$store.commit('方法名‘，’唯一参数‘)
        login(state,userInfo){
            state.token = userInfo.token;
            state.userId = userInfo.userId;
            localStorage.setItem('token',userInfo.token);
            localStorage.setItem('userId',userInfo.userId);
        },
        setLogin(state,flag){
            state.isLogin = flag;
        },
        logout(state){
            state.token = "";
            state.userId = "";
            state.isLogin = false;
        },
        add(state,goodsInfo){
            var flag = false;
            state.car.some(item => {
                if(item.id == goodsInfo.id){
                    item.count += parseInt(goodsInfo.count);
                    flag = true;
                    return true;
                }
            })
            if(!flag){
                state.car.push(goodsInfo);
            }
            localStorage.setItem('car',JSON.stringify(state.car))
            console.log(state.car);
        },
        update(state,info){
            state.car.some(item=>{
                if(item.id == info.id){
                    item.count = parseInt(info.count);
                    return true;
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car));
        },
        removeFromCar(state,id){
            state.car.some((item,i)=>{
                if(item.id==id){
                    state.car.splice(i,1);
                    return true;
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car));
        },
        removeBuyedGoods(state){
            var carList = [];
            state.car.forEach(item=>{
                if(item.flag!==true){
                    carList.push(item);
                }
            })
            state.car = carList;
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateFlag(state,info){
            state.car.some(item=>{
                if(item.id == info.id){
                    item.flag = info.flag;
                    return true;
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car));
        }
    },
    getters: { //this.$store.getters.*
        // 相当于计算属性，也相当于filters
        getAllCount(state){
            var c = 0;
            state.car.forEach(item=>{
                c+=item.count;
            })
            return c
        },
        getCar(state){
            return state.car;
        },
        getGoodsCount(state){
            var c = 0;
            state.car.forEach(item=>{
                if(item.flag==true){
                    c+=item.count;
                }
            })
            return c;
        },
        getGoodsTotal(state){
            var c = 0;
            state.car.forEach(item=>{
                if(item.flag==true){
                    c+=(item.price*item.count);
                }
            })
            return c;
        },
        getToken(state){
            return state.token;
        },
        getUserId(state){
            return state.userId;
        },
        getGoodsChecked(state){
            var goodsList = [];
            state.car.forEach(item=>{
                if(item.flag==true){
                    var goods = {
                        goodsId: parseInt(item.id),
                        count: item.count
                    }
                    goodsList.push(goods);
                }
            })
            return goodsList;
        }
    },
})
export default store