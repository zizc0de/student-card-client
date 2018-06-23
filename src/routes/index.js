import { Home, Login, Dashboard, Students } from 'pages';
import StudentDetail from 'components/StudentDetail';

const routes = [
	{
		path: '/dashboard',
		component: Dashboard
	},
	{
		path: '/students',
		component: Students
	},	
	{
		path: '/login',
		component: Login
	},
	{
		exact: true,
		path: '/detail/:slug',
		component: StudentDetail
	},
	{
		exact: true,
		path: '/',
		component: Home
	},
]

export default routes;