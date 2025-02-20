import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
const routes: RouteRecordRaw[] = [
	{
		path: '/login',
		name: 'authLogin',
		component: () => import('../views/Hospital/Login.vue'),
		meta: {
			title: 'Login Page',
		},
	},
	{
		path: '/hospital-registration',
		name: 'hospitalRegistration',
		component: () => import('../views/Hospital/HospitalRegistration.vue'),
		meta: {
			title: 'Hospital Registration Page',
		},
	},

	{
		path: '/hospital-dashboard',
		name: 'hospitalDashboard',
		component: () => import('../views/Hospital/HospitalDashboard.vue'),
		meta: {
			title: 'Hospital DashBoard',
		},
	},

	{
		path: '/hcw-registration',
		name: 'hcwRegistration',
		component: () => import('../views/Hospital/HCWAuth.vue'),
		meta: {
			title: 'Healthcare Workers Registration',
		},
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;
