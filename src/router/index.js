import Vue from 'vue'
import Router from 'vue-router'
import UserList from '@/components/users/list'
import UserSingle from '@/components/users/single'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			//name: 'list',
			component: UserList
		},
		{
			path: '/user/:id',
			//name: 'single',
			component: UserSingle
		}
	]
})
