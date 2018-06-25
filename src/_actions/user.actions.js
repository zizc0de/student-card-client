import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

function login(username, password) {
	return dispatch => {
		dispatch(request({ username }));

		userService.login(username, password)
		.then(result => {
			if (result.success) {
				dispatch(success(result));
				dispatch(alertActions.success(result.message));
				history.push('/dashboard');
			}else{
				dispatch(alertActions.error(result.message));
			}
			// console.log(user);
		},
		error => {
			dispatch(failure(error));
			// console.log(error);
		}
		);
	}
	
	function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
	function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
	function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

export const userActions = {
	login
};