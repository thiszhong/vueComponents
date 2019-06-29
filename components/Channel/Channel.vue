<template>
  <!-- 频道/豆腐块 支持item个数1-4。其中3有两种样式，默认左1右2 和 带horzontal属性后的一行3个 -->
  <div v-if="list.length" class="channel-wrap">
    <div :class="{'channel1': listLen > 1, 'channel1__h': listLen === 2 || len3H}">
      <div @click="itemClick(list[0])" class="channel-box channel1-box">
        <img :src="list[0].cover || list[0].image" alt="">
      </div>
    </div>
    <div v-if="listLen > 1" class="channel-r">
      <div class="channel2" :class="{'channel2__3h': len3H}">
        <div @click="itemClick(list[1])" class="channel-box channel2-box">
          <img :src="list[1].cover || list[1].image" alt="">
        </div>
      </div>
      <div v-if="listLen > 2" :class="{'channel__b': listLen === 4 || !horzontal, 'channel3__3h': len3H}">
        <template v-if="list[2]">
          <div class="channel3" :class="{'channel3__len3': listLen === 3 && !horzontal}">
            <div @click="itemClick(list[2])" class="channel-box channel3-box">
              <img :src="list[2].cover || list[2].image" alt="">
            </div>
          </div>
        </template>
        <template v-if="list[3]">
          <div class="channel4">
            <div @click="itemClick(list[3])" class="channel-box channel4-box">
              <img :src="list[3].cover || list[3].image" alt="">
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZChannel',
  props: {
    list: {
      type: Array,
      default: () => [],
      required: true
    },
    horzontal: {
      type: Boolean, // 当listLen为3时有两种排版，horaontal为true是展示为一行的样式
      default: false
    }
  },
  computed: {
    listLen () {
      return this.list.length
    },
    len3H () {
      return this.listLen === 3 && this.horzontal
    }
  },
  methods: {
    itemClick (item) {
      if (this._events.click) this.$emit('click', item)
    }
  }
}
</script>

<style>
.channel-wrap {
  position: relative;
  background: white;
  box-sizing: border-box;
  overflow: hidden;
  padding: .1em .4em;
}
.channel-r {
  width: 48%;
  float: right;
}
.channel-wrap img {
  display: block;
  width: 100%;
}
.channel-box {
  width: 100%;
  height: 0;
  overflow: hidden;
}
.channel1 {
  width: 48%;
  float: left;
}
.channel__b {
  margin-top: 8.3%;
  overflow: hidden;
}

.channel2__3h, 
.channel3 {
  width: 45.85%;
  float: left;
}
.channel4, 
.channel3__3h {
  width: 45.85%;
  float: right;
}
.channel3__3h .channel3, 
.channel3__len3 {
  width: 100%;
}

.channel1-box, 
.channel3-box, 
.channel4-box, 
.channel2__3h .channel2-box {
  padding-bottom: 100%;
}

.channel2-box, 
.channel3__len3 .channel3-box, 
.channel1__h .channel1-box {
  padding-bottom: 45.85%;
}
</style>

