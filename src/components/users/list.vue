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
	data: function() {
		return {
			users: [
				{
					"id": 1,
					"name": "roy",
					"location": "india"
				},
				{
					"id": 2,
					"name": "sam",
					"location": "wales"
				},
				{
					"name": "ii",
					"location": "la",
					"id": 7
				},
				{
					"name": "Shona",
					"location": "LA",
					"id": 8
				},
				{
					"name": "Shona",
					"location": "LA",
					"id": 9
				}
			],
			pageTitle: 'Список пользователей'
		}
	},
	components: {
		pageHeader,
		userlist
	},
	methods: {
		getUserlist() {
			let that = this;
			axios.get('http://localhost:7788/users')
				.then(function(response) {
					return response.data;
				})
				.then(function(data) {
					that.users = data;
				})
				.catch(function(error) {
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
