<template>
  <div>
    <XSearch v-model="searchValue" :focus="focus" @search="onSearch" />

    <pre>
      &lt;XSearch 
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
import XSearch from '../../components/Search'

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
