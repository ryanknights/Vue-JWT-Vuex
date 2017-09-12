<template>
  <nav class="site-navigation">
    <div class="container clearfix">
		<ul class="nav nav-bar float-left" v-if="loggedin">
		  <li class="nav-item">
		    <router-link to="/" class="nav-link">Home</router-link>
		  </li>
		  <li class="nav-item">
		    <router-link to="/posts" class="nav-link">Posts</router-link>
		  </li>
      <li class="nav-item" v-if="isAdmin">
        <router-link to="/admin" class="nav-link">Admin</router-link>
      </li>      
		</ul> 
		<ul class="nav nav-bar float-left" v-if="!loggedin">
		  <li class="nav-item">
		    <router-link to="/login" class="nav-link">Login</router-link>
		  </li>
		  <li class="nav-item">
		    <router-link to="/register" class="nav-link">Register</router-link>
		  </li>
		</ul>
		<ul class="nav nav-bar float-right" v-if="loggedin">
		  <li class="nav-item">
		  	<a @click="logoutUser">Logout</a>
		  </li>
		</ul>					   	
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
  	...mapGetters([
  		'loggedin',
      'isAdmin',
  		'user'
  	])
  },
  methods: {
  	...mapActions([
  		'logout',
      'setFeedback'
  	]),
  	logoutUser () {
  		this.logout().then(() => {
  			this.$router.push({path: '/login', query: {loggedout: true}});
  		});
  	}
  }
}
</script>

<style scoped>

</style>
