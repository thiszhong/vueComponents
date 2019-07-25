<template>
  <span class="x-product-text" :class="{'x-text_linethrough': lineThrough}"
    v-html="value"></span>
</template>

<script>
export default {
  name: 'XProductText',
  props: {
    value: {
      type: String
    },
    lineThrough: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.x-product-text {
  font-size: .24rem;
  color: #999;
}
.x-text_linethrough {
  text-decoration: line-through;
}
</style>
