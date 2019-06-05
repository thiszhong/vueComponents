<template>
  <div v-if="value" class="quan">
    <span>{{value}}</span>
  </div>
</template>

<script>
export default {
  name: 'Quan',
  props: {
    value: {
      type: String
    }
  }
}
</script>

<style scoped>
.quan {
  position: relative;
  color: white;
  height: .4em;
  padding: 0 .2em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #F72353, #FD935F);
  border-radius: .08em;
}
.quan span {
  font-size: .28em;
}
.quan::before, .quan::after {
  content: '';
  width: .16em;
  height: .16em;
  position: absolute;
  top: .12em;
  right: -.08em;
  background: white;
  border-radius: 50%;
}
.quan::before {
  left: -.08em;
}
</style>


