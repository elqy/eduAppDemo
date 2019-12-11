<template>
<div class="home"><Search></Search></div>
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
<style>
	.van-ellipsis{
		margin-left: 5rem;
	}
</style>
