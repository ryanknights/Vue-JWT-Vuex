const state = {
  feedback: {
    message: false,
    type: false,
  },
};

const getters = {
  feedback(state) {
    return state.feedback;
  },
  feedbackClass() {
    const { type } = state.feedback;
    return `alert alert-${type}`;
  },
};

const actions = {
  setFeedback({ commit }, data) {
    commit('setFeedback', data);
  },
  setDelayedFeedback({ commit }, data) {
    setTimeout(() => {
      commit('setFeedback', data.feedback);
    }, data.delay || 10);
  },
  clearFeedback({ commit }) {
    commit('clearFeedback');
  },
};

const mutations = {
  setFeedback(state, data) {
    state.feedback.message = data.message;
    state.feedback.type = data.type;
  },
  clearFeedback(state) {
    state.feedback.message = false;
    state.feedback.type = false;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
