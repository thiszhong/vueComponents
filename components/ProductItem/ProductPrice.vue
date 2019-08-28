<template>
  <div class="x-product-price">
    <span v-if="!lite">{{value ? '券后' : ''}}</span><i>&yen;</i>{{value}}
  </div>
</template>

<script>
export default {
  name: 'XProductPrice',
  props: {
    lite: {
      type: Boolean,
      default: false
    },
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

<style>
.x-product-price {
  display: inline-block;
  font-size: .4rem;
  font-weight: 500;
  color: #FE3C4A;
  line-height: normal;
}
.x-product-price span {
  font-size: .24rem;
  color: #999;
  font-weight: normal;
  vertical-align: middle;
}
.x-product-price i {
  font-style: normal;
  font-size: .24rem;
  display: inline-block;
  transform: scale(.92) translateY(4%);
}
</style>
