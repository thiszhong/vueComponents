<template>
  <div @click="onClick" class="x-imgage-text">
    <div v-if="image" class="x-it-image" :style="imgStyle">
      <img :src="image" alt="">
    </div>
    <div v-if="!onlyImage" class="x-it-text" :style="textStyle">
      <p>{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XImageText',
  props: {
    onlyImage: {
      type: Boolean,
      default: true
    },
    image: {
      type: String,
      default: require('../../src/assets/image-placeholder.jpg')
    },
    text: {
      type: String,
      default: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字...'
    },
    imgStyle: {
      type: Object,
    },
    textStyle: {
      type: Object,
    },
    url: String
  },
  methods: {
    onClick () {
      this.$emit('click', {url: this.url})
    }
  }
}
</script>

<style lang="less">
.x-imgage-text {
  font-size: .3rem;
  color: #333;
  margin: .16rem .24rem;
  box-sizing: border-box;
  background: white;
  border-radius: .16rem;
  overflow: hidden;
}
.x-it-image {
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
.x-it-image img {
  display: block;
  width: 100%;
}
.x-it-text {
  padding: 8px 14px;
  p {
    font-weight: 700;
    line-height: 20px;
    height: 40px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    word-break: break-all;
    text-overflow: ellipsis;
  }
}
</style>

