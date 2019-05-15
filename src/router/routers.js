export default [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "hello" */ '../components_demo/HelloWorld.vue')
  },
  {
    path: '/XProductV',
    name: 'XProductV',
    meta: {
      title: '商品item竖版'
    },
    component: () => import(/* webpackChunkName: "hello" */ '../components_demo/ProductItemV')
  },
  {
    path: '/XSearch',
    name: 'XSearch',
    meta: {
      title: '搜索'
    },
    component: () => import(/* webpackChunkName: "search" */ '../components_demo/Search')
  },
  {
    path: '/XSortBar',
    name: 'XSortBar',
    meta: {
      title: '排序'
    },
    component: () => import(/* webpackChunkName: "sort" */ '../components_demo/SortBar')
  },
  {
    path: '/XCouponFilter',
    name: 'XCouponFilter',
    meta: {
      title: '筛选有券'
    },
    component: () => import(/* webpackChunkName: "coupon_filter" */ '../components_demo/CouponFilter')
  },
]