<template>
  <li class="list-group-item">
      <div class="user" v-for="item in links.array" :key="item.id"><span>{{ item.name }}</span><span class ='content'>说: <br> {{item.content}}</span><br><span class="date">创建时间：{{item.createdAt}}</span></div>
  </li>
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

</style>
