<template>
  <div id="app" style="background: #DCDFE6">

    <div id="header">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"> <router-link to="/">首页</router-link></el-menu-item>
        <el-submenu index="2">
          <template #title>我的收藏</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>

        <el-menu-item index="3" >消息中心</el-menu-item>
        <el-menu-item index="4"><router-link to="/address"> 地址管理</router-link></el-menu-item>
        <el-menu-item index="5" ><router-link to="/carts">购物车</router-link></el-menu-item>
        <el-menu-item index="6" >联系我们</el-menu-item>
        <el-menu-item index="7" >网站导航</el-menu-item>
        <el-menu-item index="8" ><router-link to="/lyb">留言板</router-link></el-menu-item>
        <el-menu-item index="9" ><router-link to="/news">热点新闻</router-link></el-menu-item>
        <el-menu-item index="12"  v-if="!$store.state.showname">你好，{{name}}</el-menu-item>
        <el-menu-item index="10" v-if="$store.state.showname"><router-link to="/Login">登录</router-link></el-menu-item>
        <el-menu-item index="11" v-if="$store.state.showname"><router-link to="/register">注册</router-link></el-menu-item>
        <el-menu-item index="12" @click="logout" v-if="!$store.state.showname">退出登录</el-menu-item>
      </el-menu>

    </div>
  </div>
  <hr style="width: 100%">
  <br>
  <router-view></router-view>
</template>

<script>
export default {

  data(){
      const name = window.sessionStorage.getItem("name");
      console.log(name)

    return {
      name,
      activeIndex: '1',
      activeIndex2: '1',
    };
  },
  created() {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))));
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state));
    })
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    //点击之后清除token，再次跳转到登录页面
    logout(){
     this.$store.commit("refresh")
      window.sessionStorage.clear()
      window.location.reload()
      this.$route.push("/Login")
    },
  },
  mounted() {

  }

}
</script>
<style>

#mall-name{
  font-weight: bold;
  float: left;
  margin-left: 50px;
}
#nav.a.router-link-exact-active{
  color: #42b983;
}
#header{
  position: fixed;
  z-index: 9999;
  width: 100%;
  top:-1%;
}


</style>
