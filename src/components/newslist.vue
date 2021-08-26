<template>
  <div class="col-md-8t">
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
  color: #2c3e50;
  font-size: 30px;
  font-weight: bold;
}
.jumbotron{
  padding: 0;
}
.col-md-8t{
  width: 100%;
  height: 100px;
}
</style>
