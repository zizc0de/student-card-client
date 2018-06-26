import { saveState } from '../_helpers/state.loader';
import axios from 'axios';
import API from 'api';

function login(username, password) {
	return API.post('auth/login', { username: username, password: password })
	.then((response) => {
		let result = response.data;
		if (result.success && result.token) {
			localStorage.setItem('student_token', result.token);
      		axios.defaults.headers.common['Authorization'] = `Bearer ${result.token}`;
			saveState({
				authentication: {
					loggedIn: true
				}
			});
		}
		return result;
	})
	.catch(error => {
		return Promise.reject(error.response);
	});
}

function logout() {
	localStorage.removeItem('student_token');
	saveState({
		authentication: {
			loggedIn: false
		}
	});
}

export const userService = {
	login,
	logout
}