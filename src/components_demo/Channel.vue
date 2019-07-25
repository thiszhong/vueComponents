<template>
  <div>
    <div style="font-size: 16px;overflow: hidden;">
      <h3 style="float: left;margin: 0 0 20px;">设置个数：</h3>
      <div style="float: left;margin-right: 10px;">
        <label for="ione">1个</label>
        <input @change="onSelect(1)" type="radio" name="count" id="ione">
      </div>
      <div style="float: left;margin-right: 10px;">
        <label for="itwo">2个</label>
        <input @change="onSelect(2)" type="radio" name="count" id="itwo">
      </div>
      <div style="float: left;margin-right: 10px;">
        <label for="ithree">3个</label>
        <input @change="onSelect(3)" type="radio" name="count" id="ithree">
      </div>
      <div style="float: left;margin-right: 20px;">
        <label for="ifour">4个</label>
        <input @change="onSelect(4)" type="radio" name="count" id="ifour" checked>
      </div>
      
      <div v-show="displayCount === 3" style="float: left;margin-right: 5px;">
        <label for="ithree1">样式1</label>
        <input @change="setStyle(false)" type="radio" name="ithreeStyle" id="ithree1" checked>
      </div>
      <div v-show="displayCount === 3" style="float: left;margin-right: 5px;">
        <label for="ithree2">样式2</label>
        <input @change="setStyle(true)" type="radio" name="ithreeStyle" id="ithree2">
      </div>
    </div>

    <Channel @click="itemClick" :list="injectList" :horizontal="horizontal" :style="{padding: '20px'}" />

    <pre>
      &lt;Channel :list="injectList" :horizontal="horizontal" :style="{padding: '20px'}" /&gt;

      Props:
        list: Array 数据
        horizontal: Boolean 仅list.length === 3时有效，此个数下有两种排版样式
        style: Object(style) 根节点样式
      Event:
        click: params(item, index)
    </pre>
  </div>
</template>

<script>
import { Channel } from '../../index'

export default {
  components: {
    Channel
  },
  data () {
    return {
      list: [
        {image: 'https://img.alicdn.com/imgextra/i4/628491863/TB2lnPHXdsmyKJjSZFvXXcE.FXa_!!628491863.jpg_300x300.jpg'},
        {image: 'https://img.alicdn.com/imgextra/i4/628491863/TB2lnPHXdsmyKJjSZFvXXcE.FXa_!!628491863.jpg_300x300.jpg'},
        {image: 'https://img.alicdn.com/imgextra/i4/628491863/TB2lnPHXdsmyKJjSZFvXXcE.FXa_!!628491863.jpg_300x300.jpg'},
        {image: 'https://img.alicdn.com/imgextra/i4/628491863/TB2lnPHXdsmyKJjSZFvXXcE.FXa_!!628491863.jpg_300x300.jpg'},
      ],
      displayCount: 4,
      horizontal: false
    }
  },
  computed: {
    injectList () {
      return this.list.slice(0, this.displayCount)
    }
  },
  methods: {
    onSelect (count) {
      this.displayCount = count
    },
    setStyle (horizontal) {
      this.horizontal = horizontal
    },
    itemClick (item, index) {
      alert('Click ' + index + ' itemData: ' + JSON.stringify(item))
    }
  }
}
</script>

