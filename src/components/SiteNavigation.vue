<template>
  <nav class="site-navigation">
    <div class="container clearfix">
		<ul class="nav nav-bar float-left">
		  <li class="nav-item">
		    <router-link to="/" class="nav-link">Home</router-link>
		  </li>
		  <li class="nav-item">
		    <router-link to="/posts" class="nav-link">Posts</router-link>
		  </li>
		</ul> 
		<ul class="nav nav-bar float-right">
		  <li class="nav-item">
		    <router-link to="/login" class="nav-link">Login</router-link>
		  </li>
		  <li class="nav-item">
		    <router-link to="/register" class="nav-link">Register</router-link>
		  </li>
		</ul>		   	
    </div>
  </nav>
</template>

<script>
export default {
  name: 'site-navigation',
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
