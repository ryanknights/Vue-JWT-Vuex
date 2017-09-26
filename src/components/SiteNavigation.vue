<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
    <a class="navbar-brand" href="#">Vue JWT</a>
      <div class="navbar-collapse" id="navbar">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0" v-if="loggedin">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/posts" class="nav-link">Posts</router-link>
          </li>
          <li class="nav-item" v-if="isAdmin">
            <router-link to="/admin" class="nav-link">Admin</router-link>
          </li>   
        </ul>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0" v-if="!loggedin">
          <li class="nav-item active">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li>   
        </ul>   
        <ul class="navbar-nav" v-if="loggedin">
          <li class="nav-item">
            Logged in as <strong>{{ currentUser.username }}</strong> <em>(<a @click="logoutUser">Logout</a>)</em>
          </li>
        </ul>          
      </div>      
    </div>
  </nav>  
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'site-navigation',
  data () {
    return {

    }
  },
  computed: {
  	...mapGetters({
  		loggedin: 'auth/loggedin',
      isAdmin: 'auth/isAdmin',
  		currentUser: 'auth/user'
  	})
  },
  methods: {
  	...mapActions({
  		logout: 'auth/logout',
      setDelayedFeedback: 'feedback/setDelayedFeedback'      
  	}),
  	logoutUser () {
  		this.logout().then(() => {
        this.setDelayedFeedback({feedback: { message: 'Successfully logged out', type: 'info'}});
  			return this.$router.push({path: '/login'});
  		});
  	}
  }
}
</script>

<style scoped>

</style>
