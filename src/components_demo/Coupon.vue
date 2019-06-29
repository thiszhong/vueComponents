<template>
  <div>
    <Coupon 
      @click="click"
      :amount="5" 
      start_time="2019-06-01" end_time="2019-06-02"
      bgColor="#f6f6f6"
    />

    <pre>
      &lt;Coupon 
        @click="click"
        :amount="5" 
        start_time="2019-06-01" end_time="2019-06-02"
        bgColor="#f6f6f6"
      /&gt;

      Props:
        amount: Number 券面值 default: 0, &lt;= 0 则不显示
        start_time, end_time
        bgColor: String(color) 整体以及6个圆角的背景色 default: white
      Event:
        click
    </pre>
  </div>
</template>

<script>
import { Coupon } from '../../index'

export default {
  components: {
    Coupon
  },
  methods: {
    click () {
      alert('You clicked')
    }
  }
}
</script>

