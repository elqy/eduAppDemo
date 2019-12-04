<template>
  <div class="hello">
    <ol class="curriculum" v-for="item in items" v-bind:key="item.title" :item="item">
      <li class="img"><img :src="item.img" /></li>
      <li class="title">{{ item.title }}</li>
      <li class="price">
        {{ item.price }}&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="costPrice">{{ item.costPrice }}</span>
      </li>
    </ol>
    <div class="content">
      <div class="item-left" ></div>
      <div class="item-center" ></div>
      <div class="item-right" ></div>
    </div>
  </div>

</template>

<script>
const items = [
  {
    img: require('../assets/ke1.png'),
    title: '听得懂的金融思维课'
  },
  {
    img: require('../assets/ke2.jpg'),
    title: '能帮你赚到钱的50节商业思维提升课',
    price: '￥169'
  },
  {
    img: require('../assets/ke3.png'),
    title: '25堂通识阅读课 带你打破知识边界',
    price: '￥150',
    costPrice: '￥199'
  },
  {
    img: require('../assets/ke4.png'),
    title: ' 跟简七学理财',
    price: '￥99'
  }
]
export default {
  name: 'HelloWorld',
  data () {
    return {
      items: items
    }
  }
}
</script>
<style scoped lang="less">
ol{
  list-style: none;
  margin: 0;
  padding: 0;
}
.hello{
  margin: 0;
  padding: 0;
}
.curriculum{
  width: 45%;
  float: left;
  text-align: left;
  margin-right: 0.8rem;
  justify-content: center;
  font-size: 0.8rem;
  img{
    width: 8.6rem;
  }
  .title{
    margin: 0;
  }
  .price{
    color: #FF632A;
  }
  .costPrice{
    color: #999;
    text-decoration: line-through;
    font-size: 0.73rem;
  }
}
.content {
    display: flex;
    align-items: center;
    .item-left {
        width: 94px;
        flex: 0 0 94px;//不放大 不缩小 固定宽度94px
    }
    .item-center {
        flex: 1 1 auto;//可放大 可缩小
    }
    .item-right {
        width: 16px;
        flex: 0 0 16px;//不放大 不缩小 固定宽度94px
    }
}
</style>
