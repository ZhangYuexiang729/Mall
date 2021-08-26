<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h2>知乎热榜</h2>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <newslist :comments = "comments"/>
    </div>
  </div>
</template>

<script>
import newslist from "../components/newslist";
export default {
  data(){
    return{
      comments:[{'123':123,}]
    }
  },
  components: {
    newslist
  }
}
</script>

<style scoped>
.container{
  text-align: left;
  width: 80%;
}
</style>