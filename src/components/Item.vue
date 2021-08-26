<template>

  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>留言内容</span>
<!--        <el-button class="button" type="text">操作按钮</el-button>-->
      </div>
    </template>
    <div v-for="item in links.array" :key="item" class="text item">
      <p>用户名：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.name}}</p>
      <p>留言内容:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {{item.content}}</p>
      <p>创建时间：{{item.createdAt}}</p>
    </div>
  </el-card>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    //指定属性名和属性值的类型
    comment: Object,
    deleteComment: Function,
    index: Number
  },
  data(){
    return{
      links:[]
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:3000/list').then(res=>{
      console.log(res.data)
      this.links = res.data
    }).catch(err=>{
      console.log(err);
    })
  },

}
</script>

<style>
.li {
  transition: .5s;
  overflow: hidden;
}
.handle {
  width: 40px;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 1px;
  text-align: center;
}
.handle a {
  display: block;
  text-decoration: none;
}
.list-group-item .centence {
  padding: 0px 50px;
}
.content{
  margin-right: -200px;
  font-size: medium;
}
.user {
  font-size: 22px;
  margin-right: 500px;
}
.date{
  font-size: small;
  color: crimson;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
  text-align: left;
  border: 1px solid #0f0f0f;
  margin-top: 5px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 980px;
}
</style>
