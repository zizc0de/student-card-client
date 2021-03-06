import { Home, Login, Dashboard, Profile, Students, StudentForm, Users, UserForm } from 'pages';
import StudentDetail from 'components/StudentDetail';

const routes = [
	{
		path: '/dashboard',
		component: Dashboard
	},
	{
		path: '/profile',
		component: Profile
	},
	{
		path: '/students/add',
		component: StudentForm
	},
	{
		path: '/students/edit/:id',
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
		path: '/users/edit/:id',
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
		path: '/student/:id',
		component: StudentDetail
	},
	{
		path: '/',
		component: Home
	},
]

export default routes;