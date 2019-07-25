<template>
  <button v-if="value" class="x-zhuan" :style="{height: small ? '.32rem' : '.4rem'}">{{value}}</button>
</template>

<script>
export default {
  name: 'XZhuan',
  props: {
    value: {
      type: String
    },
    small: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.x-zhuan {
  font-size: .24rem;
  height: .4rem;
  min-height: 16px;
  line-height: normal;
  color: #FF2C23;
  padding: 0 .1rem;
  border: 0;
  border-radius: 2px;
  outline: none;
  background: #FFE7E6;
}
</style>
