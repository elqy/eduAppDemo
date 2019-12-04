<template>
	<div class="home">
		<!-- <ProfessionalList></ProfessionalList> -->
		<Search></Search>
	</div>
</template>

<script>
// @ is an alias to /src
import Search from '../components/Search.vue'

export default {
  name: 'home',
  components: {
    Search
  }
}
</script>
