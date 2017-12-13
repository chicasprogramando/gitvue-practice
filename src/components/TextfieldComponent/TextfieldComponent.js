import TextdataComponent from '@/components/TextdataComponent/TextdataComponent.vue'

export default {
    name: 'TextfieldComponent',
    components: {
        TextdataComponent
    },
	data() {
		return {
			textfieldcontent:'',
			value:'',
            title: 'Textfield component',
		};
	},
	methods: {
		updateValue(value){
			this.$emit('input',this.textfieldcontent),
			console.log(value);
		  },
	},
	created() {
		console.log('Textfield component created')
	},
	mounted() {
		console.log('Textfield component mounted')
	},
	updated() {
		console.log('Textfield component updated')
    }
};

