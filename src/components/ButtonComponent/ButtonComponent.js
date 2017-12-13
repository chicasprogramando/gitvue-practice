export default {
	name: 'ButtonComponent',
	props:[
		'textinput'
	],
	data() {
		return {
			title: 'Button component',
		};
	},
	created() {
		console.log('Button component created')
	},
	mounted() {
		console.log('Button component mounted')
	},
	updated() {
		console.log('Button component updated')
	},
	methods:{
		savefieldtext: function() {
			this.$emit('output',this.textinput)
		}
	}
};