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
  font-size: 13px;
  color: white;
  padding: 0 5px;
  height: 20px;
  background-image: linear-gradient(to right, #F72353, #FD935F);
  border-radius: 4px;
  border: 0;
  outline: none;
}
.x-product-quan::before, .x-product-quan::after {
  content: '';
  width: 8px;
  height: 8px;
  position: absolute;
  top: 6px;
  right: -4px;
  background: white;
  border-radius: 50%;
}
.x-product-quan::before {
  left: -4px;
}
</style>


