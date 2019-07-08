<template>
  <!-- 频道/豆腐块 支持item个数1-4。其中3有两种样式，默认左1右2 和 带horzontal属性后的一行3个 -->
  <div v-if="list.length" class="x-channel">
    <div :class="{'x-channel1': listLen > 1, 'x-channel1__h': listLen === 2 || len3H}">
      <div @click="itemClick(list[0])" class="x-channel-box x-channel1-box">
        <img :src="list[0].cover || list[0].image" alt="">
      </div>
    </div>
    <div v-if="listLen > 1" class="x-channel-r">
      <div class="x-channel2" :class="{'x-channel2__3h': len3H}">
        <div @click="itemClick(list[1])" class="x-channel-box x-channel2-box">
          <img :src="list[1].cover || list[1].image" alt="">
        </div>
      </div>
      <div v-if="listLen > 2" :class="{'x-channel__b': listLen === 4 || !horzontal, 'x-channel3__3h': len3H}">
        <template v-if="list[2]">
          <div class="x-channel3" :class="{'x-channel3__len3': listLen === 3 && !horzontal}">
            <div @click="itemClick(list[2])" class="x-channel-box x-channel3-box">
              <img :src="list[2].cover || list[2].image" alt="">
            </div>
          </div>
        </template>
        <template v-if="list[3]">
          <div class="x-channel4">
            <div @click="itemClick(list[3])" class="x-channel-box x-channel4-box">
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
  name: 'XChannel',
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

<style lang="less">
.x-channel {
  position: relative;
  background: white;
  box-sizing: border-box;
  overflow: hidden;
  padding: .1em .4em;
  &-r {
    width: 48%;
    float: right;
  }
  img {
    display: block;
    width: 100%;
  }
  &-box {
    width: 100%;
    height: 0;
    overflow: hidden;
  }
  &1 {
    width: 48%;
    float: left;
  }
  &__b {
    margin-top: 8.3%;
    overflow: hidden;
  }

  &2__3h, 
  &3 {
    width: 45.85%;
    float: left;
  }
  &4, 
  &3__3h {
    width: 45.85%;
    float: right;
  }
  &3__3h &3, 
  &3__len3 {
    width: 100%;
  }

  &1-box, 
  &3-box, 
  &4-box, 
  &2__3h &2-box {
    padding-bottom: 100%;
  }

  &2-box, 
  &3__len3 &3-box, 
  &1__h &1-box {
    padding-bottom: 45.85%;
  }
}
</style>

