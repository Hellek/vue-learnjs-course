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
			//name: 'Hello22',
			component: UserList
		},
		{
			path: '/user',
			//name: 'Hello',
			component: UserSingle
		}
	]
})
