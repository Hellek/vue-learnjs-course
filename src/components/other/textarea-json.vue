<template>
	<div>
		<textarea v-model="myTestAsString"></textarea>
		<pre>{{ errors }}</pre>
		<pre>{{ myTestJason }}</pre>
	</div>
</template>

<script>
export default {
	name: 'TextareaJson',
	data: function() {
		return {
			myTestAsString: '',
			errors: [],
			myTestJason: {
				"personal": {
					"firstName": "Vanya",
					"lastname": "Petrov",
					"age": 39
				},
				"address": {
					"street": "Veteranov",
					"house": 56,
					"flat": 3
				},
				"favoriteFood": [
					"selyodka",
					"makaroni",
					"shashlik"
				]
			}
		}
	},
	watch: {
		myTestAsString: function() {
			this.converseStringToJSON();
			this.prettifyJSONtoString();
		}
	},
	methods: {
		prettifyJSONtoString() {
			this.myTestAsString = JSON.stringify(this.myTestJason, null, "\t")
		},
		converseStringToJSON() {
			try {
				this.myTestJason = JSON.parse(this.myTestAsString)
			} catch (e) {
				this.errors.push(e.message);
			}
		}
	},
	mounted: function() {
		this.prettifyJSONtoString();
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
textarea {
	width: 500px;
	height: 300px;
	white-space: pre-line;
}

textarea,
pre {
	-moz-tab-size: 2;
	-o-tab-size: 2;
	tab-size: 2;
}
</style>
