import Vue from 'vue';
import Vuex from 'vuex';

import Auth from '../services/Auth';
import Posts from '../services/Posts';
import Users from '../services/Users';

/*----------  Modules  ----------*/
import feedback from './modules/feedback';

Vue.use(Vuex);

const state = {
	appLoading: true,
	auth: {
		loggedin: false,
		user: false,
		tokens: {
			access: null,
			refresh: null
		}
	},
	loading: false,
	posts: [],
	users: []
};

const getters = {
	auth () {
		return state.auth;
	},
	user () {
		return state.auth.user;
	},
	isAdmin () {
		return (typeof state.auth.user.isAdmin !== undefined && state.auth.user.isAdmin);
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
	},
	posts () {
		return state.posts
	},
	users () {
		return state.users
	}
};

const actions = {
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
	},
	getPosts({ commit }) {
		return Posts.getPosts().then(data => commit('setPosts', data.posts));
	},
	addPost({ commit }, post) {
		return Posts.addPost(post).then(data => {
			commit('addPost', data.post);
		});
	},
	removePost({ commit }, id) {
		return Posts.removePost(id).then(data => {
			commit('removePost', id);
		});
	},
	getUsers({ commit }) {
		return Users.getUsers().then(data => commit('setUsers', data.users));
	},
	removeUser({ commit }, id) {
		return Users.removeUser(id).then(data => {
			commit('removeUser', id);
		});
	}	
};

const mutations = {
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
	},
	setPosts (state, posts) {
		state.posts = posts;
	},
	addPost (state, post) {
		state.posts.push(post);
	},
	removePost (state, id) {
		let i = state.posts.map(item => item._id).indexOf(id);
		state.posts.splice(i, 1);
	},
	setUsers (state, users) {
		state.users = users;
	},
	removeUser (state, id) {
		let i = state.users.map(item => item._id).indexOf(id);
		state.users.splice(i, 1);
	}	
};

export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters,
	modules: {
		feedback
	}
});