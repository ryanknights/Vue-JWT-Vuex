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
	}
}