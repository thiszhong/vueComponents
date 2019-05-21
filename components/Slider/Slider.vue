<template>
    <swipe ref="slider" 
      :autoplay="playInterval" 
      :indicator-color="indicatorColor" 
      touchable
      :style="{'border-radius': borderRadius}"
    >
      <swipe-item v-for="(item, index) in list" :key="index" @click="itemClick(item, index)">
        <div class="slider-item" :style="{'padding-bottom': hPadding}">
          <img :src="item.image" />
        </div>
      </swipe-item>
    </swipe>
</template>

<script>
import { Swipe, SwipeItem } from 'vant'

export default {
  name: 'Slider',
  components: {
    Swipe,
    SwipeItem
  },
  props: {
    autoplay: {},
    list: {
      type: Array,
      default: () => []
    },
    aspectRatio: {
      type: Number,
      default: 2.89
    },
    indicatorColor: {
      type: String,
      default: '#F72353'
    },
    borderRadius: {
      type: String,
      default: '10px'
    }
  },
  computed: {
    hPadding () {
      const ratio = Number(this.aspectRatio)
      if (!(ratio > 0)) return '34.6%'
      return parseInt((1/ratio) * 10000) / 100 + '%' // 百分比精确到小数点后两位
    },
    playInterval () {
      const t = typeof this.autoplay
      if (t === 'number') return this.autoplay
      if (this.autoplay) return 3000
      return 0
    }
  },
  methods: {
    swipeTo (index) {
      this.$refs.slider && this.$refs.slider.swipeTo(index)
    },
    itemClick (item, index) {
      this.$emit('click', item, index)
    }
  }
}
</script>

<style scoped>
.slider-item {
  width: 100%;
  height: 0;
  padding-bottom: 34.6%;
  overflow: hidden;
}
.slider-item img {
  display: block;
  width: 100%;
}
</style>

