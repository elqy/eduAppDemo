<template>
  <div id="app">
    <div id="header">
    </div>

    <div id="content">
      <!-- 路由匹配到的组件将显示在这里 -->
      <router-view></router-view>
    </div>

    <div id="footer">
			<tarbar></tarbar>
    </div>
    <!--    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
 -->
  </div>
</template>
<script>
	import tarbar from './components/Tabbar.vue'
  export default {
    name: 'App',
	components: {
		tarbar
		
	}
  }
</script>

<style lang="less">
  *{
    list-style: none;
    text-decoration: none
  }
  body{
    margin: 0;
    background-color:#EBEBEB;
    width: 100%;
    height: 100%;
    font-size: 12px;
  }
</style>
