<template>
  <div>
    <x-image-text @click="onClick" :image="image" :text="text" :imgStyle="imgStyle" />

    <pre>
      &lt;x-image-text @click="onClick" :image="image" :text="text" :imgStyle="imgStyle" /&gt;

      Props:
        image: String(url) 不传或为空则不显示图片
        text: String 
        boxStyle: Object 其中css名 多段的可以使用驼峰式或加引号
        imgStyle: Object
        textStyle: Object
      Event:
        click
    </pre>
  </div>
</template>

<script>
import { XImageText } from '../../index'

export default {
  components: {
    XImageText
  },
  data () {
    return {
      image: 'http://img.alicdn.com/imgextra/i3/880734502/O1CN011j7xYfD3GbPSRtq_!!880734502.jpg_300x300.jpg',
      text: '我唤来了云海，如洁如梦幻，我跑灭了星繁。似灭似绚烂，我亲吻了河川，我亲吻了河川，我亲吻',
      imgStyle: {
        height: 0,
        paddingBottom: '34%'
      }
    }
  },
  methods: {
    onClick () {
      alert('You clicked')
    }
  }
}
</script>

