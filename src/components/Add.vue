<template>
<div class="col-md-4">
  <from class="form-horizontal">
    <div class="form-group">
      <label>用户名</label>
      <input type="text" class="form-control" placeholder="用户名" v-model="message.name"/>
    </div>
    <div class="form-group">
      <textarea type="text" class="form-control" placeholder="评论内容" v-model="message.content"></textarea>
    </div>
    <div class="form-group">
      <div class="col-sm-offset col-sm-10">
        <button class="btn btn-default pull-right" @click.prevent="add">提交</button>
      </div>
    </div>
  </from>
</div>
</template>

<script>
import axios from 'axios'

export default {

  data(){
    return{
      message:{
        name:'',
        content:''
      }

    }
  },

  methods:{
    add(){
      if(!this.message.name || !this.message.content){
        alert("输入不能为空");
        return;
      }
     axios.post('http://127.0.0.1:3000/create',this.message,{

       transformRequest:[
           function(data){
              let ret = "";// eslint-disable-line no-unused-vars
              for (let key in data){
                 ret += encodeURIComponent(key) + '=' + encodeURIComponent(data[key])  + '&'
              }
              return ret;
           }
       ],

       headers:{
         "Content-Type":'application/x-www-form-urlencoded'
       }
     }).then(res=>{
       console.log(res)
     }).catch(err=>{
       console.log(err)
     })
  location.reload()
    }
  }
}
</script>

<style scoped>

</style>