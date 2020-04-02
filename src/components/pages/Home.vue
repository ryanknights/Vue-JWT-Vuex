<template>
  <div class="home">
    <h1 class="display-4">Home</h1>
    {{ auth }}
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'home',
  computed: {
    ...mapGetters({
      auth: 'auth/auth',
    }),
  },
};
</script>

<style scoped>

</style>
