<template>
  <!-- Channel有2个元素 -->
  <div class="x-channel-flex x-channel2">
    <div @click="$emit('click', 0)" class="x-channel-item x-channel-item-w348h250">
      <div class="x-img-wrapper">
        <img :src="list[0].cover || placeholder" alt="" srcset="">
      </div>
    </div>
    <div @click="$emit('click', 1)" class="x-channel-item x-channel-item-w348h250">
      <div class="x-img-wrapper">
        <img :src="list[1].cover || placeholder" alt="" srcset="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XChannel2',
  props: {
    list: Array
  },
  data () {
    return {
      placeholder: require('../../src/assets/placeholder/ph-1.4-1.png')
    }
  }
}
</script>
