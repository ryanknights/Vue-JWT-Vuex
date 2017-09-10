<template>
  <div class="register">
    <h1 class="display-4">Login</h1>
    <div class="row">
    	<div class="col-md-6">
				<form>
				  <div class="form-group">
				    <label for="username">Username</label>
				    <input type="text" class="form-control" id="username" placeholder="Enter username" v-model="user.username">
				  </div>					
				  <div class="form-group">
				    <label for="password">Password</label>
				    <input type="password" class="form-control" id="password" placeholder="Enter password" v-model="user.password">
				  </div>
				  <button type="submit" class="btn btn-primary" @click.prevent="loginUser(user)">Login</button>
				</form>
    	</div>
    </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex';
import Auth from '../../services/Auth';

export default {
  name: 'login',
  data () {
    return {
    	user: {
    		username: '',
    		password: ''
    	}
    }
  },
	methods: {
  	...mapActions([
  		'setError',
  		'setSuccess',
  		'login'
  	]),
  	loginUser (user) {
  		this.login(user)
			 .then(() => this.$router.push({path: '/'}))
			 .catch((error) => this.setError(error.data));
    }
  }  
}
</script>

<style scoped>

</style>
