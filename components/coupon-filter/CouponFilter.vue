<template>
  <div class="coupon-filter">
    <span>仅显示有券商品</span>
    <van-switch v-model="innerChecked" active-color="#07c160" @change="onChange" />
  </div>
</template>

<script>
import { Switch } from 'vant';

export default {
  name: 'CouponFilter',
  components: {
    VanSwitch: Switch
  },
  props: {
    checked: {
      type: Boolean,
      default: null
    }
  },
  data () {
    return {
      innerChecked: false
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
    onChange (val) {
      this.$emit('change', val)
    }
  }
}
</script>

<style scoped>
.coupon-filter {
  font-size: 14px;
  height: 34px;
  padding: 0 11px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: white;
}
</style>

