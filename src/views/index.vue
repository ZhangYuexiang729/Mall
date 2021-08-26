<template>
<div id="lbt">
<!--  轮播图的框-->
  <el-carousel :interval="4000" type="card" height="300px" style="background: #F2F8FE">
<!--  轮播图-->
    <el-carousel-item v-for="item in rotation.imgs" :key="item.id">
      <img :src="item.address">
    </el-carousel-item>
  </el-carousel>
  <br>

<!--  商品容器-->
  <el-container >
    <div style="float: left;width: 15%;">
      <!--左边栏空白占位  -->
    </div>
<!--    中间商品栏-->
    <div style="float: left;width: 80%;">
      <div class="card"  v-for="(item, index) in goodsList.goods" :key="item.id" v-on:mouseenter="showDialog(index)" v-on:mouseleave="hideDialog(index)">
        <div class="ribbon">
          <!--鼠标移入移出事件-->
          <div class="handleDialog" v-if="ishow && index==current">
            <el-button type="success" style="margin-left:25%;margin-top: 70%;" size="medium" @click="goGoodsDesc(item.id)">查看详情</el-button>
            <el-button type="warning" icon="el-icon-star-off" circle size="medium"></el-button>
          </div>
          <img :src="item.img" style="height: 100%;width: 100%">

        </div>
        <div style="text-align:center">
          <span class="goodName">{{item.name}}</span>
          <span style="color: red">&yen;{{item.price}}</span>
          <span  class="goodshop">{{item.shop}}</span>
        </div>
      </div>
    </div>
    <div style="float: left;width: 10%;">
      <!--右边栏空白占位  -->
    </div>

  </el-container>
  <br>

    <el-pagination
        background
        layout="prev, pager, next"
        :total="300"
        :page-size="16"
        @current-change="handleCurrentChange"
        :current-page="currentPage">
    </el-pagination>
<div>
  <v-footer></v-footer>
</div>
</div>
</template>

<script>
import vFooter from './footer';
import axios from 'axios'
export default {

  components: {

    vFooter
  },
  name: "index",
  data() {
    return {
      ishow: false,
      current: 0,
      selectd: '',
      currentPage:this.$store.state.currentPage,
      currentDate: new Date(),
      rotation: [],
      goodsList:[]
    }
  },
  methods:{
    goGoodsDesc(goods) {
      this.$router.push({
        path:'/gooddetails',
        query:{
          goods:goods
        }
      });
    },
    //显示操作项
    showDialog(index, item) {
      console.log(item)
      this.ishow = true;
      this.current = index;
    },
    //隐藏蒙层
    hideDialog(index, item) {
      this.ishow = false;
      this.current = null;
      console.log(item,index)
    },
    handleCurrentChange(val){
      this.$store.commit("handleCurrentChange",val)
      window.location.reload()
    },


  },
  //获取商品数据
  mounted() {

    //获取轮播图图片
    axios.get('http://127.0.0.1:3000/rotation').then(res=>{
      console.log(res.data)
      this.rotation = res.data
    }).catch(err=>{
      console.log(err);
    })

        axios.get('http://127.0.0.1:3000/page/'+this.currentPage).then(res=>{
          console.log(res.data)
          this.goodsList = res.data
        }).catch(err=>{
          console.log(err);
        })
  }


  }



</script>

<style scoped>
#lbt{
  width: 85%;
  margin-left: 20px;
  height: 380px;
}
.handleDialog {
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
}
.card{
  height: 370px;
  width: 266px;
  margin-left: 30px;
  margin-top: 30px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 4px;
  float: left;
}
.card img {
  width: 100%;
  height: 70%;
}
.card span {
  font-size: 15px;
  display: block;
  letter-spacing: 2px;

}

.goodName{
  margin:0 auto;
  width: 90%;
  height: 40px;
  overflow: hidden;
}
.ribbon {
  display: inline-block;
  width: 100%;
  height: 70%;
  position: relative;
  float: left;
  margin-bottom: 30px;
  background-size: cover;
  text-transform: uppercase;
  color: white;
}

.wrap {
  width: 100%;
  height: 188px;
  position: absolute;
  top: -8px;
  left: 8px;
  overflow: hidden;
}
.wrap:before {
  content: "";
  display: block;
  border-radius: 8px 8px 0px 0px;
  width: 40px;
  height: 8px;
  position: absolute;
  right: 100px;
  background: #4D6530;
}
.wrap:after {
  content: "";
  display: block;
  border-radius: 0px 8px 8px 0px;
  width: 8px;
  height: 40px;
  position: absolute;
  right: 0px;
  top: 100px;
  background: #4D6530;
}
.ribbon6 {
  display: inline-block;
  text-align: center;
  width: 200px;
  height: 40px;

  line-height: 40px;
  position: absolute;
  top: 30px;
  right: -50px;
  z-index: 2;
  overflow: hidden;
  transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  border: 1px dashed;
  box-shadow: 0 0 0 3px #57DD43, 0px 21px 5px -18px rgba(0, 0, 0, 0.6);
  background: #57DD43;
}
.goodshop{
  height: 17px;
  overflow: hidden;
}
</style>