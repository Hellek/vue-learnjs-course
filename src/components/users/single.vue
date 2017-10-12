<template>
	<div>
		<page-header :text="pageTitle"></page-header>
		<div>
			<!-- <pre>{{ userData }}</pre> -->
			<div v-for="(row, i) in userData" :key="row.id">
				{{i}}&nbsp;<input type="text" v-model="userData[i]" :value="userData[i]">
			</div>
			<input type="button" @click="updateUser" value="Update user">
			<input type="button" @click="removeUser" value="Delete user">
		</div>
	</div>
</template>

<script>
import pageHeader from '../common/page-header.vue'
import axios from 'axios'
// import userlist from '../common/table.vue'

export default {
	name: 'single',
	components: {
		pageHeader
	},
	data() {
		return {
			pageTitle: 'Страница клиента',
			userData: {}
		}
	},
	methods: {
		getUserData() {
			let that = this;
			axios.get(this.thisUserURL)
				.then(function(response) {
					return response.data;
				})
				.then(function(data) {
					that.userData = data;
				})
				.catch(function(error) {
					console.log('Catch Error: ', error);
				});
		},
		removeUser() {
			let that = this;
			axios.delete(this.thisUserURL)
				.then((response) => {
					if (response.status == 200) {
						location.href = location.origin + '/';
					}
				})
		},
		updateUser() {
			axios.patch(this.thisUserURL, this.userData)
				.then((response) => {
					console.log(response)
				})
		}
	},
	computed: {
		thisUserURL() {
			return 'http://localhost:7788/users/' + this.$route.params.id;
		}
	},
	mounted: function() {
		this.getUserData();
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
a {
	color: #42b983;
}
</style>
