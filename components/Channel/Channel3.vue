<template>
  <!-- Channel有3个元素 -->
  <div v-if="horizontal" class="x-channel-flex x-channel3">
    <div @click="$emit('click', 0)" class="x-channel-item x-channel-item-w230h250">
      <div class="x-img-wrapper">
        <img :src="list[0].cover || placeholder3" alt="" srcset="">
      </div>
    </div>
    <div @click="$emit('click', 1)" class="x-channel-item x-channel-item-w230h250">
      <div class="x-img-wrapper">
        <img :src="list[1].cover || placeholder3" alt="" srcset="">
      </div>
    </div>
    <div @click="$emit('click', 2)" class="x-channel-item x-channel-item-w230h250">
      <div class="x-img-wrapper">
        <img :src="list[2].cover || placeholder3" alt="" srcset="">
      </div>
    </div>
  </div>
  <!-- 样式2 -->
  <div v-else class="x-channel-flex x-channel3">
    <!-- 左1 -->
    <div @click="$emit('click', 0)" class="x-channel-item x-channel-item-w348h348">
      <div class="x-img-wrapper">
        <img :src="list[0].cover || placeholder" alt="" srcset="">
      </div>
    </div>
    <!-- 右2 -->
    <div class="x-channel-item x-channel-item-w348h348">
      <div class="x-img-wrapper x-channel-flex-column">
        <div @click="$emit('click', 1)" class="x-channel-item x-channel-item-w348h172wrapped">
          <div class="x-img-wrapper">
            <img :src="list[1].cover || placeholder2" alt="" srcset="">
          </div>
        </div>
        <div @click="$emit('click', 2)" class="x-channel-item x-channel-item-w348h172wrapped">
          <div class="x-img-wrapper">
            <img :src="list[2].cover || placeholder2" alt="" srcset="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XChannel3',
  props: {
    list: Array,
    horizontal: {
      type: Boolean, // 当listLength为3时有两种排版，horaontal为true是展示为一行的样式
      default: false
    }
  },
  data () {
    return {
      placeholder: require('../../src/assets/placeholder/ph-1-1.png'),
      placeholder2: require('../../src/assets/placeholder/ph-2.02-1.png'),
      placeholder3: require('../../src/assets/placeholder/ph-0.9-1.png')
    }
  }
}
</script>