import { Home, Login, Dashboard, Students, StudentForm, Users, UserForm } from 'pages';
import StudentDetail from 'components/StudentDetail';

const routes = [
	{
		path: '/dashboard',
		component: Dashboard
	},
	{
		path: '/students/add',
		component: StudentForm
	},	
	{
		path: '/students',
		component: Students
	},
	{
		path: '/users/add',
		component: UserForm
	},	
	{
		path: '/users',
		component: Users
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