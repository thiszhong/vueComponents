export default [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "hello" */ '../components_demo/HelloWorld.vue')
  },
  {
    path: '/ProductV',
    name: 'ProductV',
    meta: {
      title: '商品item竖版'
    },
    component: () => import(/* webpackChunkName: "hello" */ '../components_demo/ProductItemV')
  },
  {
    path: '/Search',
    name: 'Search',
    meta: {
      title: '搜索'
    },
    component: () => import(/* webpackChunkName: "search" */ '../components_demo/Search')
  },
  {
    path: '/SortBar',
    name: 'SortBar',
    meta: {
      title: '排序'
    },
    component: () => import(/* webpackChunkName: "sort" */ '../components_demo/SortBar')
  },
  {
    path: '/CouponFilter',
    name: 'CouponFilter',
    meta: {
      title: '筛选有券'
    },
    component: () => import(/* webpackChunkName: "coupon_filter" */ '../components_demo/CouponFilter')
  },
  {
    path: '/Slider',
    name: 'Slider',
    meta: {
      title: '轮播'
    },
    component: () => import(/* webpackChunkName: "slider" */ '../components_demo/Slider')
  },
  {
    path: '/ImageText',
    name: 'ImageText',
    meta: {
      title: '图文'
    },
    component: () => import(/* webpackChunkName: "image_text" */ '../components_demo/ImageText')
  },
  {
    path: '/Entry',
    name: 'Entry',
    meta: {
      title: '栅格入口'
    },
    component: () => import(/* webpackChunkName: "entry" */ '../components_demo/Entry')
  },
  {
    path: '/Channel',
    name: 'Channel',
    meta: {
      title: '频道/豆腐块'
    },
    component: () => import(/* webpackChunkName: "channel" */ '../components_demo/Channel')
  },
  {
    path: '/ScrollableBar',
    name: 'ScrollableBar',
    meta: {
      title: '频道/豆腐块'
    },
    component: () => import(/* webpackChunkName: "scrollable_bar" */ '../components_demo/ScrollableBar')
  },
  {
    path: '/Coupon',
    name: 'Coupon',
    meta: {
      title: '优惠券'
    },
    component: () => import(/* webpackChunkName: "coupon" */ '../components_demo/Coupon')
  },
  {
    path: '/SectionTitle',
    name: 'SectionTitle',
    meta: {
      title: '标题'
    },
    component: () => import(/* webpackChunkName: "section_title" */ '../components_demo/SectionTitle')
  },
]