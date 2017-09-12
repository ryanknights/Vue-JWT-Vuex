import axios from 'axios';
import store from '../store/store';
import Auth from '../services/Auth';

const onSuccess = (response) => response;

const onError = (error) => {

  switch (error.response.status) {
    case 401:
      const originalRequest = error.config;
      if (!originalRequest._retry && error.response.data === 'Token Expired') {
        originalRequest._retry = true;
        const refreshToken = store.getters.refreshtoken;
        return Auth.refresh(refreshToken).then((response) => {
            store.commit('setAccessToken', response.token.access);
            return axios(originalRequest);
          }).catch((error) => {
            store.dispatch('logout');
            return Promise.reject(error);
          });
      } 
    break;
    default:
    break;
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