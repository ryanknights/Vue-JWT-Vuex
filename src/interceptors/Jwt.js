import axios from 'axios';
import store from '../store/store';
import Auth from '../services/Auth';

const onSuccess = (response) => response;

const onError = (error) => {
  const originalRequest = error.config;

  if (error.response.status === 401 && !originalRequest._retry) {

    originalRequest._retry = true;

    const refreshToken = store.getters.refreshtoken;
    return Auth.refresh(refreshToken).then((response) => {
        store.commit('setAccessToken', response.token.access);
        return axios(originalRequest);
      }).catch((error) => {
        store.dispatch('logout');
        return Promise.reject(error);
      })
  }

  return Promise.reject(error); 
}

const beforeRequestSuccess = (config) => {
  config.headers.Authorization = `Bearer ${store.getters.accesstoken}`;
  return config;
}

const beforeRequestError = (error) => {
  return Promise.reject(error);
}

export { onSuccess, onError, beforeRequestSuccess, beforeRequestError };