<template>
	<div>
		<page-header :text="pageTitle"></page-header>
		<userlist
			:users="users"
		></userlist>
	</div>
</template>

<script>
import axios from 'axios';
import pageHeader from '../common/page-header.vue'
import userlist from '../common/table.vue'

export default {
	name: 'list',
	components: {
		pageHeader,
		userlist
	},
	data: function() {
		return {
			users: [],
			pageTitle: 'Список пользователей',
			postsCount: '_limit=1'
		}
	},
	methods: {
		getUserlist() {
			let that = this;
			axios.get('http://localhost:7788/users?' + this.postsCount)
				.then((response) => {
					return response.data;
				})
				.then((data) => {
					that.users = data;
				})
				.catch((error) => {
					console.log(123, error);
				});
		}
	},
	mounted: function() {
		this.getUserlist();
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
a {
	color: #42b983;
}
</style>
