<template>
  <div class="admin">
    <h1 class="display-4">Admin</h1>
    <users-list></users-list>
  </div>
</template>

<script>

import UsersList from '../UsersList.vue';
import store from '../../store/store';

export default {
  name: 'admin',
  components: {
    UsersList,
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch('users/getUsers')
      .then(next)
      .catch((error) => store.dispatch('feedback/setFeedback', { message: error.data, type: 'warning' }));
  },
};
</script>

<style scoped>

</style>
