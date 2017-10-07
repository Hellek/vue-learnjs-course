<template>
	<div>
		<page-header :text="pageTitle"></page-header>
		<div>
			<!-- <pre>{{ userData }}</pre> -->
			<div v-for="(row, i) in userData" :key="row.id">
				{{i}}
				&nbsp;
				<input type="text" v-model="userData[i]" :value="userData[i]">
			</div>
		</div>
	</div>
</template>

<script>
import pageHeader from '../common/page-header.vue'
import axios from 'axios'
// import userlist from '../common/table.vue'

export default {
	name: 'single',
	data() {
		return {
			pageTitle: 'Страница клиента',
			userData: {}
		}
	},
	components: {
		pageHeader
	},
	methods: {
		getUserData() {
			let that = this;
			axios.get('http://localhost:7788/users/' + this.$route.params.id)
				.then(function(response) {
					return response.data;
				})
				.then(function(data) {
					that.userData = data;
				})
				.catch(function(error) {
					console.log('Catch Error: ', error);
				});
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
