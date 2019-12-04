<template>
  <div class="hello">
    <ol class="curriculum" v-for="item in items" v-bind:key="item.title" :item="item">
      <li class="img"><img :src="item.img"></li>
      <li class="title">{{item.title}}</li>
      <li class="price">{{item.price}}&nbsp;&nbsp;&nbsp;&nbsp;<span class="costPrice">{{item.costPrice}}</span></li>
    </ol>
  </div>
</template>

<script>
 import aa from '../assets/ke1.png'
const items = [
  {
    imgUrl: aa,
    title: '听得懂的金融思维课'
  },
  {
    img: '../assets/ke2.jpg',
    title: '能帮你赚到钱的50节商业思维提升课',
    price: '￥169'
  },
  {
    img: '../assets/ke3.png',
    title: '25堂通识阅读课 带你打破知识边界',
    price: '￥150',
    costPrice: '￥199'
  },
  {
    img: '../assets/ke4.png',
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
  .curriculum{
    width: 45%;
    float: left;
    text-align: left;
    margin-left: 0.6rem;
    justify-content: center;
    font-size: 0.8rem;
    .img{
      width: 9rem;
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
</style>
