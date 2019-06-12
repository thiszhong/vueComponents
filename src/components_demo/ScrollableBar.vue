<template>
  <div>
    <scrollable-bar @click="itemClick" :list="list" :index="3" />

    <pre>
      &lt;scrollable-bar 
        @click="itemClick" 
        :list="list" 
        :index="3" 
      /&gt;

      Props:
        list: Array 数据
        index: Number 选中项索引
        style: Object(style) 根节点样式
      Event:
        click: params(item, index)
    </pre>
  </div>
</template>

<script>
import { ScrollableBar } from '../../index'

export default {
  components: {
    ScrollableBar
  },
  data () {
    return {
      list: [
        {name: '女装'},
        {name: '男装'},
        {name: '女装'},
        {name: '女装'},
        {name: '女装'},
        {name: '女装'},
        {name: '女装'},
        {name: '女装'},
        {name: '女装'},
      ]
    }
  },
  methods: {
    itemClick (item, index) {
      alert('index: ' + index + ' itemData: ' + JSON.stringify(item))
    }
  }
}
</script>

