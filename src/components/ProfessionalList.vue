<template>
  <div id="major">
    <ul class="nav">
      <SpecialtyListItem v-bind:key="item.content" v-for="item in items" :item="item">
        <p class="content">{{ item.content }}</p>
      </SpecialtyListItem>
    </ul>
    <ul></ul>
  </div>
</template>

<script>
import SpecialtyListItem from './SpecialtyListItem.vue'

let items = [
  {
    id: '1',
    img: require('../assets/wei.png'),
    content: '微专业'
  },
  {
    id: '2',
    img: require('../assets/zhi.png'),
    content: '职业提升'
  },
  {
    id: '3',
    img: require('../assets/IT.png'),
    content: '编程开发'
  },
  {
    id: '4',
    img: require('../assets/ai.png'),
    content: '人工智能'
  },
  {
    id: '5',
    img: require('../assets/chan.png'),
    content: '产品与运营'
  },
  {
    id: '6',
    img: require('../assets/she.png'),
    content: '设计创意'
  },
  {
    id: '7',
    img: require('../assets/shang.png'),
    content: '电子商务'
  },
  {
    id: '8',
    img: require('../assets/yu.png'),
    content: '语言学习'
  }
]
export default {
  name: ' app',
  data () {
    return {
      items: items
    }
  },
  components: {
    SpecialtyListItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #major {
    * {
      padding: 0;
      margin: 0;
    }
    margin-top: 12rem;
    background: #ffffff;
    width: 100%;
    height: 10.9rem;
    box-sizing: border-box;
      }
      ul {
        width: 100%;
        list-style: none;
      }
      .nav::after {
            content: '';
            display: block;
            clear: both;
        }
</style>
