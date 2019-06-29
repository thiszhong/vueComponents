<template>
  <div>
    <SortBar :sorts="sorts" @change="onChange" />

    <pre>
      &lt;SortBar ref="mySort" :sorts="arr(option)" @change="onChange" /&gt;

      Props:
        sorts: default: [
            {name: '推荐', value: 1},
            {name: '销量', value: {up: 2, down: 3, active: 'down'}},
            {name: '价格', value: {up: 4, down: 5, active: 'up'}},
          ]
      Event:
        change: param: {value, index, item}
      可通过this.$refs.mySort.setSorts(sorts = default)重置/设置排序状态
    </pre>
  </div>
</template>

<script>
import { SortBar } from '../../index'

export default {
  components: {
    SortBar
  },
  data () {
    return {
      sorts: [
        {name: '加入时间', value: {up: 'id_asc ', down: 'id_des', active: 'down'}},
        {name: '订单数', value: {up: 'order_count_asc', down: 'order_count_des ', active: 'down'}}
      ]
    }
  },
  methods: {
    onChange (d) {
      alert(JSON.stringify(d))
    }
  }
}
</script>

