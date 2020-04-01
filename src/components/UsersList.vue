<template>
  <div class="users-list">
    <div class="alert alert-warning" v-if="!users.length">
      No Users To Display
    </div>
    <table class="table table-striped" v-if="users.length">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Admin</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user._id }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin }}</td>
          <td>
            <a href="#" @click.prevent="remove(user._id)" class="btn btn-danger">Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'users-list',
  methods: {
    ...mapActions({
      setFeedback: 'feedback/setFeedback',
      removeUser: 'users/removeUser',
    }),
    remove(id) {
      this.removeUser(id)
        .then(() => this.setFeedback({ message: 'User removed', type: 'success' }))
        .catch((error) => this.setFeedback({ message: error.data, type: 'warning' }));
    },
  },
  computed: {
    ...mapGetters({
      users: 'users/users',
    }),
  },
};
</script>

<style scoped>

</style>
