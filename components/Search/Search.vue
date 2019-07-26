<template>
  <div @click="onClick" class="x-search-box" :class="{'x-search-focus': isFocus}">
    <div class="x-search-icon"><img :src="icon" alt=""></div>
    <div class="x-search-area">
      <div class="x-search-input">
        <span v-if="isPlaceholder">{{placeholder}}</span>
        <input v-else type="search" id="xSearchInput" ref="search"
          v-model="innerValue"
          :placeholder="placeholder"
          :autofocus="focus"
          @focus="onFocus"
          @blur="onBlur"
          @keyup.enter="onSearch"
        />
      </div>
      <div v-show="hasInput" @click="onClear" class="x-search-clear"></div>
    </div>
    <button @click="onSearch" class="x-search-btn">搜索</button>
  </div>
</template>

<script>
export default {
  name: 'XSearch',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: String,
      default: null
    },
    isPlaceholder: {
      type: Boolean,
      default: () => false
    },
    placeholder: {
      type: String,
      default: '输入关键词搜索商品'
    },
    focus: {
      type: Boolean,
      default: false
    },
    url: String
  },
  data () {
    return {
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAABUFBMVEX/LST/LCP/LCP/LST/LSP/LCT/LCNHcEz/LCT/AAD/LST/LiT/KyL/LCT/LCP/LCP/LST/LCT/LST/LCP/LCT/LiT/LiL/AAD/LSX/LSP/JCT/LST/KyL/LST/LyT/IiL/LST/KyP/LCT/QAD/LCP/LCP/LSb/KyT/LCT/LCP/MzP/LCP/LCX/LR7/LSP/KSL/LSP/LSX/LCP/Mxr/LST/LCP/Kyv/LCL/LiT/LST/LSP/LCX/LCP/LCT/LCP/LCP/LCT/Kyb/LCL/Kyv/Jyf/LST/LST/LCT/LCH/LCT/KR//Lif/KiP/Kib/MCD/LSP/LyL/LSP/LCT/LST/LSP/KyP/KyP/LCP/LCP/LSP/LSP/KBv/LSP/Jib/LiT/LST/LiT/LSP/MCL/LyL/LCP/LSP/LCT/LiT/LCT/LCT/LCP/LSX/LST/LCX/LCT/LCRmAq50AAAAcHRSTlPl3HSI36GoAIYBx4A1hcTbjt2Hy7lwQwJ9SQfOHt4xD3deRgTDcyJq1+MFp0sRZSW1fNoKqsoGaFS5vSm+0OId1i9SDBrkjZwXmxknJDYQoDyYloHGZTuhUVCvE64UTk962CUmxdmyY7rVbWHUbmLJsZagSwAAAZpJREFUOMuF01dXwkAQBeBLyxKK0lWK0pUmoFLsir333nvX///mZlNMIOB94WT2O5vdMAMiZ6Hh8s3NuL2ccZ5oAul30WOAkqk630L4Wrew9Dkx5ptmqFRsIqMWWq28T7LK7Mc4fTLkNWT0GXh6qSo1/roCZE5VhKd7dD1oTnh1DkT6/0gNeCxoL0GyOSBUkMliN+7uSXMGugC7TDzAMGmNAzCHRbJgwE9VhxB6wqhIGsCXniDHQFIkLmBSlySGgDQjPrwR/ewAcUbmMNGGyPfADMbaECOQYsSN1zbEDgwy4sV0G7IPxBjhgFl9YgMcjNA3fuuKTfp5g4zMA+O8HukFOOk/mgJudMQqbdQ+idQB70WL4FcAW49E+BJwmW0mftqcAaWlirS1cwPaPfxLwLKqd/MZ2plbKrG+JkyBST0BZxFasewmxNJGr1scJ6t6jvpDQmnoxGQ82Dtkyy6TYqRp3LaboYotQHirbOSBJeFoUlo3c33strKB6pTp+FFqMOYIys9O0YB0iLCPszNhptyZCO8a+YeQ8sjtL4OAOAOliNeDAAAAAElFTkSuQmCC',
      isFocus: false,
      hasInput: false,
      innerValue: ''
    }
  },
  watch: {
    innerValue (val) {
      if (val && !this.hasInput) {
        this.hasInput = true
      } else if (!val && this.hasInput) {
        this.hasInput = false
      }
      // 如果调用此组件使用了 v-model，则同步它
      if (val !== this.value) this.$emit('input', val)
    },
    value (val) {
      this.innerValue = val
    },
    focus (val) {
      if (val) this.setFocus()
    }
  },
  mounted () {
    if (this.value !== null) this.innerValue = this.value
  },
  methods: {
    onFocus () {
      this.isFocus = true
      if (this._events.focus) this.$emit('focus')
    },
    onBlur () {
      this.isFocus = false
      if (this._events.blur) this.$emit('blur')
    },
    onSearch () {
      this.$emit('search', this.innerValue)
      if (this.$refs.search) this.$refs.search.blur()
    },
    onClear (focus = true) {
      this.innerValue = ''
      if (focus) this.setFocus()
    },
    setFocus () {
      if (this.$refs.search) this.$refs.search.focus()
    },
    onClick () {
      if (this._events.click) this.$emit('click', {url: this.url || '/search'})
    }
  }
}
</script>

<style lang="less">
@color: #FF2C23;

.x-search-box {
  position: relative;
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: .16rem .24rem;
  box-sizing: border-box;
  background: white;
  border: 1px solid @color;
  border-radius: 18px;
  overflow: hidden;
}
.x-search-area {
  font-size: 15px;
  position: relative;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
}
/* .x-search-focus, .x-search-area:hover {
  border-color: white;
  box-shadow: 0 0 7px #ddd;
} */
.x-search-icon {
  width: .66rem;
  height: 17px;
  text-align: right;
  overflow: hidden;
  transition: all .3s;
}
.x-search-focus .x-search-icon {
  width: 0;
  opacity: 0;
}
.x-search-icon img {
  width: 17px;
  height: 17px;
  float: right;
}
.x-search-input {
  line-height: 20px;
  position: relative;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  color: #666;
  padding-left: 6px;
  padding-right: 35px;
  box-sizing: border-box;
}
.x-search-input::after {
  content: '';
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background: #E5E5E5;
  transform: scaleX(.5);
}
.x-search-input input {
  width: 100%;
  height: 100%;
  font-size: 14px;
  background: transparent;
  border: 0;
  outline: none;
}
.x-search-input input::-webkit-search-cancel-button{
  -webkit-appearance: none;
}
.x-search-clear {
  width: 30px;
  height: 100%;
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAKlBMVEVHcEzMzMzMzMzOzs7MzMzMzMzOzs7Pz8/MzMzMzMzQ0NDMzMzMzMzMzMwX7pnnAAAADXRSTlMA70k41HEwDZb2K66hZIIGEwAAANNJREFUOMudk1kWwyAIRRVwwMj+t1tjrEFrkrbvyyNXmY35XgkyETNRxJU5ZJYucmG2O2UuYuvG55vM4qgBErklNlmqe3FyIWgB2CuAgv4AsIMWQTl5fwAmtZNNpgF2B0D6ta/FYN/RGkWUk8BCMBrfncWhBtYXYrALFcCyJgAMqqz2IHRetvQRdVd4AfihbbsLeXBB/BDkXZq1o4+FMqtSoyp1b1a6aNaQxzRUbXSB5b+R2s6hzDfzdCjevq9xTJGy+1g9p5cjh9V6YjyWN0P6YedfW5YevrXpFMoAAAAASUVORK5CYII=') center no-repeat;
  background-size: 18px 18px;
  position: absolute;
  right: 0;
  top: 0;
}
.x-search-btn {
  font-size: 14px;
  color: @color;
  width: 1.09rem;
  padding: 0;
  height: 32px;
  background: transparent;
  border: 0;
  outline: none;
}
.x-search-btn:active {
  transform: scale(1.1)
}
</style>

