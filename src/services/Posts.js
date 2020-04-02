import axios from 'axios';

export default {
  getPosts() {
    return axios.get('posts')
      .then((response) => response.data)
      .catch((error) => Promise.reject(error.response));
  },
  getPost(id) {
    return axios.get(`posts/${id}`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error.response));
  },
  addPost(post) {
    return axios.post('posts/', post)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error.response));
  },
  removePost(id) {
    return axios.delete(`posts/${id}`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error.response));
  },
};
