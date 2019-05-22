<template>
  <div>
    <coupon-filter :checked="true" @change="onChange" />
    <p style="text-align: right;font-size: 14px;" :style="{color: status ? 'green': '#666'}">isChecked: {{status}}</p>

    <pre>
      &lt;coupon-filter :checked="true" @change="onChange" /&gt;

      Props:
        checked: Boolean
      Event:
        onChange: param: isChecked
    </pre>
  </div>
</template>

<script>
import { CouponFilter } from '../../index'

export default {
  components: {
    CouponFilter
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

