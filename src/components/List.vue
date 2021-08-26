<template>
  <div class="col-md-8">
    <ul class="list-group">
      <Item v-for="(comment,index) in comments" :key="index" :comment="comment" :index="index"/>
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue'
export default {
  //声明接收属性,这个属性就会成为组件对象的属性
  //此处只指定了属性名
  props: ['comments'],
  components: {
    Item
  }

}
</script>

<style>
.reply {
  margin-top: 0px;
}

</style>
