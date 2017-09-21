import Vue from 'vue';
import axios from 'axios';

export default {
	getPosts () {
		return axios.get(`https://expressapi.ryanknights.co.uk/api/posts`)
			.then(response => response.data)
			.catch(error => Promise.reject(error.response));
	},
	getPost (id) {
		return axios.get(`https://expressapi.ryanknights.co.uk/api/posts/${id}`)
			.then(response => response.data)
			.catch(error => Promise.reject(error.response));
	},
	addPost (post) {
		return axios.post(`https://expressapi.ryanknights.co.uk/api/posts/`, post)
			.then(response => response.data)
			.catch(error => Promise.reject(error.response));
	},
	removePost (id) {
		return axios.delete(`https://expressapi.ryanknights.co.uk/api/posts/${id}`)
			.then(response => response.data)
			.catch(error => Promise.reject(error.response));		
	}
}