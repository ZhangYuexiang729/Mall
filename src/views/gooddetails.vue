<template>
  <div>
<div class="left">
  <img :src="details.img" alt="小新电脑">
</div>
  <div class="right"></div>
  <div class="content">
    <span class="shop">{{details.shop}}</span>
    <br/> <br/>
        <span>{{details.name}}</span>

    <p>现价：￥ {{details.price}}</p>
    <el-button type="success">分享</el-button>
    <el-button size="medium" type="danger" @click="addCart" icon="el-icon-shopping-cart-2">加入购物车</el-button>
    <p style="color: #777777">温馨提示·支持7天无理由退货</p>
  </div>
  </div>
  <div class="goodsDescImg" id="goodsDescImg" style="text-align: center;margin-top: 60px">
    <hr />
    <h1 style="color: #777777">商品详情</h1><br><br><br>
    <el-image v-for="url in srcList" :key="url" :src="url"></el-image>
  </div>
</template>

<script>
import axios from 'axios'
import { ElMessage } from 'element-plus'
export default {
  name: "gooddetails",
  data(){
    return{
      details: {
      },
      srcList: [
        'http://img20.360buyimg.com/vc/jfs/t1/105367/36/17413/3696469/5e85c8d5E2e1acf66/0d3545ec70f2646f.jpg',
      ]
    }
  },
  created() {
    this.goodsId = this.$route.query.goods
    console.log(this.goodsId)
  },
  methods:{
    addCart() {
      ElMessage.success({
        message: '加入购物车成功',
        type: 'success'
      });
      axios.post('http://127.0.0.1:3000/cart',this.details,{

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

    }
},
  mounted() {
    // console.log(this.$route.query)

    axios.get('http://127.0.0.1:3000/good/details/'+this.goodsId).then(res=>{
      console.log(res.data)
      this.details= res.data.Details
    }).catch(err=>{
      console.log(err);
    })
  }
}
</script>

<style scoped>
.left{
  float:left;
  width: 500px;
  height: 500px;
  /*background-color: #00d1b2;*/
}
.left img{
  width: 450px;
  height: 450px;
}
.right{
  float: right;
  width: 500px;
  height: 500px;
  /*background-color: #4cae4c;*/
}
.content{
  /*background-color: #c7ddef;*/
  height: 500px;
  font-size: 30px;
  font-weight: bold;
}
.content p{
  margin-top: 30px;
  color: red;
}
.shop{
  float: left;
}
</style>