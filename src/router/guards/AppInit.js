import store from '../../store/store';
import Auth from '../../services/Auth';

export default (to, from, next) => {
	if (!store.state.appLoading) {
		return next();
	}

	store.dispatch('setLoading', true);

	setTimeout(() => {
	  const token = localStorage.getItem('accessToken');

	  if (token) {
	  	store.dispatch('authenticate', token)
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
	}, 2000);
}