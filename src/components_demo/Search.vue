<template>
  <div>
    <x-search v-model="searchValue" :focus="focus" @search="onSearch" />

    <pre>
      &lt;x-search 
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
import { XSearch } from '../../index'

export default {
  components: {
    XSearch
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
