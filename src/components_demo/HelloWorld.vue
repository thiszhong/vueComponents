<template>
  <div class="hello">
    <h1>Hello components</h1>
    <p style="font-size: 15px;">出于兼顾移动端（rem）和后台复用，自适应组件使用em为尺寸单位。所以使用时应在外层设置<pre>font-size: 1rem/50px</pre>包裹。其他单位类似。</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>
