<template>
  <div class="zslider">
    <div class="zslider-container">
      <div v-for="(item, index) in list" :key="index" class="zslider-item" style="height: 600px">
        <img :src="item.cover" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  mounted () {
    console.log(this.$el.getBoundingClientRect())
  }
}
</script>

<style>
.zslider {
  position: relative;
  overflow: hidden;
  background: white;
}
.zslider-container {
  position: relative;
  overflow: hidden;
  width: 10000px;
}
.zslider-item {
  float: left;
  width: 100%;
}
</style>
