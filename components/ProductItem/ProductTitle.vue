<template>
  <div class="x-product-title">
    <img v-if="icon" :src="icon" alt="">
    <h4>{{title}}</h4>
  </div>
</template>

<script>
export default {
  name: 'XProductTitle',
  props: {
    icon: {
      type: String
    },
    title: {
      type: String
    }
  }
}
</script>

<style lang="less">
.x-product-title {
  height: 26px;
  display: flex;
  align-items: center;
  width: 100%;
  img {
    width: 15px;
    height: 15px;
    vertical-align: middle;
    margin-right: 5px;
  }
  h4 {
    margin: 0;
    font-size: 15px;
    font-weight: 500;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
