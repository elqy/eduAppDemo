<template>
  <div class="home">
    <ProfessionalList></ProfessionalList>
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
