import Vue from 'vue';
import Vuex from 'vuex';

/*----------  Modules  ----------*/
import feedback from './modules/feedback';
import loading from './modules/loading';
import posts from './modules/posts';
import users from './modules/users';
import auth from './modules/auth';

Vue.use(Vuex);

const state = {

};

const getters = {

};

const actions = {

};

const mutations = {
	
};

export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters,
	modules: {
		feedback,
		loading,
		posts,
		users,
		auth
	}
});