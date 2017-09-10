import Vue from 'vue';
import axios from 'axios';

export default {
	register (data) {
		return axios.post(`https://expressapi.ryanknights.co.uk/api/register`, data)
			.then(response => response.data)
			.catch(error => Promise.reject(error.response));
	},
	login (data) {
		return axios.post(`https://expressapi.ryanknights.co.uk/api/login`, data)
			.then(response => response.data)
			.catch(error => Promise.reject(error.response));
	},
	authenticate (token) {
		return axios.get(`https://expressapi.ryanknights.co.uk/api/authenticate`, {headers: {'Authorization': `Bearer ${token}`}})
			.then(response => response.data)
			.catch(error => Promise.reject(error.response));
	}
}