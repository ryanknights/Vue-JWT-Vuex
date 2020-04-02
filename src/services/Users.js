import axios from 'axios';

export default {
  getUsers() {
    return axios.get('users')
      .then((response) => response.data)
      .catch((error) => Promise.reject(error.response));
  },
  removeUser(id) {
    return axios.delete(`users/${id}`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error.response));
  },
};
