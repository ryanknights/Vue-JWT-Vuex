<template>
  <div class="loading" v-if="isLoading">
  	<div class="container">
  		Loading...
  	</div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'loading',
  computed: {
    ...mapGetters({
    	isLoading: 'isLoading'
    })
  }
}
</script>

<style scoped>
	div.loading
	{
		position : fixed;
		bottom : 20px;
		left : 0;
		right : 0;
	}
</style>
