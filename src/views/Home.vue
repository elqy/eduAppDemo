<template>
  <div class="home">
    <div class="container">
      <ProfessionalList></ProfessionalList>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProfessionalList from '@/components/ProfessionalList.vue'

export default {
  name: 'home',
  components: {
    ProfessionalList
  }
}
</script>

<style scoped lang="less">
</style>
