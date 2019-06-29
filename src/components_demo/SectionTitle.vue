<template>
  <div>
    <SectionTitle title="标题" type="circle" :style="{background: 'white'}" />

    <pre>
      &lt;SectionTitle title="标题" type="circle" :style="{background: 'white'}" /&gt;

      Props:
        title: String
        type: String(plain|lump|circle) 装饰样式 default: lump
        style: Object(style)
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

