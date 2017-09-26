import Vue from 'vue';
import axios from 'axios';

export default {
	getUsers () {
		return axios.get(`https://expressapi.ryanknights.co.uk/api/users`)
			.then(response => response.data)
			.catch(error => Promise.reject(error.response));
	},
	removePost (id) {
		return axios.delete(`https://expressapi.ryanknights.co.uk/api/users/${id}`)
			.then(response => response.data)
			.catch(error => Promise.reject(error.response));		
	}
}