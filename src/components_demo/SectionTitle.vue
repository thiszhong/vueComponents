<template>
  <div>
    <x-section-title title="标题" type="circle" :boxStyle="{background: 'white'}" />

    <pre>
      &lt;x-section-title title="标题" type="circle" :boxStyle="{background: 'white'}" /&gt;

      Props:
        title: String
        type: String(plain|lump|circle) 装饰样式 default: lump
        boxStyle: Object(style)
    </pre>
  </div>
</template>

<script>
import { XSectionTitle } from '../../index'

export default {
  components: {
    XSectionTitle
  }
}
</script>

