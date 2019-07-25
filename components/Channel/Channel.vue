<template>
  <div v-if="listLength" class="x-channel">
    <!-- list length 1-4 -->
    <component v-if="listLength < 5" :is="channelDetailName" @click="itemClick" :list="list" :horizontal="horizontal"></component>
    <!-- list length 5 -->
    <template v-else-if="listLength === 5">
      <Channel2 @click="itemClick" :list="list" />
      <div class="x-channel-separator"></div>
      <Channel3 @click="itemClick(2 + $event)" :list="list.slice(2, 5)" :horizontal="true" />
    </template>
    <!-- list length 6 -->
    <template v-else>
      <Channel3 @click="itemClick" :list="list.slice(0, 3)" :horizontal="true" />
      <div class="x-channel-separator"></div>
      <Channel3 @click="itemClick(3 + $event)" :list="list.slice(3, 6)" :horizontal="true" />
    </template>
  </div>
</template>

<script>
import Channel2 from './Channel2'
import Channel3 from './Channel3'
import Channel4 from './Channel4'

export default {
  name: 'XChannel',
  components: {
    Channel2,
    Channel3,
    Channel4
  },
  props: {
    list: {
      type: Array,
      required: true
    },
    horizontal: {
      type: Boolean // 当listLength为3时有两种排版，horaontal为true是展示为一行的样式
    }
  },
  computed: {
    listLength () {
      return this.list ? this.list.length : 0
    },
    channelDetailName () {
      return `Channel${this.listLength}`
    }
  },
  methods: {
    itemClick (index) {
      this.$emit('click', this.list[index])
    }
  }
}
</script>

<style lang="less">
.x-channel {
  margin: .16rem .24rem;
  box-sizing: border-box;
  overflow: hidden;
}
.x-channel-flex, .x-channel-flex-column {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.x-channel-flex-column {
  flex-direction: column;
}
.x-channel-item {
  display: inline-block; // 万一flex不兼容，还能保持个基本队形
  position: relative;
  height: 0;
  border-radius: 4px;
  overflow: hidden;
}
.x-channel-separator {
  width: 0.8%;
  height: 0;
  padding-bottom: 0.8%;
}
// % 基准是innerWidth，UI=702
.x-channel-item-w348h348 {
  width: 49.6%;
  padding-bottom: 49.6%;
}
.x-channel-item-w348h250 {
  width: 49.6%;
  padding-bottom: 35.6%;
}
.x-channel-item-w230h250 {
  width: 32.8%;
  padding-bottom: 35.6%;
}
// % 基准是1，自身宽度
.x-channel-item-w348h172wrapped {
  width: 100%;
  padding-bottom: 49.4%;
}
.x-img-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
