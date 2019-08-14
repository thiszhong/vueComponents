import Vue from 'vue'
import Router from 'vue-router'
import routers from './routers'
import resources from '../resources/component-data'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: routers
})

router.afterEach((to) => {
  if (!resources[to.name]) return
  if (!window.diyIFrameReady) {
    console.info('add diyIFrameReadyCallback')
    window.diyIFrameReadyCallback = () => {
      window.diyIFrameElem.contentWindow.postMessage(resources[to.name], '*')
    }
  } else {
    console.info('diyIFrameReady')
    window.diyIFrameElem.contentWindow.postMessage(resources[to.name], '*')
  }
})

export default router
