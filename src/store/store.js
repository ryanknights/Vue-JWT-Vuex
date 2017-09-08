import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
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
	}
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
	login({ commit }, data) {
		commit('setLoggedIn', true);
		commit('setUser', data.user);
		commit('setAccessToken', data.token.access);
		commit('setRefreshToken', data.token.refresh);
	},
	logout({ commit }) {
		commit('setLoggedIn', false);
		commit('setUser', false);
		commit('setAccessToken', false);
		commit('setRefreshToken', false);		
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
		state.auth.tokens.access = token;
	},
	clearAccessToken (state) {
		state.auth.tokens.access = false;
	},
	setRefreshToken (state, token) {
		state.auth.tokens.refresh = token;
	},
	clearRefreshToken (state) {
		state.auth.tokens.refresh = false;
	},
	setLoggedIn (state, status) {
		state.auth.loggedin = status;
	}
};

export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters
});

