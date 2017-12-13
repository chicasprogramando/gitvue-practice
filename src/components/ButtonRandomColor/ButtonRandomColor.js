export default {
  name: 'ButtonRandomColor',
  methods:{
    generateColor(){
      this.$emit('generateColor','#'+(Math.random()*0xFFFFFF<<0).toString(16))
    }
  }
};
