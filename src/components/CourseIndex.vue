<template>
  <li id="index">
    <img :src="require('../'+imgsrc)" alt="" />
    <p><slot></slot></p>
  </li>
</template>

<script>
export default {
  name: 'index',
  props: ['imgsrc']
}
</script>

<style lang="less">
  #index {
    float: left;
    width: 50vw;
    display: -webkit-flex;
    /* Safari */
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    img {
      display: flex;
      align-items: center;
      justify-content: center;
      align-content: space-around;
    }

    p {
      text-align: center;
    }
  }
</style>
