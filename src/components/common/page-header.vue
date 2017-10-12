<template>
	<h1>
		{{ text }}
	</h1>
</template>

<script>
export default {
	name: 'page-header',
	props: {
		text: {
			type: String,
			required: true
		}
	}
}
</script>

<style scoped>
	h1 {
		text-align: center;
	}
</style>

