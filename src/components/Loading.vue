<template>
  <div class="loading" v-if="isLoading">
  	Loading
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'loading',
  computed: {
    ...mapGetters([
    	'isLoading'
    ])
  }
}
</script>

<style scoped>

</style>
