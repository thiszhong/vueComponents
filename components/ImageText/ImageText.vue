<template>
  <div @click="onClick" class="x-imgage-text">
    <div v-if="image" class="x-it-image" :style="imgStyle">
      <img :src="image" alt="">
    </div>
    <div v-if="text" class="x-it-text" :style="textStyle">
      {{text}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'XImageText',
  props: {
    image: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
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

<style>
.x-imgage-text {
  font-size: 14px;
  color: #0D0D0D;
  box-sizing: border-box;
}
.x-it-image {
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 7px;
  overflow: hidden;
}
.x-it-image img {
  display: block;
  width: 100%;
}
.x-it-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>

