<template>
  <button v-if="value" class="x-product-quan">
    {{value}}
  </button>
</template>

<script>
export default {
  name: 'XProductQuan',
  props: {
    value: {
      type: String
    }
  }
}
</script>

<style scoped>
.x-product-quan {
  position: relative;
  font-size: .24rem;
  color: white;
  padding: 0 .14rem;
  height: .36rem;
  min-height: 18px;
  line-height: normal;
  background-image: linear-gradient(to right, #FF2C23, #FF837D);
  border-radius: 3px;
  border: 0;
  outline: none;
}
.x-product-quan::before, .x-product-quan::after {
  content: '';
  width: .12rem;
  height: .12rem;
  position: absolute;
  top: .12rem;
  right: -.06rem;
  background: white;
  border-radius: 50%;
}
.x-product-quan::before {
  left: -.06rem;
}
</style>


