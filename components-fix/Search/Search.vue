<template>
  <div @click="onClick" class="x-search-box">
    <div class="x-search-area" :class="{'x-search-area-focus': isFocus}">
      <div class="x-search-icon"><img :src="icon" alt=""></div>
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
    <button v-if="!isPlaceholder" @click="onSearch" class="x-search-btn">搜索</button>
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
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAKlBMVEVHcExkZGRjY2NmZmZmZmZlZWVlZWVhYWFlZWVkZGRjY2NkZGRmZmZra2uhC9nqAAAADHRSTlMAPijw2GzDE61Vg5a6l+IIAAAChUlEQVRIx+1Wv2sUQRTebLxfplnUEI1XLKigYKFYiOaK01TKFIdwKLJFqhQhxYGCVcBCg8oVFoIIV6RISGEEUUECacJdVmO+qRRFsv4vzq532ZnZ99atxalm57578973vnnvOY6+3BPttVdTzt+We2cWag0WXubjzixiuPpP83Anoa2bHRZ3Nv49fNZu311WG3mVwx2Ondv0k/25D+rjBhOHAGa8g8/jCvmWBAaQ+7pbChn61MURvpvnx4CLBHALaGWPvAxuIsJ1+6wGbGeAbxBmeTsKaXtZi/CQIKKBy9bReYQUE6fw2ToRaFLAMTvCEtBhyP1kfC9hl05X1bq7izkaWDGpdCP4jFICw8REtMdJatzgfAk/OGDJcDKg2B462dD5WJQeK/stPNdCG/DvqK7dVsMeDxzHhTRoju4/lKdhl608WWHvHOzv04oY6eKLprG5nCKjEVln3uWQyFSpPazk1BlRGDjQMtgqBixssZcXjKMFU+fFEwshpedeHo9jmhDKWt6dbF3ZIfNOlNdtMu+ZdUirKi5dTwghCMl3gEBqJG9InnER+br5Js/ON8PhnxywbARaiwb8IzQ4FpLTjzCV1eOeVwn9julJyLG4a70ghiBhCyugs1i1bo7vJutUN1tDBEVlNdv2lHiJF9YlmqFqUvv2mWqvhFJPA9eyEwFhsqIGlI/GG1ATwa0GYVIZkO802ag/XlHNkGjZL4Bfj0fimxbJpOBSJp2NeJpZO9JxHkw+imekVtJfCZPu+8T9S7ONeOz5uj5kgzBZWU0HqfD2qGWDytl0MpzJqL/gpQSTr96dfL08/2RzSp8C4DlFFmeSGiz+m/xHTDaLmiwIdOd9p+j6Df6dO91nk8rdAAAAAElFTkSuQmCC',
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

<style>
.x-search-box {
  position: relative;
  height: 33px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: .2em .4em;
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
  /* border: 1px solid #eee; */
  box-shadow: 0 0 7px #ddd;
  background: white;
  box-sizing: border-box;
  overflow: hidden;
}
/* .x-search-area-focus, .x-search-area:hover {
  border-color: white;
  box-shadow: 0 0 7px #ddd;
} */
.x-search-icon {
  width: 60px;
  height: 20px;
  text-align: right;
  overflow: hidden;
  transition: all .3s;
}
.x-search-area-focus .x-search-icon {
  width: 0;
  opacity: 0;
}
.x-search-icon img {
  width: 20px;
  height: 20px;
  display: inline-block;
  vertical-align: middle;
}
.x-search-input {
  position: relative;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  color: #666;
  padding-left: 6px;
  padding-right: 35px;
  box-sizing: border-box;
}
.x-search-input input {
  width: 100%;
  height: 100%;
  font-size: 15px;
  border: 0;
  outline: none;
}
.x-search-input input::-webkit-search-cancel-button{
  -webkit-appearance: none;
}
.x-search-clear {
  width: 30px;
  height: 100%;
  background: white url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAIVBMVEVHcEza2trb29vb29vb29va2trb29vf39/c3Nzb29vb29shSHhRAAAACnRSTlMAoYDP7J9mGlBAGFod+gAAAQ9JREFUSMetltsSwyAIRKOCF/7/g9tc2kFZY+iUt8zsUVgVsm1/iNLiEa08UVcm+QZxXawdlfpi4s0+2cgPJM+WTzKJBDepJNMgUEqW28hOvSGqLKPLqtAaIF15kgeRHAUMZaiEQjDrJptU1LsOBOt84wVQl2YY9Aoga2nuifD+ZGNtkBkx6o8NdUYDYfSnswWYF7BeZPepCSaQXlpnakdA/WFsnB6p1c+AkwD6KcDG7nvgtBsRGNj1zJCIyFY+84dEAwfHn3oRUezVUP5bgqzd3Xkxuu399R7OdyQqekC8fED9E+UHT1Q1gZSeNAF3m/E3Mn+rdDdjf7v3DxT/yPIPRf/Y/WGw+38dfvk5WcULbnk4DDaH0NAAAAAASUVORK5CYII=') center no-repeat;
  background-size: 20px 20px;
  position: absolute;
  right: 0;
  top: 0;
}
.x-search-btn {
  font-size: 15px;
  color: white;
  width: 54px;
  padding: 0;
  margin-left: 10px;
  height: 32px;
  background-image: linear-gradient(to right, #F72353, #FD935F);
  border: 0;
  border-radius: 5px;
  outline: none;
}
.x-search-btn:active {
  transform: scale(1.1)
}
</style>

