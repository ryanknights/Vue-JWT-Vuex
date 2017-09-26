import Posts from '../../services/Posts';

const state = {
	posts: []
};

const getters = {
	posts () {
		return state.posts
	}
};

const actions = {
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
	}
};

const mutations = {
	setPosts (state, posts) {
		state.posts = posts;
	},
	addPost (state, post) {
		state.posts.push(post);
	},
	removePost (state, id) {
		let i = state.posts.map(item => item._id).indexOf(id);
		state.posts.splice(i, 1);
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}