<template>
  <div class="entry-wrap">
    <div v-for="(item, index) in list" :key="`${item.name || ''}${index}`" 
      class="entry-item"
      :style="{width: itemWidth}"
      @click="itemClick(item, index)"
    >
      <div class="entry-icon" :style="{borderRadius: borderRadius}">
        <img :src="item.cover || item.icon" alt="">
      </div>
      <span>{{item.title || item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZEntry',
  props: {
    list: {
      type: Array,
      required: true
    },
    column: {
      type: Number,
      default: 4
    },
    borderRadius: {
      type: String,
      default: '0px'
    }
  },
  computed: {
    itemWidth () {
      const c = Number(this.column)
      if (c > 0) return parseInt((1 / c) * 10000) / 100 + '%'
      return '25%'
    }
  },
  methods: {
    itemClick (item, index) {
      if (this._events.click) this.$emit('click', item, index)
    }
  }
}
</script>

<style>
.entry-wrap {
  font-size: 12px;
  color: #444;
  text-align: center;
  overflow: hidden;
  margin: 5px 0;
}
.entry-item {
  float: left;
  text-align: center;
  height: 70px;
  padding: 5px 0;
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;
}
.entry-icon {
  width: 40px;
  height: 40px;
  margin: 0 auto 3px;
  overflow: hidden;
}
.entry-icon img {
  width: 100%;
  height: 100%;
  display: block;
}
</style>

