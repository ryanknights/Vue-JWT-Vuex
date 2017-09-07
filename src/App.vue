<template>
  <div id="app">
    <site-navigation></site-navigation>
    <div class="container">
      <router-view></router-view>
    </div>    
  </div>
</template>

<script>

import SiteNavigation from './components/SiteNavigation';

export default {
  name: 'app',
  components: {
    SiteNavigation
  }
}
</script>

<style>

</style>
