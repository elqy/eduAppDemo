<template>
  <div id="home">
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="../assets/images/1.webp" width="100%" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/images/2.webp" width="100%"/>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/images/3.webp" width="100%"/>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/images/4.webp" width="100%"/>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="less">
  #home{
    height: 100%;
    .mint-swipe{
      height: 12rem;
    }
  }
</style>
