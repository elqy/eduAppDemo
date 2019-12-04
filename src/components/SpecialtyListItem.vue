<template>
  <li :id="item.id"><img :src="item.img" />
  <slot></slot>
  </li>
  <!-- <router-link :to="to">
    <font-awesome-icon :icon="icon" fixed-width />
    <br />
    <span>{{ content }}</span>
  </router-link> -->
</template>

<script>
export default {
  name: 'SpecialtyListItem',
  props: ['item']
}
</script>

<style scoped lang="less">
  li {
    width: 25%;
    float: left;
    margin: 0.5rem 0;
    img {
      width: 2rem;
      height: 2rem;
      margin: 0.5rem 0;
    }
    p {
      font-size: 0.8rem;
    }
   }
</style>
