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
        <tr v-for="(user, index) in users">
          <td>{{ user._id }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>
            <a href="#" @click.prevent="remove(post._id)" class="btn btn-danger">Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import Posts from '../services/Users';

export default {
  name: 'users-list',
  methods: {
    ...mapActions([
      'getUsers',
      'setFeedback'
    ]),
    remove(id) {

    }
  },
  computed: {
    ...mapGetters([
      'users'
    ])
  }
}
</script>

<style scoped>

</style>
