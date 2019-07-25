<template>
  <div id="app">
    <div class="sider-place"></div>
    <ul class="sider">
      <li v-for="router in routers" :key="router.name">
        <router-link :to="router.path">{{router.name}}</router-link>
      </li>
    </ul>
    <div class="container">
      <h3>Display area:</h3>
      <iframe
        @load="iframeOnLoad"
        style="margin: 10px;box-shadow: 0 0 10px #ccc;"
        height="667" width="375"
        id="iframeCmsDiy"
        name="iframeCmsDiy"
        src="../dist_creator/index.html" frameborder="0"
      ></iframe>
      <!-- 组件内会使用em为自适应单位，外层设置font-siz模拟移动端 -->
      <!-- <div style="font-size: 1rem;">
        <router-view />
      </div> -->
    </div>
  </div>
</template>

<script>
import routers from './router/routers';

export default {
  name: 'app',
  data() {
    return {
      routers: routers
    }
  },
  mounted () {
    // 兼容Safari须如此获取iframe
    window.diyIFrameElem = document.getElementById('iframeCmsDiy')
  },
  methods: {
    iframeOnLoad () {
      if (window.diyIFrameReadyCallback) {
        window.diyIFrameReadyCallback()
      }
      window.diyIFrameReady = true
    }
  }
}
</script>

<style>
html {
  font-size: 50px;
}
body {
  font-size: 16px;
  background: #F6F6F6;
  margin: 0;
  padding: 0;
}
pre {
  font-size: 13px;
  /* white-space: normal; */
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
}
.sider-place {
  margin: 0 30px 0 0;
  padding: 6px 0;
  width: 200px;
}
.sider {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  margin: 0 30px 0 0;
  padding: 6px 0;
  width: 200px;
  background: white;
  box-shadow: 3px 0 10px #ccc;
}
.sider li {
  list-style: none;
  padding: 6px 10px;
}
.sider li a {
  color: blue;
}
.container {
  flex: 1;
  margin-right: 30px;
  overflow: hidden;
}
</style>
