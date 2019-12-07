<template>
  <div id="app" class="page-tabbar">
    <div class="page-wrap">
      <div class="page-title">慧中IT学院</div>
      <div>
        <mt-cell class="page-part" title="当前选中" :value="selected" />
      </div>
      <router-view></router-view>
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="首页">
          a
        </mt-tab-container-item>
        <mt-tab-container-item id="我的学习">
          b
        </mt-tab-container-item>
        <mt-tab-container-item id="帐号">
          <div class="page-part">
            c
          </div>
          <router-link to="/">
            <mt-button type="danger" size="large">退出</mt-button>
          </router-link>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="首页">
        <font-awesome-icon slot="icon" :icon="['fas', 'home']" size="lg"></font-awesome-icon>
        首页
      </mt-tab-item>
      <mt-tab-item id="我的学习">
        <font-awesome-icon slot="icon" :icon="['fas', 'user']" size="lg"></font-awesome-icon>
        我的学习
      </mt-tab-item>
      <mt-tab-item id="帐号">
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
      selected: '首页'
    }
  }
}
</script>

<style lang="less">
  #app {
    overflow: hidden;
    height: 100vh;

    .page-wrap {
      overflow: auto;
      height: 100%;
      padding-bottom: 100px;
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
