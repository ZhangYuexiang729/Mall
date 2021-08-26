<template>
  <div class="col-md-8t">
    <h3 class="reply">热点新闻:</h3>
    <ul class="list-group">
      <newitems v-for="(comment,index) in comments" :key="index" :comment="comment"/>
    </ul>
  </div>
</template>

<script>
import newitems from './newsitem.vue'
export default {

  props: ['comments'],
  components: {
    newitems
  }

}
</script>

<style>
.reply {
  margin-top: 0px;
}
.jumbotron{
  padding: 0;
}
.col-md-8t{
  width: 100%;
  height: 100px;
}
</style>
