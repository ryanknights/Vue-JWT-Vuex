<template>
  <div class="feedback">
  	<div class="alert alert-success" v-if="feedback.success">
			 <button type="button" class="close" aria-label="Close" @click="clearSuccess">
			    <span aria-hidden="true">&times;</span>
			  </button>  		
  			{{ feedback.success }}
  	</div>
  	<div class="alert alert-warning" v-if="feedback.error">
			<button type="button" class="close" aria-label="Close" @click="clearError">
				<span aria-hidden="true">&times;</span>
			</button>   		
  		{{ feedback.error }}
  	</div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'feedback',
  computed: {
    ...mapGetters([
    	'feedback'
    ])
  },
  methods: {
  	...mapActions([
  		'clearError',
  		'clearSuccess'
  	])
  }
}
</script>

<style scoped>

</style>
