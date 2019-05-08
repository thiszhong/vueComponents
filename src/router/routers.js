export default [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "hello" */ '../components_demo/HelloWorld.vue')
  },
  {
    path: '/ProductItemV',
    name: 'ProductItemV',
    meta: {
      title: '商品item竖版'
    },
    component: () => import(/* webpackChunkName: "hello" */ '../components_demo/ProductItem')
  },
]