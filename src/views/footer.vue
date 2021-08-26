<template>

  <div style="position: fixed;right: 7%;bottom: 10%;">
    <el-tooltip class="item" effect="dark" content="返回顶层" placement="left-start">
      <el-button size="medium" @click="goTop()" icon="el-icon-arrow-up" circle></el-button>
    </el-tooltip>
    <br><br>
    <el-tooltip class="item" effect="dark" content="刷新" placement="left-start">
      <el-button size="medium" @click="refresh()" icon="el-icon-refresh-right" circle></el-button>
    </el-tooltip>
    <br><br>
    <a href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=1759886198&website=www.oicqzone.com">
      <el-tooltip class="item" effect="dark" content="问题反馈QQ" placement="left-start">
        <el-button size="medium"  @click="gokefu()" icon="el-icon-position" circle></el-button>
      </el-tooltip>
    </a>
  </div>

  <div class="footer" style="margin-top: 90px;margin-bottom: 0px;">
    <hr />
    <p>
      <span style="color:red;"><a href="#">关于我们</a></span>&nbsp;&nbsp;
      <span><a href="">联系我们</a></span>
      <span><a href="">1759886198@qq.com</a></span>&nbsp;&nbsp;
      <span><a href="https://jq.qq.com/?_wv=1027&k=2giDHjln">QQ:&nbsp;1759886198</a></span>
    </p>

    <p><span>学校地址：贵州省安顺市西秀区西航街道学院路25号</span></p>
    <p><span>Copyright © 2018-2022</span> <span>张跃祥</span></p>
    <p><span>xxx备 xxxxxxxx号-x </span><span>公网安备 xxxxxxxxxxxxxx号</span> <span>版权所有</span></p>
  </div>
</template>

<script>
export default {
  name: "footer",
  data() {
    return {
      collapse: false,
      fullscreen: false,
      name: 'admin',
      message: 2
    }
  },
  methods:{
    goTop() {
      window.scrollTo(0, 0);
    },
    refresh(){
      window.location.reload();
    }
  }
}
</script>

<style scoped>
body{
  height: 100%
}
.footer {
  width: 100%;
  height: 160px;
  color: #e3e3e3;
  left: 30px;
  top: 2000px;
}
.footer p a{
  color: #e3e3e3;
}
</style>