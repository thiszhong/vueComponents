<template>
  <div class="x-scroll-bar">
    <div class="x-scroll" ref="xScroll">
      <template v-for="(item, index) in list">
        <div 
          class="x-scroll-item" :class="{'x-si-active': activeIndex === index}" 
          :key="`${item.name || ''}${index}`"
          @click="itemClick($event, item, index)"
        >
          <span>{{item.name}}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XScrollableBar',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    index: {
      type: Number
    }
  },
  data () {
    return {
      // isPc: !(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)),
      activeIndex: 0
    }
  },
  computed: {
    scrollElem () {
      return this.$refs.xScroll
    },
    scrollClientW () {
      return this.scrollElem.clientWidth
    },
    scrollLeftMax () {
      return this.scrollElem.scrollWidth - this.scrollClientW
    },
    scrollElemX () {
      return this.scrollElem.offsetLeft
    }
  },
  watch: {
    index (val) {
      const i = Number(val)
      if (!isNaN(i)) this.activeIndex = i
    }
  },
  mounted () {
    const i = Number(this.index)
    if (!isNaN(i)) this.activeIndex = i
  },
  methods: {
    itemClick (e, item, index) {
      if (this.activeIndex !== index) {
        const w = e.currentTarget.clientWidth
        const x = e.currentTarget.offsetLeft
        let toX = x - this.scrollElemX - this.scrollClientW / 2 + w / 2
        toX = Math.max(0, toX)
        toX = Math.min(this.scrollLeftMax, toX)
        this.scrollTo(toX)
        this.activeIndex = index
      }
      this.$emit('change', item, index)
    },
    scrollTo(x) {
      let left = this.scrollElem.scrollLeft
      const part = parseInt((x - left) / 4)
      let timer = setInterval(() => {
        left += part
        if ((part > 0 && left < x) || (part < 0 && left > x)) {
          this.scrollElem.scrollTo(left, 0)
        } else {
          this.scrollElem.scrollTo(x, 0)
          clearInterval(timer)
          timer = null
        }
      }, 30)
    }
  }
}
</script>

<style>
.x-scroll-bar {
  width: 100%;
  height: 44px;
  font-size: 14px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  background: white;
  border-bottom: 1px solid #f6f6ff;
}
.xs_pc_env {
  /* 默认滚动条宽度为17px */
  height: 61px;
}
.x-scroll {
  width: 100%;
  height: 61px;
  overflow-x: auto;
  overflow-y: hidden;
}
.x-scroll-item {
  position: relative;
  display: table-cell;
  height: 44px;
  line-height: 44px;
  padding: 0 20px;
  cursor: pointer;
}
.x-si-active {
  color: #FF2C23;
}
.x-si-active::after {
  content: '';
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 0;
  height: 2px;
  background: #FF2C23;
}
</style>

