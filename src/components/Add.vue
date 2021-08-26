<template>
<div class="col-md-4">
<!--  <from class="form-horizontal">-->
<!--    <div class="form-group">-->
<!--      <input type="text" class="form-control" placeholder="用户名" v-model="message.name"/>-->
<!--    </div>-->
<!--    <div class="form-group">-->
<!--      <textarea type="text" class="form-control" placeholder="评论内容" v-model="message.content"></textarea>-->
<!--    </div>-->
<!--    <div class="form-group">-->
<!--      <div class="col-sm-offset col-sm-10">-->
<!--        <button class="btn btn-default pull-right" @click.prevent="add">提交</button>-->
<!--      </div>-->
<!--    </div>-->
<!--  </from>-->
  <el-form label-width="0px" class="login_form" :model="message">

    <!--     用户名-->
    <el-form-item prop="name">
      <el-input v-model="message.name" placeholder="请输入你的用户名" prefix-icon="el-icon-user-solid"></el-input>
    </el-form-item>

    <!--     内容-->
    <el-form-item prop="password">
      <el-input  v-model='message.content' placeholder="请输入你的留言" prefix-icon="el-icon-s-platform"></el-input>
    </el-form-item>

    <!--     按钮-->
    <el-form-item>
      <el-button type="primary"  @click.prevent="add">提交</el-button>

    </el-form-item>


  </el-form>
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
.col-md-4{

  margin-top: 186px;
}
</style>