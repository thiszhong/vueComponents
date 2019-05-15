<template>
  <div class="sort-bar">
    <div v-for="(item, index) in innerSorts" :key="item.name" 
      class="sort-item"
      :class="{'gtcolor': activeIndex === index}"
      @click="sortClick(index)"
    >
      <span>{{item.name}}</span>
      <div v-if="item.value.up" class="sort-roll">
        <template v-if="activeIndex !== index">
          <div class="sort-up"></div>
          <div class="sort-down"></div>
        </template>
        <template v-else>
          <div class="sort-up" :class="{'sort-up-active': item.value.active === 'up'}"></div>
          <div class="sort-down" :class="{'sort-down-active': item.value.active === 'down'}"></div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
const defaultSorts = [
  {name: '推荐', value: 1},
  {name: '销量', value: {up: 2, down: 3, active: 'down'}},
  {name: '价格', value: {up: 4, down: 5, active: 'up'}},
]
export default {
  name: 'SortBar',
  props: {
    sorts: {
      type: Array,
      default: null
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

<style scoped>
.sort-bar {
  font-size: 14px;
  color: #444;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 36px;
  background: white;
}
.sort-item {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.gtcolor {
  color: #F72353;
}
.sort-roll {
  height: 23px;
  width: 10px;
  padding-left: 4px;
}
.sort-up, .sort-down {
  width: 0;
  height: 0;
  border-color: transparent;
  border-width: 5px;
  border-style: solid;
}
.sort-up {
  margin-bottom: 2px;
  border-bottom-color: #c6c6c6;
}
.sort-down {
  border-top-color: #c6c6c6;
}
.sort-up-active {
  border-bottom-color: #F72353;
}
.sort-down-active {
  border-top-color: #F72353;
}
</style>

