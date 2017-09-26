const state = {
	appLoading: true,
	loading: false
};

const getters = {
	isLoading () {
		return state.loading;
	},
	isAppLoading () {
		return state.appLoading;
	}
};

const actions = {
	setLoading({ commit }, status) {
		commit('setLoading', status);
	},
	setAppLoading({ commit }, status) {
		commit('setAppLoading', status);
	}
};

const mutations = {
	setLoading (state, status) {
		state.loading = status;
	},
	setAppLoading (state, status) {
		state.appLoading = status;
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}