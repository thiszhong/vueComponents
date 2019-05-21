<template>
  <div>
    <x-entry :list="list" :column="4" borderRadius="50%" @click="entryClick" />

    <pre>
      &lt;x-entry :list="list" :column="4" borderRadius="50%" @click="entryClick" /&gt;

      Props:
        list: Array required
        boxStyle: Object(style) 
        column: Number: 每行显示几个 default: 4
        borderRadius: String(px或%) icon圆角 default: 0px
      Event:
        click: params(item, index)
    </pre>
  </div>
</template>

<script>
import { XEntry } from '../../index'

export default {
  components: {
    XEntry
  },
  data () {
    return {
      list: [
        {name: '愚蠢', image: 'https://img.alicdn.com/imgextra/i3/42843867/O1CN01BSNwjh1eR84mgEUdW_!!42843867.jpg_300x300.jpg'},
        {name: '愚蠢', image: 'https://img.alicdn.com/imgextra/i3/42843867/O1CN01BSNwjh1eR84mgEUdW_!!42843867.jpg_300x300.jpg'},
        {name: '愚蠢', image: 'https://img.alicdn.com/imgextra/i3/42843867/O1CN01BSNwjh1eR84mgEUdW_!!42843867.jpg_300x300.jpg'},
        {name: '愚蠢', image: 'https://img.alicdn.com/imgextra/i3/42843867/O1CN01BSNwjh1eR84mgEUdW_!!42843867.jpg_300x300.jpg'},
        {name: '愚蠢', image: 'https://img.alicdn.com/imgextra/i3/42843867/O1CN01BSNwjh1eR84mgEUdW_!!42843867.jpg_300x300.jpg'},
        {name: '愚蠢', image: 'https://img.alicdn.com/imgextra/i3/42843867/O1CN01BSNwjh1eR84mgEUdW_!!42843867.jpg_300x300.jpg'},
      ]
    }
  },
  methods: {
    entryClick (item, index) {
      alert(`第${index}个 ` + JSON.stringify(item))
    }
  }
}
</script>

