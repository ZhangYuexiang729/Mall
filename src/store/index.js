import {createStore} from 'vuex'
// import createPersistedState from "vuex-persistedstate"

export default createStore({
    state:{
        showname:true,
        currentPage: 1,
        sumprice:0,
        showaddress:false
},
    mutations:{
        refresh(state){
            state.showname = !state.showname
        },
        handleCurrentChange(state,val){
            state.currentPage = val;
            console.log(this.state.currentPage)
        },
        add(state,totalprice){
            state.sumprice = totalprice
            console.log('总价为：'+this.state.sumprice)
        },
        refreshaddress(state){
           state.showaddress = !state.showaddress
        }
    }
})