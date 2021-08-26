<template>
  <div>

    <!--    地址-->
    <div style="width: 90%;margin-left: 10%;">
      <div style="width: 23%;margin-left: 20px;margin-bottom: 10px;"
           v-for="(item, index) in address" :key="item"
           @click="setFirst(index)">
        <!--          地址卡片-->
        <el-card class="box-card" :style="item.isFirst==1?'background: #F2F8FE':'background: #606266'">
          <div V-slot="header" class="clearfix">
            <span class="change">{{item.isFirst==1?"默认地址":"备用地址"}}</span>
            <!--              设置默认按钮-->
            <el-button style="float: right; padding: 3px 0"
                       type="text"
                       v-show="item.isFirst==1?false:true">
              设置为默认
            </el-button>

            <el-button style="float: right; padding: 3px 0" ssss @click="deladdress(id = item.id)">
              删除
            </el-button>
            <!--              选中标志-->
            <el-button style="float: right; padding: 3px 0"
                       type="success" icon="el-icon-check"
                       v-show="item.isFirst==1?true:false">
            </el-button>
            <!--              地址具体信息-->
          </div>
          <p>姓名：{{item.name}}</p>
          <p>手机号：{{item.phone}}</p>
          <p>收件地址：{{item.address}}</p>
        </el-card>
      </div>
      <button class="Addressbtn" @click="refreshAddress">添加地址</button>
    </div>
    <br><br>
    <br><br>
    <br><br>
    <br><br>
    <!--表头-->
<div class="add" v-if="$store.state.showaddress">
  <span>添加地址</span>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="收件人">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="电话">
      <el-input v-model="form.phone"></el-input>
    </el-form-item>
    <el-form-item label="收件地址">
      <el-input v-model="form.address"></el-input>
    </el-form-item>
    <el-form-item label="是否为默认地址">
      <el-input v-model="form.isFirst"></el-input>
    </el-form-item>

    <el-button type="primary" @click="ADDRESS">提交</el-button>
  </el-form>
</div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "makeSureOrder",
  data()
  {
    return{
      form: {
        name: '',
        phone:'',
        address:'',
        isFirst:''
      },
     address:[],
      search : '',
      //选中列表
      multipleSelection : [],
    }
  },
  created() {
  },
  methods:{
    deladdress(id){
      console.log(id)
      axios.get('http://127.0.0.1:3000/deladdress/' + id).then(res => {
        console.log(res.data)
        this.deladdress = res.data
      }).catch(err => {
        console.log(err);
      })
      window.location.reload()
    },

    setFirst(index) {
      const length = this.address.length;
      for (let i = 0; i < length; i++) {
        this.address[i].isFirst = 2;
      }
      this.address[index].isFirst = 1;
    },

    ADDRESS(){
      axios.post('http://127.0.0.1:3000/address/add',this.form,{

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
      this.$store.commit("refreshaddress")
      window.location.reload()
    },

    refreshAddress(){
      this.$store.commit("refreshaddress")
    }
  },

  mounted(){
    axios.get('http://127.0.0.1:3000/address').then(res=>{
      console.log(res.data)
      this.address= res.data.address
    }).catch(err=>{
      console.log(err);
    })
  }
}
</script>

<style scoped>
.title{
  margin-top: 50px;
}
.title h3{
  /*float: left;*/
  font-size: 23px;
  color: #c91623;
}

/*商品结算*/
.balance{
  height: 50px;
  border: 1px solid gray;
  margin-top: 40px;
}
.balance li{
  float: left;
  line-height: 5px;
  margin-left: 22px;
}
.balance_ul2{
  float: right;
  margin-right: 10px;
}
.balance_ul1 .button1{
  margin-top: 5px;
}
.balance_ul2 .spanText{
  font-size: 25px;
  color: #C91623 ;
  font-weight: bold;
}
.balance_ul2 button{
  width: 100px;
  height: 50px;
  background-color: brown;
  border: 1px solid #c91623;
  font-weight: bold;
  font-size: 20px;
  color: white;
}
.balance_ul2 button:hover{
  background-color:#C91623 ;
}
.Addressbtn{
  width: 100px;
  height: 100px;
  background-color: #faf2cc;
  position: absolute;
  right: 15%;
  top: 80%;
}
.add{
  width: 500px;
  height: 500px;
  position: absolute;
  left: 50%;
  top: 80%;
  transform: translate(-50%,-50%);
  background-color: #faf2cc;
}
.box-card{
  width: 900px;
}
.change{
  margin-right: 600px;
}
</style>
