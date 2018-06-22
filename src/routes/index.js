import { Home, Dashboard, Login } from 'pages';

const routes = [
	{
		path: '/dashboard',
		component: Dashboard
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/',
		component: Home
	},
]

export default routes;