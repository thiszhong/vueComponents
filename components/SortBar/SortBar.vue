<template>
  <div class="x-sort-bar">
    <div v-for="(item, index) in innerSorts" :key="item.name" 
      class="x-sort-item"
      :style="{color: activeIndex === index ? color : ''}"
      @click="sortClick(index)"
    >
      <span>{{item.name}}</span>
      <div v-if="item.value.up" class="x-sort-roll">
        <template v-if="activeIndex !== index">
          <div class="x-sort-up"></div>
          <div class="x-sort-down"></div>
        </template>
        <template v-else>
          <div class="x-sort-up" :style="{'borderBottomColor': item.value.active === 'up' ? color : ''}"></div>
          <div class="x-sort-down" :style="{'borderTopColor': item.value.active === 'down' ? color : ''}"></div>
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
  name: 'XSortBar',
  props: {
    sorts: {
      type: Array,
      default: null
    },
    color: {
      type: String,
      default: '#FF2C23'
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
.x-sort-bar {
  font-size: 14px;
  color: #444;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 36px;
  background: white;
}
.x-sort-item {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.x-sort-roll {
  height: 23px;
  width: 10px;
  padding-left: 4px;
}
.x-sort-up, .x-sort-down {
  width: 0;
  height: 0;
  border-color: transparent;
  border-width: 5px;
  border-style: solid;
}
.x-sort-up {
  margin-bottom: 2px;
  border-bottom-color: #c6c6c6;
}
.x-sort-down {
  border-top-color: #c6c6c6;
}
</style>

