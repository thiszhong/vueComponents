<template>
  <div>
    <slider ref="mySlider" 
      @click="itemClick"
      :list="list" 
      :autoplay="3000" 
      :aspect-ratio="2.89"
    />

    <pre>
      &lt;slider ref="mySlider" :list="list" :autoplay="3000" /&gt;

      Props:
        list: Array: 轮播数据
        autoplay: Number: 自动轮播间隔（ms）,不设或设为0则不自动轮播
        aspect-ratio: Number: 宽高比 default: 2.89
        indicator-color: String(color): 指示焦点颜色 default: #F72353
      Event:
        click: params(item, index)
        this.$refs.mySlider.swipeTo(index)
    </pre>
  </div>
</template>
<script>
import { Slider } from '../../index'

export default {
  components: {
    Slider
  },
  data () {
    return {
      list: [
        {image: 'https://img.alicdn.com/imgextra/i4/1771518377/O1CN01yLngD82BkiLHgwkTP_!!1771518377.jpg_200x200.jpg'},
        {image: 'https://img.alicdn.com/imgextra/i3/1082189052/O1CN01C5pRIC2GjrhQzezEB_!!1082189052.jpg_200x200.jpg'},
      ]
    }
  },
  methods: {
    itemClick (item, index) {
      alert(`第${index}张，itemData: ${JSON.stringify(item)}`)
    }
  }
}
</script>
