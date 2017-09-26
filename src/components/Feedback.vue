<template>
  <div class="feedback">
  	<div :class="feedbackClass" v-if="feedback.message">
			 <button type="button" class="close" aria-label="Close" @click="clearFeedback">
			    <span aria-hidden="true">&times;</span>
			  </button>  		
  			{{ feedback.message }}
  	</div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'feedback',
  computed: {
    ...mapGetters({
    	feedback: 'feedback/feedback',
      feedbackClass: 'feedback/feedbackClass',
    })
  },
  methods: {
  	...mapActions({
  		clearFeedback: 'feedback/clearFeedback'
  	})
  },
  watch: {
    $route () {
      this.clearFeedback();
    }
  }
}
</script>

<style scoped>

</style>
