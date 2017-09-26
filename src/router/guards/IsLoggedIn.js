import store from '../../store/store';

export default (to, from, next) => {
	if (!store.getters['auth/loggedin']) {
		store.dispatch('auth/logout');
		return next('/login');		
	}

	if (to.meta.isAdmin === undefined || !to.meta.isAdmin) {
		return next();
	}

	if (!store.getters['auth/isAdmin']) {
		store.dispatch('feedback/setDelayedFeedback', 
			{feedback: { message: 'You are not authorized to access this restricted area', type: 'danger'}}
		);
		return next('/');
	}

	return next();
}