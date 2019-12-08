<template>
  <li class="courseindex">
    <img :src="require('../'+imgsrc)" alt="" />
    <p><slot></slot></p>
  </li>
</template>

<script>
export default {
  name: 'index',
  props: ['imgsrc']
  // data: function () {
  //   return {
  //     width: '200%'
  //   }
  // }
}
</script>

<style lang="less">
  .courseindex {
    width: 50vw;
    // flex-shrink:1;
    display: flex;
    // flex-grow:1;
    display: -webkit-flex;
    /* Safari */
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    img {
      width: 48vw;
      display: flex;
      display: inline-block;
      vertical-align :top
      //width: 50%;
      //display: flex;
      // align-items: center;
      // justify-content: center;
      // align-content: space-around;
    }

    p {
      text-align: center;
    }
  }
</style>
