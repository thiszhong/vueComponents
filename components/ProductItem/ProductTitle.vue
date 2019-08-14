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

<style>
.x-product-title {
  height: .44rem;
  display: flex;
  align-items: center;
  width: 100%;
}
.x-product-title img {
  width: .32rem;
  height: .32rem;
  vertical-align: middle;
  margin-right: 4px;
}
.x-product-title h4 {
  color: #333;
  margin: 0;
  font-size: .3rem;
  font-weight: 500;
  line-height: normal;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
