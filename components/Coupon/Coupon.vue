<template>
  <div v-if="amount > 0" @click="onClick" class="x-coupon" :style="{background: bgColor}">
    <div class="xc-inner">
      <div class="x-coupon-l">
        <p style="font-size: .36rem;font-weight: 700;">{{amount}}元优惠券</p>
        <p style="font-size: .24rem;">{{validity}}</p>
      </div>
      <div class="x-coupon-r">
        <span style="font-size: .3rem;font-weight: 700;">立即领取</span>
      </div>
    </div>
    <div class="xc-badge xcb-lt" :style="{background: bgColor}"></div>
    <div class="xc-badge xcb-lb" :style="{background: bgColor}"></div>
    <div class="xc-badge xcb-mt" :style="{background: bgColor}"></div>
    <div class="xc-badge xcb-mb" :style="{background: bgColor}"></div>
    <div class="xc-badge xcb-rt" :style="{background: bgColor}"></div>
    <div class="xc-badge xcb-rb" :style="{background: bgColor}"></div>
  </div>
</template>

<script>
export default {
  name: 'XCoupon',
  props: {
    amount: {
      type: Number,
      default: 0
    },
    start_time: {
      type: String,
      default: ' '
    },
    end_time: {
      type: String,
      default: ' '
    },
    bgColor: {
      type: String,
      default: 'white'
    }
  },
  computed: {
    validity () {
      return '使用期限：' + this.start_time + '~' + this.end_time
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style>
.x-coupon {
  position: relative;
  color: #FE5E7A;
  line-height: 22px;
  height: 1.2rem;
  overflow: hidden;
  cursor: default;
}
.xc-inner {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #FE5E7A;
}
.x-coupon-l {
  position: relative;
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.x-coupon-l::after {
  content: '';
  height: 100%;
  width: 0;
  border-right: 1px dashed #FE5E7A;
  position: absolute;
  right: 0;
  top: 0;
}
.x-coupon-l p {
  margin: 0;
}
.x-coupon-r {
  width: 1.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.xc-badge {
  position: absolute;
  width: .4rem;
  height: .4rem;
  background: white;
  border: 1px solid #FE5E7A;
  border-radius: 50%;
}
.xcb-lt {
  top: -.2rem;
  left: -.2rem;
}
.xcb-lb {
  bottom: -.2rem;
  left: -.2rem;
}
.xcb-rt {
  top: -.2rem;
  right: -.2rem;
}
.xcb-rb {
  bottom: -.2rem;
  right: -.2rem;
}
.xcb-mt, .xcb-mb {
  width: .3rem;
  height: .3rem;
  bottom: -.15rem;
  right: 1.76rem;
}
.xcb-mt {
  top: -.15rem;
}
</style>

