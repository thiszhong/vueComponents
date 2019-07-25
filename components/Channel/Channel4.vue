<template>
  <!-- Channel有4个元素 -->
  <div class="x-channel-flex x-channel4">
    <!-- 左2 -->
    <div class="x-channel-item x-channel-item-w348h348">
      <div class="x-img-wrapper x-channel-flex-column">
        <div @click="$emit('click', 0)" class="x-channel-item x-channel-item-w348h172wrapped">
          <div class="x-img-wrapper">
            <img :src="list[0].cover || placeholder" alt="" srcset="">
          </div>
        </div>
        <div @click="$emit('click', 2)" class="x-channel-item x-channel-item-w348h172wrapped">
          <div class="x-img-wrapper">
            <img :src="list[2].cover || placeholder" alt="" srcset="">
          </div>
        </div>
      </div>
    </div>
    <!-- 右2 -->
    <div class="x-channel-item x-channel-item-w348h348">
      <div class="x-img-wrapper x-channel-flex-column">
        <div @click="$emit('click', 1)" class="x-channel-item x-channel-item-w348h172wrapped">
          <div class="x-img-wrapper">
            <img :src="list[1].cover || placeholder" alt="" srcset="">
          </div>
        </div>
        <div @click="$emit('click', 3)" class="x-channel-item x-channel-item-w348h172wrapped">
          <div class="x-img-wrapper">
            <img :src="list[3].cover || placeholder" alt="" srcset="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XChannel4',
  props: {
    list: Array
  },
  data () {
    return {
      placeholder: require('../../src/assets/placeholder/ph-2.02-1.png')
    }
  }
}
</script>