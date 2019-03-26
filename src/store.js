import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
    state: { //this.$store.state.XXX
        car:[]
    },
    mutations: {//this.$store.commit('方法名‘，’唯一参数‘)
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
            console.log(state.car);
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
        }
        
    },
})
export default store