<!-- 导入外部链接组件 -->
<script lang="ts">
import { h } from 'vue'

export default {
  setup(props) {
    let result = () => { }
    if (props.tag == 'link') result = () => h(props.tag, { rel: 'stylesheet', href: props.src })
    else result = () => h(props.tag, { src: props.src })
    return result
  },
  props: {
    src: { type: String, required: true },
    tag: { type: String, default: 'link' }
  }
}
</script>