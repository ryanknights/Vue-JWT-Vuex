import store from '../../store/store';

export default (to, from, next) => {
	if (store.state.auth.loggedin) {
		next('/');
	} else {
		next();
	}
}