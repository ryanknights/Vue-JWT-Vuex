import store from '../../store/store';
import Auth from '../../services/Auth';

export default (to, from, next) => {

	if (!store.state.loading.appLoading) {
		return next();
	}

	const accessToken = localStorage.getItem('accessToken');
	const refreshToken = localStorage.getItem('refreshToken');

	if (!accessToken) {
		store.dispatch('loading/setAppLoading', false);
		return next();
	}

	store.commit('auth/setAccessToken', accessToken);
	store.commit('auth/setRefreshToken', refreshToken);

	store.dispatch('loading/setLoading', true);
	store.dispatch('auth/authenticate')
  		.then(() => {
				store.dispatch('loading/setAppLoading', false);
				store.dispatch('loading/setLoading', false);
				next();
  		})
  		.catch((error) => {
				store.dispatch('loading/setAppLoading', false);
				store.dispatch('loading/setLoading', false);
				store.dispatch('auth/logout');
				next('/login');
  		})
}