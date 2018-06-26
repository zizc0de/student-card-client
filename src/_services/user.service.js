import API from 'api';

function login(username, password) {
	return API.post('auth/login', { username: username, password: password })
	.then((response) => {
		let result = response.data;
		if (result.success && result.token) {
			localStorage.setItem('student_token', result.token);
		}
		return result;
	})
	.catch(error => {
		return Promise.reject(error.response);
	});
}

function logout() {
	localStorage.removeItem('student_token');
}

export const userService = {
	login,
	logout
}