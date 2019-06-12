<template>
  <div class="z-sort-bar">
    <div v-for="(item, index) in innerSorts" :key="item.name" 
      class="z-sort-item"
      :style="{color: activeIndex === index ? color : ''}"
      @click="sortClick(index)"
    >
      <span>{{item.name}}</span>
      <div v-if="item.value.up" class="z-sort-roll">
        <template v-if="activeIndex !== index">
          <div class="z-sort-up"></div>
          <div class="z-sort-down"></div>
        </template>
        <template v-else>
          <div class="z-sort-up" :style="{'borderBottomColor': item.value.active === 'up' ? color : ''}"></div>
          <div class="z-sort-down" :style="{'borderTopColor': item.value.active === 'down' ? color : ''}"></div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
const defaultSorts = [
  {name: '推荐', value: ''},
  {name: '销量', value: {up: 'month_sales_asc', down: 'month_sales_des', active: 'down'}},
  {name: '价格', value: {up: 'discount_price_asc', down: 'discount_price_des', active: 'up'}},
]
export default {
  name: 'ZSortBar',
  props: {
    sorts: {
      type: Array,
      default: null
    },
    color: {
      type: String,
      default: '#F72353'
    },
    index: {
      type: Number
    }
  },
  data () {
    return {
      innerSorts: defaultSorts.slice(),
      activeIndex: 0
    }
  },
  watch: {
    sorts (val) {
      this.setSorts(val)
    }
  },
  created () {
    if (this.sorts) this.setSorts(this.sorts)
    if (this.index) this.activeIndex = this.index
  },
  methods: {
    setSorts (d) {
      this.innerSorts = (d && d.length) ? d.slice() : defaultSorts.slice();
      this.activeIndex = 0
    },
    sortClick (index) {
      const arr = this.innerSorts.slice();
      const eventData = { index };
      if (this.activeIndex !== index) {
        this.activeIndex = index
      } else if (typeof arr[index].value === 'object') {
        arr[index].value.active = (arr[index].value.active === 'up') ? 'down' : 'up';
        this.innerSorts = arr
      }

      eventData.sort = arr[index]
      if (typeof arr[index].value === 'object') {
        eventData.value = arr[index].value[arr[index].value.active]
      } else {
        eventData.value = arr[index].value
      }
      this.$emit('change', eventData)
    },
  }
}
</script>

<style>
.z-sort-bar {
  font-size: 14px;
  color: #444;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 36px;
  background: white;
}
.z-sort-item {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.z-sort-roll {
  height: 23px;
  width: 10px;
  padding-left: 4px;
}
.z-sort-up, .z-sort-down {
  width: 0;
  height: 0;
  border-color: transparent;
  border-width: 5px;
  border-style: solid;
}
.z-sort-up {
  margin-bottom: 2px;
  border-bottom-color: #c6c6c6;
}
.z-sort-down {
  border-top-color: #c6c6c6;
}
</style>

