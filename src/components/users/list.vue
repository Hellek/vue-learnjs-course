<template>
	<div>
		<userlist></userlist>
	</div>
</template>

<script>
import userlist from '../common/table.vue'

export default {
	name: 'list',
	data() {
		return {
			msg: 'List page'
		}
	},
	components: {
		userlist
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
a {
	color: #42b983;
}
</style>
