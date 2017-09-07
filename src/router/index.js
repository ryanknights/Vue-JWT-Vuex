import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/pages/Home';
import Posts from '../components/pages/Posts';
import Login from '../components/pages/Login';
import Register from '../components/pages/Register';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
    	path: '/posts',
    	component: Posts
    },
    {
    	path: '/login',
    	component: Login
    },
    {
    	path: '/register',
    	component: Register
    }
  ]
})
