<template>
  <div>
    <x-coupon-filter :checked="true" @change="onChange" />
    <p style="text-align: right;font-size: 14px;" :style="{color: status ? 'green': '#666'}">isChecked: {{status}}</p>

    <pre>
      &lt;x-coupon-filter :checked="true" @change="onChange" /&gt;

      Props:
        checked: Boolean
      Event:
        onChange: param: isChecked
    </pre>
  </div>
</template>

<script>
import XCouponFilter from '../../components/CouponFilter'

export default {
  components: {
    XCouponFilter
  },
  data () {
    return {
      status: true
    }
  },
  methods: {
    onChange (val) {
      this.status = val
    }
  }
}
</script>

