<template>
  <div>
    <Search v-model="searchValue" :focus="focus" @search="onSearch" />

    <pre>
      &lt;Search 
        v-model="searchValue(option)" 
        :focus="false(default)" 
        :isPlaceholder="false(default)"
        placeholder="输入关键词搜索商品(default)"
        @search="onSearch"
      /&gt;
    </pre>
  </div>
</template>

<script>
import { Search } from '../../index'

export default {
  components: {
    Search
  },
  data () {
    return {
      searchValue: '',
      focus: true
    }
  },
  methods: {
    onSearch(e) {
      alert(e)
    }
  }
}
</script>
