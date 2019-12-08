<template>
  <div id="home">
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="../assets/images/1.webp" width="100%" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/images/2.webp" width="100%" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/images/3.webp" width="100%" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/images/4.webp" width="100%" />
      </mt-swipe-item>
    </mt-swipe>
    <div id="professional">
      <div class="ptype">
        <div class="circle" id="p1">微</div>
        <div class="pname">微专业</div>
      </div>
      <div class="ptype">
        <div class="circle" id="p2">职</div>
        <div class="pname">职场提升</div>
      </div>
      <div class="ptype">
        <div class="circle" id="p3">a</div>
        <div class="pname">a</div>
      </div>
      <div class="ptype">
        <div class="circle" id="p4">a</div>
        <div class="pname">a</div>
      </div>
      <div class="ptype">
        <div class="circle" id="p5">a</div>
        <div class="pname">a</div>
      </div>
      <div class="ptype">
        <div class="circle" id="p6">a</div>
        <div class="pname">a</div>
      </div>
      <div class="ptype">
        <div class="circle" id="p7">a</div>
        <div class="pname">a</div>
      </div>
      <div class="ptype">
        <div class="circle" id="p8">a</div>
        <div class="pname">a</div>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="less">
  @width: 25vw;

  #home {
    height: 100%;

    .mint-swipe {
      height: 12rem;
    }

    .clearfix {
      float: both;
      height: 0.3rem;
      background-color: #A9ACB1;
      margin-top: 0.3rem;
    }

    #professional {
      margin-top: 0.5rem;
      display: -webkit-flex;
      /* Safari */
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;

      .ptype {
        display: -webkit-flex;
        /* Safari */
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        float: left;
        width: @width;
        height: @width;

        .circle {
          display: flex;
          align-items: center;
          justify-content: center;
          align-content: space-around;
          width: @width*0.7;
          height: @width*0.7;
          border-radius: @width*0.7/2;
          &[id='p1'] {
            background-color: #4CAF50;
          }
          &[id='p2'] {
            background-color: red;
          }
          &[id='p3'] {
            background-color: darkkhaki;
          }
          &[id='p4'] {
            background-color: darkorange;
          }
          &[id='p5'] {
            background-color: #4CAF50;
          }
          &[id='p6'] {
            background-color: red;
          }
          &[id='p7'] {
            background-color: darkkhaki;
          }
          &[id='p8'] {
            background-color: darkorange;
          }

        }

        .pname {}
      }

    }
  }
</style>
