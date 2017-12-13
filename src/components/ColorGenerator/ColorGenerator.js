import ButtonRandomColor from "@/components/ButtonRandomColor/ButtonRandomColor.vue"
import ColorSquare from "@/components/ColorSquare/ColorSquare.vue"

export default {
  name: "color-generator",
  data(){
    return {
      color: '#000'
    };
  },
  components: {
    ButtonRandomColor,
    ColorSquare,
  },
}
