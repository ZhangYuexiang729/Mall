<template>
  <div style="width: 90%;margin-left: 10%; margin-bottom: 5%">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>收货地址</span>
          <el-button class="button" type="text">默认</el-button>
        </div>
      </template>
      <div class="text item">
            <p>收货人：{{receives.name}}</p>
            <p>电话：{{receives.phone}}</p>
            <p>收获地址：{{receives.address}}</p>
      </div>
    </el-card>
  </div>
<!--  订单-->
  <div>
    <div class="title" style="width: 80%;margin-left: 10%;">
      <el-table
          ref="multipleTable"
          :data="cartgoods2"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">

        <!--    <el-table-column-->
        <!--        type="selection"-->
        <!--        width="100px">-->
        <!--    </el-table-column>-->

        <el-table-column

            label="商品名"
            width="150px">
          <template width="90" #default="scope">

            <img style="width:80px;height:80px;border:none;" :src="scope.row.img">

          </template>
        </el-table-column>

        <el-table-column
            prop="name"
            label="商品名"
            width="300">

        </el-table-column>

        <el-table-column
            prop="price"
            label="价格"
            width="200">
        </el-table-column>

        <el-table-column
            prop="shop"
            label="店铺"
            show-overflow-tooltip>
        </el-table-column>

        <el-table-column align="right">
          <template #default="scope">
            <el-button size="mini" type="danger" @click="handleDelete(id=scope.row.id)">移出购物车</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--  <div style="margin-top: 20px">-->
      <!--    <el-button @click="toggleSelection()">取消全选</el-button>-->
      <!--  </div>-->
      <div align="right">
        <span class="allprice">总价：{{$store.state.sumprice}}</span>
        <span>
                <router-link to="/submitOrder">
                  <el-button @click="compute" >提交订单</el-button>
                </router-link>
              </span>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "makeSureOrder",

  data(){
   return{
     receives:[],

     cartgoods2:[],
    }
  },
  mounted(){
    axios.get('http://127.0.0.1:3000/receive').then(res=>{
      console.log(res.data)
      this.receives= res.data.recriveaddress
    }).catch(err=>{
      console.log(err);
    }),
        axios.get('http://127.0.0.1:3000/cartgood').then(res=>{
          console.log(res.data)
          this.cartgoods2= res.data.cartgoods
        }).catch(err=>{
          console.log(err);
        })

  }

}


</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
.allprice{
  font-size: 30px;
  color: black;
}
button{
  width: 100px;
  height: 50px;
  background-color: brown;
  border: 1px solid #c91623;
  font-weight: bold;
  font-size: 15px;
  color: white;
}
</style>