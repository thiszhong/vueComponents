<template>
  <div class="x-section-title">
    <h3 :class="{'xst-lump': type === 'lump', 'xst-circle': type === 'circle'}">
      <span>{{title}}</span>
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
  font-size: 18px;
  text-align: center;
  height: 40px;
  line-height: 40px;
}
.x-section-title h3 {
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin: 0;
  padding: 0;
  display: inline-block;
}
.x-section-title h3 span {
  display: inline-block;
  padding: 0 12px;
  vertical-align: middle;
  transform: translateY(1px);
}
.xst-lump::before, 
.xst-lump::after,
.xst-circle::before,
.xst-circle::after {
  content: '';
  display: inline-block;
  vertical-align: middle;
  width: 13px;
  height: 14px;
  background-size: contain!important;
}
.xst-circle::before,
.xst-circle::after {
  width: 20px;
  height: 9px;
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

