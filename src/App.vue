<template>
  <div id="app">
    <site-navigation></site-navigation>
    <div class="container">
      <feedback></feedback>
      <router-view></router-view>
    </div>    
  </div>
</template>

<script>

import SiteNavigation from './components/SiteNavigation';
import Feedback from './components/Feedback';

export default {
  name: 'app',
  components: {
    SiteNavigation,
    Feedback
  },
  created () {
    console.log('Check for token');
  }
}
</script>

<style>

</style>
