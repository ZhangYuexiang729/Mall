<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h2>有什么问题您可以给我们留言</h2>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment = "addComment"/>
      <List :comments = "comments" :deleteComment = "deleteComment"/>
    </div>
  </div>
</template>

<script>
import Add from "../components/Add";
import List from "../components/List";

export default {
  data(){
    return{
      comments:[{'123':123}]
    }
  },
  methods:{
    //添加评论
    addComment(commment){
      this.comments.unshift(commment)
    },
    //删除指定下标的评论
    deleteComment (index) {
      this.comments.splice(index, 1)
    }
  },
  components:{
    Add,
    List
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container{

  color: white;
}
.jumbotron{
  background-color:transparent;
}
</style>
