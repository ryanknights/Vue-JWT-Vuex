// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';

import App from './App.vue';
import router from './router';
import store from './store/store';

import {
  onSuccess,
  onError,
  beforeRequestSuccess,
  beforeRequestError,
} from './interceptors/Jwt';

axios.defaults.baseURL = 'http://localhost:4007/api/';
axios.interceptors.request.use(beforeRequestSuccess, beforeRequestError);
axios.interceptors.response.use(onSuccess, onError);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
