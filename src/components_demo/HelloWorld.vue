<template>
  <div class="hello">
    <h1>Hello components</h1>
    <p style="font-size: 15px;">出于兼顾移动端（rem）和后台复用，自适应组件使用em为尺寸单位。所以使用时应在外层设置<pre>font-size: 1rem/50px</pre>包裹。其他单位类似。</p>
    <pre>
      ### 按需加载
        1. `npm install -D babel-plugin-import`
        2. 配置`babel`的`babel.config.js`文件（不同babel版本对应的配置文件名可能不一样），类似这样：
        ```
          module.exports = {
            "presets": [
              "@vue/app"
            ],
            "plugins": [
              [
                "import",
                {
                  "libraryName": "vue-components",
                  "libraryDirectory": 'components',
                  "camel2DashComponentName": false,
                  "style": false
                },
                "vue-components"
              ]
            ]
          }
        ```
    </pre>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>
