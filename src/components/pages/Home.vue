<template>
  <div class="home">
    <h1 class="display-4">Home</h1>
    <h2>Test Autobuild Deployment</h2>
    {{ auth }}
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'home',
  data () {
    return {

    }
  },
  computed : {
    ...mapGetters([
      'auth'
    ])
  }
}
</script>

<style scoped>

</style>
