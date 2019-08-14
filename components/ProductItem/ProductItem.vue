<template>
  <component :is="typeName" :item="item" @click="$emit('click')" />
</template>

<script>
import ProductH from './ProductH'
import ProductV from './ProductV'

export default {
  name: 'XProductItem',
  components: {
    ProductH,
    ProductV
  },
  props: {
    type: Number,
    item: Object
  },
  computed: {
    typeName () {
      return this.type === 2 ? 'ProductH' : 'ProductV'
    }
  }
}
</script>
