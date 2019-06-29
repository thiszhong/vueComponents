<template>
  <div>
    <pre>
      &lt;Slider ref="mySlider" :list="list" :autoplay="3000" /&gt;

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
export default {
}
</script>
