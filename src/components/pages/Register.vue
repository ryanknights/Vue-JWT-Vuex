<template>
  <div class="register">
    <h1 class="display-4">Register</h1>
    <div class="row">
    	<div class="col-md-6">
				<form>
				  <div class="form-group">
				    <label for="username">Username</label>
				    <input type="text" class="form-control" id="username" placeholder="Enter username" v-model="user.username">
				  </div>					
				  <div class="form-group">
				    <label for="email_address">Email address</label>
				    <input type="email" class="form-control" id="email_address" placeholder="Enter email address" v-model="user.email">
				  </div>
				  <div class="form-group">
				    <label for="password">Password</label>
				    <input type="password" class="form-control" id="password" placeholder="Enter password" v-model="user.password">
				  </div>
				  <button type="submit" class="btn btn-primary" @click.prevent="register(user)">Register</button>
				</form>
    	</div>
    </div>
  </div>
</template>

<script>

import Auth from '../../services/Auth';
import { mapActions } from 'vuex';

export default {
  name: 'register',
  data () {
    return {
    	user: {
    		username: '',
    		email: '',
    		password: ''
    	}
    }
  },
  methods: {
  	...mapActions({
  		setFeedback: 'feedback/setFeedback',
  		login: 'login'
  	}),
  	register (user) {
  		Auth.register(user)
  			.then((data) => this.login({username: user.username, password: user.password}))
        .then(() => this.$router.push({path: '/'}))    
  			.catch((error) => this.setFeedback({message: error.data, type: 'warning'}))
  	}
  }
}
</script>

<style scoped>

</style>
