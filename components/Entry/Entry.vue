<template>
  <div class="x-entry">
    <div v-for="(item, index) in list" :key="`${item.name || ''}${index}`" 
      class="x-entry-item"
      :style="{width: itemWidth}"
      @click="itemClick(item, index)"
    >
      <div class="x-entry-icon">
        <img :src="item.cover || item.icon" alt="">
      </div>
      <p class="x-entry-title">{{item.title || item.name}}</p>
      <p
        v-if="item.subtitleType > 0"
        class="x-entry-subtitle"
      >{{item.subtitleType === 2 ? '最多省' : '最高返'}}<span>{{item.subtitleValue}}%</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XEntry',
  props: {
    list: {
      type: Array,
      required: true
    },
    column: {
      type: Number
    }
  },
  computed: {
    itemWidth () {
      const c = Math.min(5, Number(this.column) || this.list.length)
      if (c > 0) return parseInt((1 / c) * 10000) / 100 + '%'
      return '20%'
    }
  },
  methods: {
    itemClick (item, index) {
      if (this._events.click) this.$emit('click', item, index)
    }
  }
}
</script>

<style lang="less">
.x-entry {
  font-size: 12px;
  text-align: center;
  overflow: hidden;
  margin: .16rem .24rem;
  transform: translateY(.08rem);
}
.x-entry-item {
  float: left;
  text-align: center;
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: .16rem;
}
.x-entry-icon {
  width: 100%;
  height: .9rem;
  text-align: center;
  overflow: hidden;
  margin-bottom: .16rem;
}
.x-entry-icon img {
  height: 100%;
  display: inline-block;
  vertical-align: middle;
}
.x-entry-title {
  font-size: .26rem;
  color: #333;
  line-height: 1;
}
.x-entry-subtitle {
  font-size: .24rem;
  transform: scale(.92);
  line-height: 1;
  color: #9A9A9A;
  margin-top: .08rem;
  span {
    color: #FF2455;
  }
}
</style>

