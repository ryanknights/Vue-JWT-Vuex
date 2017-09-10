<template>
  <div id="app">
    <site-navigation></site-navigation>
    <div class="container">
      <loading></loading>
      <feedback></feedback>
      <router-view></router-view>
    </div>    
  </div>
</template>

<script>

import SiteNavigation from './components/SiteNavigation';
import Auth from './services/Auth';
import Feedback from './components/Feedback';
import Loading from './components/Loading';
import store from './store/store';
import { mapActions } from 'vuex';

export default {
  name: 'app',
  components: {
    SiteNavigation,
    Feedback,
    Loading
  },
  methods: {
    ...mapActions([

    ])
  }
}
</script>

<style>

</style>
