<template>
  <span class="x-product-price">
    <i :class="{'x-symbol_small': smallSymbol}">&yen;</i>
    {{value}}
  </span>
</template>

<script>
export default {
  name: 'XProductPrice',
  props: {
    value: {
      type: String
    },
    smallSymbol: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="less">
.x-product-price {
  font-size: 18px;
  font-weight: 600;
  color: #F72353;
  line-height: 1;
  i {
    font-style: normal;
  }
}
.x-symbol_small {
  font-size: 12px;
}
</style>
