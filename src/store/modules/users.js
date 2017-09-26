import Users from '../../services/Users';

const state = {
	users: []
};

const getters = {
	users () {
		return state.users
	}
};

const actions = {
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
	setUsers (state, users) {
		state.users = users;
	},
	removeUser (state, id) {
		let i = state.users.map(item => item._id).indexOf(id);
		state.users.splice(i, 1);
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}