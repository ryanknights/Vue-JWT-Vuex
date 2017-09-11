import Vue from 'vue';
import Vuex from 'vuex';

import Auth from '../services/Auth';

Vue.use(Vuex);

const state = {
	appLoading: true,
	feedback: {
		error : '',
		success: ''
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
	auth () {
		return state.auth;
	},
	user () {
		return state.user;
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
	setError ({ commit }, message) {
		commit('setError', message);
	},
	clearError({ commit }) {
		commit('clearError');
	},
	setSuccess({ commit }, message) {
		commit('setSuccess', message);
	},
	clearSuccess({ commit }, message) {
		commit('clearSuccess');
	},
	login({ commit }, credentials) {
		return Auth.login(credentials).then((data) => {
			commit('setLoggedIn', true);
			commit('setUser', data.user);
			commit('setAccessToken', data.token.access);
			commit('setRefreshToken', data.token.refresh);
		});
	},
	authenticate({ state, commit }) {
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
	setError (state, message) {
		state.feedback.error = message;
	},
	clearError (state) {
		state.feedback.error = '';
	},
	setSuccess (state, message) {
		state.feedback.success = message;
	},
	clearSuccess (state) {
		state.feedback.success = '';
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