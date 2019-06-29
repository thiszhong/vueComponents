# vue-components

## Project setup
```
npm install
```

### Compiles and hot-reloads for development 预览组件
```
npm run serve
```

### Components:
 1. ProductItem（商品的一个item），内部以em为单位，可以适应环境的适配，使用时设置外层 font-size: 1rem/50px(对应UI屏宽750) 

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
            "style": false
          },
          "vue-components"
        ]
      ]
    }
  ```

### LICENSE
[MIT](https://en.wikipedia.org/wiki/MIT_License)
