import store from '../../store/store';

export default (to, from, next) => {
	if (!store.getters.loggedin) {
		store.dispatch('logout');
		return next('/login');		
	}

	if (to.meta.isAdmin === undefined || !to.meta.isAdmin) {
		return next();
	}

	if (!store.getters.isAdmin) {
		return next('/');
	}

	return next();
}