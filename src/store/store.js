import Vue from 'vue';
import Vuex from 'vuex';

import Auth from '../services/Auth';

Vue.use(Vuex);

const state = {
	appLoading: true,
	feedback: {
		message: false,
		type: false
	},
	auth: {
		loggedin: false,
		user: false,
		tokens: {
			access: null,
			refresh: null
		}
	},
	loading: false,
};

const getters = {
	feedback () {
		return state.feedback;
	},
	feedbackClass () {
		const type = state.feedback.type;
		return `alert alert-${type}`;
	},
	auth () {
		return state.auth;
	},
	user () {
		return state.auth.user;
	},
	isAdmin () {
		return (typeof state.auth.user.isAdmin === undefined && state.auth.user.isAdmin);
	},
	loggedin () {
		return state.auth.loggedin;
	},
	accesstoken () {
		return state.auth.tokens.access;
	},
	refreshtoken () {
		return state.auth.tokens.refresh;
	},
	isLoading () {
		return state.loading;
	},
	isAppLoading () {
		return state.appLoading;
	}
};

const actions = {
	setFeedback({ commit }, data) {
		commit('setFeedback', data);
	},
	clearFeedback({ commit }) {
		commit('clearFeedback');
	},
	login({ commit }, credentials) {
		return Auth.login(credentials).then((data) => {
			commit('setLoggedIn', true);
			commit('setUser', data.user);
			commit('setAccessToken', data.token.access);
			commit('setRefreshToken', data.token.refresh);
		});
	},
	authenticate({ commit }) {
		return Auth.authenticate().then((data) => {
			commit('setLoggedIn', true);
			commit('setUser', data.user);
		});
	},
	logout({ commit }) {
		commit('setLoggedIn', false);
		commit('setUser', false);
		commit('clearAccessToken', false);
		commit('clearRefreshToken', false);		
	},
	setLoading({ commit }, status) {
		commit('setLoading', status);
	},
	setAppLoading({ commit }, status) {
		commit('setAppLoading', status);
	}
};

const mutations = {
	setFeedback (state, data) {
		state.feedback.message = data.message;
		state.feedback.type = data.type;
	},
	clearFeedback (state) {
		state.feedback.message = false,
		state.feedback.type = false;
	},
	setUser (state, user) {
		state.auth.user = user;
	},
	clearUser (state, user) {
		state.auth.user = false;
	},
	setAccessToken (state, token) {
		localStorage.setItem('accessToken', token);
		state.auth.tokens.access = token;
	},
	clearAccessToken (state) {
		localStorage.removeItem('accessToken')
		state.auth.tokens.access = false;
	},
	setRefreshToken (state, token) {
		localStorage.setItem('refreshToken', token);
		state.auth.tokens.refresh = token;
	},
	clearRefreshToken (state) {
		localStorage.removeItem('refreshToken');
		state.auth.tokens.refresh = false;
	},
	setLoggedIn (state, status) {
		state.auth.loggedin = status;
	},
	setLoading (state, status) {
		state.loading = status;
	},
	setAppLoading (state, status) {
		state.appLoading = status;
	}
};

export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters
});