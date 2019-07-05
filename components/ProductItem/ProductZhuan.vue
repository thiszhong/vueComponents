<template>
  <button v-if="value" class="x-zhuan">{{value}}</button>
</template>

<script>
export default {
  name: 'XZhuan',
  props: {
    value: {
      type: String
    }
  }
}
</script>

<style>
.x-zhuan {
  font-size: 13px;
  line-height: 1.2;
  color: #F72353;
  padding: 0 .5em;
  border: 1px solid #F72353;
  border-radius: 15px;
  outline: none;
  background: transparent;
}
.x-zhuan::before {
  content: '';
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 100%;
  margin-top: 1px;
}
</style>
