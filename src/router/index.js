import Vue from 'vue'
import Router from 'vue-router'
import UserList from '@/components/users/list.vue'
import UserSingle from '@/components/users/single.vue'
import TextareaJson from '@/components/other/textarea-json.vue'

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
		},
		{
			path: '/textarea-json',
			name: 'TextareaJson',
			component: TextareaJson
		}
	]
})
