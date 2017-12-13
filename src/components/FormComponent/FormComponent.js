import ButtonComponent from '@/components/ButtonComponent/ButtonComponent.vue'
import TextfieldComponent from '@/components/TextfieldComponent/TextfieldComponent.vue'
import LabelComponent from '@/components/LabelComponent/LabelComponent.vue'
import TextdataComponent from '@/components/TextdataComponent/TextdataComponent.vue'

export default {
  name: 'FormComponent',
  components: {
		ButtonComponent,
		TextfieldComponent,
        LabelComponent,
        TextdataComponent
  },
  data() {
    return {
            title: 'Form component',
            textinput:'',
            textoutput:''
        };
    },
    created() {
        console.log('Form component created')
    },
    mounted() {
        console.log('Form component mounted')
    },
    updated() {
        console.log('Form component updated')
    },
	methods: {
		exampleAction() {
			console.log('Hey you!')
		},
	},
};