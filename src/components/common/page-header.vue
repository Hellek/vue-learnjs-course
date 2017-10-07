<template>
	<h1 id="page-header">
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

<style>
	h1 {
		text-align: center;
	}
</style>

