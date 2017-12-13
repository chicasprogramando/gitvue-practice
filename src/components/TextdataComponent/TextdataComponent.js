export default {
	name: 'TextdataComponent',
	props:[
		'textoutput'
	],
	data() {
		return {
            title: 'Textdata component',
            textfieldcontent: '',
		};
	},
	created() {
		console.log('Textdata component created')
	},
	mounted() {
		console.log('Textdata component mounted')
	},
	updated() {
		console.log('Textdata component updated')
    }
};