<template>
  <div v-if="value" class="quan">
    <span>{{value}}元券</span>
  </div>
</template>

<script>
export default {
  name: 'Quan',
  props: {
    value: {
      type: Number,
      default: () => 0
    }
  }
}
</script>

<style scoped>
.quan {
  position: relative;
  font-size: .9em;
  color: white;
  height: 22px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #ff9000, #ff5001);
  border-radius: 5px;
}
.quan::before, .quan::after {
  content: '';
  width: 8px;
  height: 8px;
  position: absolute;
  top: 7px;
  right: -4px;
  background: white;
  border-radius: 50%;
}
.quan::before {
  left: -4px;
}
</style>


