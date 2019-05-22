<template>
  <div>
    <section-title title="标题" type="circle" :boxStyle="{background: 'white'}" />

    <pre>
      &lt;section-title title="标题" type="circle" :boxStyle="{background: 'white'}" /&gt;

      Props:
        title: String
        type: String(plain|lump|circle) 装饰样式 default: lump
        boxStyle: Object(style)
    </pre>
  </div>
</template>

<script>
import { SectionTitle } from '../../index'

export default {
  components: {
    SectionTitle
  }
}
</script>

