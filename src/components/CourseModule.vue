<template>
  <div id="module">
    <ul>
      <CourseIndex imgsrc="assets/course/1.png">课程1</CourseIndex>
    </ul>
  </div>
</template>

<script>
import CourseIndex from './CourseIndex.vue'
export default {
  components: {
    CourseIndex
  }
}
</script>

<style lang="less">
  #module {
    ul {
      list-style: none;
      margin: 0.5rem 0 0 0;
      padding: 0;
      display: -webkit-flex;
      /* Safari */
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
    }
  }
</style>
