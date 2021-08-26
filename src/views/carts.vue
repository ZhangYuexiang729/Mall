<template>
<div style="width: 80%;margin-left: 10%">
<h1>我的购物车</h1>
</div>
  <div class="title" style="width: 80%;margin-left: 10%;">
  <el-table
      ref="multipleTable"
      :data="cartgoods"
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
    <div align="right" class="computer">
      <span class="allprice">总价：{{total}}</span>
      <span>
                <router-link to="/makeSureOrder">
                  <el-button @click="compute">全部结算</el-button>
                </router-link>
              </span>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "carts",

  data() {
    return {
      // goodsnum:1,
      cartgoods:[
        {
          goodsnum:1
        }
      ],
      multipleSelection: []
    }
  },
computed:{
  total:{
    get(){
      let totalprice = 0;
      for(let good of this.cartgoods){
        totalprice += good.price;
        this.$store.commit('add',totalprice)
      }
      return totalprice;
    }
  }
},
  methods: {

    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },

    handleSelectionChange(val) {
      this.multipleSelection = val;
    },

    handleDelete(id) {

      axios.get('http://127.0.0.1:3000/del/' + id).then(res => {
        console.log(res.data)
        this.delgood = res.data
      }).catch(err => {
        console.log(err);
      })
      window.location.reload()
    },


  },
  mounted() {
    axios.get('http://127.0.0.1:3000/cartgood').then(res=>{
      console.log(res.data)
      this.cartgoods= res.data.cartgoods
    }).catch(err=>{
      console.log(err);
    })
  }

}
</script>

<style scoped>
h1{
  color: #fff;
  text-align: left;
}
.allprice{
  width: 80%;
  margin-top: 10px;
  background-color: #fff;
  font-size: 30px;
  color: #B1191A;
}
button{
  width: 150px;
  height: 50px;
  background-color: brown;
  border: 1px solid #c91623;
  font-weight: bold;
  font-size: 20px;
  color: white;
}
.computer{
  width: 100%;
  height: 80px;
padding-top: 20px;
  background-color: #fff;
}
</style>