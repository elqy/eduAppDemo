<template>
  <div class="hello">
    <ol class="curriculum">
      <CourseItem v-for="item in items" v-bind:key="item.id" :item="item" >
      <p class="title">{{item.title}}</p>
      <p slot="price">
        <span class="price">{{ item.price }}</span>
        <span class="costPrice">{{ item.costPrice }}</span>
      </p>
      </CourseItem>
    </ol>
</div>
</template>
<script>
import CourseItem from './CourseItem.vue'
export default {
  name: 'HelloWorld',
  components: {
    CourseItem
  },
  data () {
    return {
      items: items
    }
  }
}
const items = [
  {
    id: 1,
    img: require('../assets/ke1.png'),
    title: '听得懂的金融思维课'
  },
  {
    id: 2,
    img: require('../assets/ke2.jpg'),
    title: '能帮你赚到钱的50节商业思维提升课',
    price: '￥169'
  },
  {
    id: 3,
    img: require('../assets/ke3.png'),
    title: '25堂通识阅读课 带你打破知识边界',
    price: '￥150',
    costPrice: '￥199'
  },
  {
    id: 4,
    img: require('../assets/ke4.png'),
    title: ' 跟简七学理财',
    price: '￥99'
  }
]
</script>
<style scoped lang="less">

</style>
