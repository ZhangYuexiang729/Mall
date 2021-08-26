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
  <div class="register_container">
    <div class="register_box">
      <div class="avater_box">
        <p>VIP商城网注册</p>
      </div>
      <el-form label-width="0px" class="register_form" :model="register" :rules="registeRules" ref="registerRef">

        <!--     用户名-->
        <el-form-item prop="name">
          <el-input v-model="register.name" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>

        <!--     密码-->
        <el-form-item prop="password">
          <el-input  v-model='register.password' prefix-icon="el-icon-s-platform" type="password"></el-input>
        </el-form-item>

        <!--     按钮-->
        <el-form-item>
          <el-button type="primary" @click="register1">立即注册</el-button>
          <el-button type="info" @click="resetregisterFrom">重置</el-button>
        </el-form-item>


      </el-form>
    </div>
  </div>
</template>

<script>
// import {register} from "../../../register-page/test1/server/services";
import axios from 'axios'
// import { defineComponent } from 'vue'
import { ElMessage } from 'element-plus'

export default {
  data() {
    return {
      register: {
        name: '',
        password: ''
      },
      //表单的验证规则
      registerRules: {
        name: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}]
      }
    }
  },
  methods: {
    //  点击重置
    resetregisterFrom() {
      console.log(this)
      this.$refs.registerRef.resetFields()
    },
    register1(){
      if(!this.register.name || !this.register.password){
        alert("输入不能为空");
        return;
      }
      axios.post('http://127.0.0.1:3000/register',this.register,{
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
        if (res.data.status == 400){
          console.log('注册失败')
          ElMessage.error('错了哦，该用户名已存在！！');
        }
        else{
          console.log('statuse:'+res.data.status)
          this.$router.push('/Login');

          return ElMessage.success({
            message: '注册成功！快去登录吧！',
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
  background-color: #ffb3a7;
  height: 100%;
}
.register_container{

  height: 100%;
}
.register_box{
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
  background-color:#fff2df;
}
.avater_box p{
  font-size: large;
  padding-top: 30px;
}
.register_form{
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