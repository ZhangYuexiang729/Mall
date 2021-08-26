<template>
  <div id="login">
    <vue-particles
        class="login-bg"
        color="#39AFFD"
        :particleOpacity="0.7"
        :particlesNumber="100"
        shapeType="circle"
        :particleSize="4"
        linesColor="#8DD1FE"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
    >
    </vue-particles>
  </div>

  <div class="login_container">
    <div class="login_box">
        <div class="avater_box">
          <p>VIP商城网登录</p>
        </div>
   <el-form label-width="0px" class="login_form" :model="login" :rules="loginRules" ref="loginRef">

<!--     用户名-->
     <el-form-item prop="name">
       <el-input v-model="login.name" prefix-icon="el-icon-user-solid"></el-input>
     </el-form-item>

<!--     密码-->
     <el-form-item prop="password">
       <el-input  v-model='login.password' prefix-icon="el-icon-s-platform" type="password"></el-input>
     </el-form-item>

<!--     按钮-->
     <el-form-item>
       <el-button type="primary" @click="login1">登录</el-button>
       <el-button type="info" @click="resetloginFrom">重置</el-button>
     </el-form-item>


   </el-form>
    </div>
  </div>
</template>

<script>
// import {login} from "../../../login-page/test1/server/services";
import axios from 'axios'
// import { defineComponent } from 'vue'
import { ElMessage } from 'element-plus'

export default {
  data() {
    return {
      login: {
        name: '',
        password: ''
      },
      //表单的验证规则
      loginRules: {
        name: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}]
      }
    }
  },
  methods: {
    //  点击重置
    resetloginFrom() {
      console.log(this)
      this.$refs.loginRef.resetFields()
    },
    login1(){
      if(!this.login.name || !this.login.password){
        alert("输入不能为空");
        return;
      }
      axios.post('http://127.0.0.1:3000/login',this.login,{
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
        if (res.data.status == 400 || res.data.status == 404){
          console.log('登录失败')
          ElMessage.error('错了哦，输入有错误');
        }
        else{
          console.log('statuse:'+res.data.status)
          this.$store.commit("refresh")
          //把token和name存放在seesion中
          window.sessionStorage.setItem('token',res.data.token)
          window.sessionStorage.setItem("name",res.data.name);
          this.$router.push('/');

          return ElMessage.success({
            message: '登录成功！',
            type: 'success',

          });

        }
      }).catch(err=>{
        console.log(err)
      })

    }
  },

}
</script>

<style>
body{

  height: 100%;
}
.login_container{

  height: 100%;
}
.login_box{
  width:450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.avater_box{
  height: 80px;
  width: 100%;
  background-color: #245269;
}
.avater_box p{
  font-size: large;
  padding-top: 30px;
}
.login_form{
  position: absolute;
  bottom:0;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}
.login-bg{
  width: 100%;
  height: 100%;
  background: #3E3E3E;
}
</style>