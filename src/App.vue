<template>
  <div id="app">
    <site-navigation></site-navigation>
    <div class="container pt-3 pb-3">
      <loading></loading>
      <feedback></feedback>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import SiteNavigation from './components/SiteNavigation.vue';
import Feedback from './components/Feedback.vue';
import Loading from './components/Loading.vue';

export default {
  name: 'app',
  components: {
    SiteNavigation,
    Feedback,
    Loading,
  },
};
</script>

<style>

</style>
