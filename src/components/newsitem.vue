<template>
  <li class="list-group-item">
    <div class="user" v-for="items in news.array1" :key="items.id"><span id="id">{{ items.id }}</span>&nbsp;<a :href="items.url" >{{items.question}}</a><span class="hot">{{items.hot_number}}</span></div>

  </li>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    //指定属性名和属性值的类型
    comment: Object,
    index: Number
  },
  data(){
    return{
     news:[]
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:3000/zhihulist').then(res=>{
      console.log(res.data)
      this.news = res.data
    }).catch(err=>{
      console.log(err);
    })
  },

}
</script>

<style>
.hot{
  color: firebrick;
  float: right;
}
a{
  color: #2c3e50;
}
#id{
  color: crimson;
}
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
  width: 80%;
  font-size: 22px;
  float: left;
  margin-top: 20px;
  /*margin-right: 500px;*/
}
.date{
  font-size: small;
  color: crimson;
}
.list-group-item{
  padding: 0px;
}
</style>
