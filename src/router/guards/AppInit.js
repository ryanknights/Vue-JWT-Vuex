import store from '../../store/store';
import Auth from '../../services/Auth';

export default (to, from, next) => {
	if (!store.state.appLoading) {
		return next();
	}

	const accessToken = localStorage.getItem('accessToken');
	const refreshToken = localStorage.getItem('refreshToken');

	if (!accessToken) {
		store.dispatch('setAppLoading', false);
		return next();
	}

	store.commit('setAccessToken', accessToken);
	store.commit('setRefreshToken', refreshToken)

	store.dispatch('setLoading', true);
	store.dispatch('authenticate')
  		.then(() => {
				store.dispatch('setAppLoading', false);
				store.dispatch('setLoading', false);
				next();
  		})
  		.catch((error) => {
				store.dispatch('setAppLoading', false);
				store.dispatch('setLoading', false);
				store.dispatch('logout');
				next('/login');
  		})
}