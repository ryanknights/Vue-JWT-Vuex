import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/pages/Home';
import Posts from '../components/pages/Posts';
import Login from '../components/pages/Login';
import Register from '../components/pages/Register';
import Admin from '../components/pages/Admin';

import AppInit from './guards/AppInit';
import RedirectIfLoggedIn from './guards/RedirectIfLoggedIn';
import IsLoggedIn from './guards/IsLoggedIn';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home,
      beforeEnter: IsLoggedIn
    },
    {
      path: '/posts',
      component: Posts,
      beforeEnter: IsLoggedIn,     
    },
    {
      path: '/admin',
      component: Admin,
      beforeEnter: IsLoggedIn,
      meta: {
        isAdmin: true
      }      
    },    
    {
      path: '/login',
      component: Login,
      beforeEnter: RedirectIfLoggedIn
    },
    {
      path: '/register',
      component: Register,
      beforeEnter: RedirectIfLoggedIn
    }
  ]
});

router.beforeEach(AppInit);

export default router;
