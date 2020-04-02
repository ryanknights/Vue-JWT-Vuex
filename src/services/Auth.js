import axios from 'axios';

export default {
  register(data) {
    return axios.post('register', data)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error.response));
  },
  login(data) {
    return axios.post('login', data)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error.response));
  },
  authenticate() {
    return axios.get('authenticate')
      .then((response) => response.data)
      .catch((error) => Promise.reject(error.response));
  },
  refresh(token) {
    return axios.post('authenticate/refreshToken', { token })
      .then((response) => response.data)
      .catch((error) => Promise.reject(error.response));
  },
};
