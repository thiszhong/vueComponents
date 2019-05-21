<template>
  <div v-if="amount > 0" @click="onClick" class="x-coupon" :style="{background: bgColor}">
    <div class="xc-inner">
      <div class="x-coupon-l">
        <p style="font-size: .36em;font-weight: 700;">{{amount}}元优惠券</p>
        <p style="font-size: .24em;">{{validity}}</p>
      </div>
      <div class="x-coupon-r">
        <span style="font-size: .3em;font-weight: 700;">立即领取</span>
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
  name: 'Coupon',
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

<style scoped>
.x-coupon {
  position: relative;
  color: #FE5E7A;
  line-height: 22px;
  height: 1.2em;;
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
  width: 1.9em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.xc-badge {
  position: absolute;
  width: .4em;
  height: .4em;
  background: white;
  border: 1px solid #FE5E7A;
  border-radius: 50%;
}
.xcb-lt {
  top: -.2em;
  left: -.2em;
}
.xcb-lb {
  bottom: -.2em;
  left: -.2em;
}
.xcb-rt {
  top: -.2em;
  right: -.2em;
}
.xcb-rb {
  bottom: -.2em;
  right: -.2em;
}
.xcb-mt, .xcb-mb {
  width: .3em;
  height: .3em;
  bottom: -.15em;
  right: 1.76em;
}
.xcb-mt {
  top: -.15em;
}
</style>

