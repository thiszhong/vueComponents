<template>
  <div @click.stop="onChange" class="x-coupon-filter">
    <span>仅显示有券商品</span>
    <div class="x-cf-switch">
      <div class="x-cf-switch-block" :style="{ width }"></div>
      <div class="x-cf-switch-handle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XCouponFilter',
  props: {
    checked: {
      type: Boolean,
      default: null
    }
  },
  data () {
    return {
      innerChecked: true
    }
  },
  computed: {
    width () {
      return this.innerChecked ? '0px' : '32px'
    }
  },
  watch: {
    checked (val) {
      this.innerChecked = val
    }
  },
  mounted () {
    if (this.checked !== null) this.innerChecked = this.checked
  },
  methods: {
    onChange () {
      const val = !this.innerChecked
      this.innerChecked = val
      this.$emit('change', val)
    }
  }
}
</script>

<style>
.x-coupon-filter {
  font-size: 14px;
  height: 34px;
  padding: 0 11px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: white;
}
.x-cf-switch {
  width: 60px;
  height: 28px;
  background: #07c160;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid #07c160;
  box-sizing: border-box;
}
.x-cf-switch-handle {
  float: right;
  width: 26px;
  height: 26px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 1px 2px #ccc;
  position: relative;
  z-index: 1;
}
.x-cf-switch-block {
  position: relative;
  float: right;
  height: 100%;
  width: 30px;
  background: white;
  border-radius: 0 13px 13px 0;
  transition: width .3s;
}
.x-cf-switch-block::before {
  content: '';
  width: 13px;
  height: 26px;
  background: white;
  position: absolute;
  left: -13px;
  top: 0;
}
</style>

