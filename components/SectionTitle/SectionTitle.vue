<template>
  <div class="x-section-title">
    <h3 :class="{'xst-lump': type === 'lump', 'xst-circle': type === 'circle'}">
      <span style="vertical-align: middle;">{{title}}</span>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'XSectionTitle',
  props: {
    title: {
      type: String
    },
    type: {
      type: String,
      default: 'lump'
    }
  }
}
</script>

<style>
.x-section-title {
  font-size: 15px;
  text-align: center;
  height: 40px;
  line-height: 40px;
}
.x-section-title h3 {
  font-size: 15px;
  font-weight: 700;
  color: #0D0D0D;
  margin: 0;
  padding: 0;
  display: inline-block;
}
.xst-lump::before, 
.xst-lump::after,
.xst-circle::before,
.xst-circle::after {
  content: '';
  display: inline-block;
  vertical-align: middle;
  width: 25px;
  height: 40px;
  background-size: contain!important;
}
.xst-lump::before {
  background: url('./t2-l.png') center no-repeat;
}
.xst-lump::after {
  background: url('./t2-r.png') center no-repeat;
}
.xst-circle::before {
  background: url('./t1-l.png') center no-repeat;
}
.xst-circle::after {
  background: url('./t1-r.png') center no-repeat;
}
</style>

