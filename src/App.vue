<template>
  <div id="app" class="page-tabbar">
    <div class="page-wrap">
      <div class="page-title">慧中IT学院</div>
      <router-view></router-view>
    </div>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="/">
        <font-awesome-icon slot="icon" :icon="['fas', 'home']" size="lg"></font-awesome-icon>
        首页
      </mt-tab-item>
      <mt-tab-item id="/mystudy">
        <font-awesome-icon slot="icon" :icon="['fas', 'user']" size="lg"></font-awesome-icon>
        我的学习
      </mt-tab-item>
      <mt-tab-item id="/zhanghao">
        <font-awesome-icon slot="icon" :icon="['fas', 'book']" size="lg"></font-awesome-icon>
        帐号
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  name: 'App',
  data: function () {
    return {
      selected: '/'
    }
  },
  watch: {
    selected: function (val, oldVal) {
      this.$router.push({
        path: val
      })
    }
  }
}
</script>

<style lang="less">
  body {
    margin: 0rem;
    padding: 0rem;
    #app {
      overflow: hidden;
      height: 100vh;
      .page-wrap {
        overflow: auto;
        height: 100%;
        padding-bottom: 10rem;
        .page-title {
          line-height: 1.5rem;
          font-size: 1.5rem;
        }
      }
    }
  }

  // #app {
  //   font-family: 'Avenir', Helvetica, Arial, sans-serif;
  //   -webkit-font-smoothing: antialiased;
  //   -moz-osx-font-smoothing: grayscale;
  //   text-align: center;
  //   color: #2c3e50;

  //   #footer {
  //     .mint-tabbar{
  //       .mint-tab-item{
  //         .mint-tab-item-icon {

  //         }
  //       }
  //     }
  //   }
  // }

  // #nav {
  //   padding: 30px;

  //   a {
  //     font-weight: bold;
  //     color: #2c3e50;

  //     &.router-link-exact-active {
  //       color: #42b983;
  //     }
  //   }
  // }
</style>
