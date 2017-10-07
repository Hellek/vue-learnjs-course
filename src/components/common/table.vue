<template>
	<table id="userlist">
		<thead>
			<tr>
				<td>fullName</td>
				<td>age</td>
				<td>company</td>
				<td>phone</td>
			</tr>
		</thead>
		<tbody>
			<tr v-for="user in users" :key="user.id">
				<td>
					<a :href="'user/' + user.id">
						{{ user.firstName }} {{ user.lastName }}
					</a>
				</td>
				<td>{{ user.age }}</td>
				<td>{{ user.company }}</td>
				<td>{{ user.phone }}</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
export default {
	name: 'userlist',
	props: {
		users: {
			type: Array
		}
	}
}
</script>

<style>
</style>
