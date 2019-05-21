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
  {
    path: '/XSlider',
    name: 'XSlider',
    meta: {
      title: '轮播'
    },
    component: () => import(/* webpackChunkName: "slider" */ '../components_demo/Slider')
  },
  {
    path: '/XImageText',
    name: 'XImageText',
    meta: {
      title: '图文'
    },
    component: () => import(/* webpackChunkName: "image_text" */ '../components_demo/ImageText')
  },
  {
    path: '/XEntry',
    name: 'XEntry',
    meta: {
      title: '栅格入口'
    },
    component: () => import(/* webpackChunkName: "entry" */ '../components_demo/Entry')
  },
  {
    path: '/XChannel',
    name: 'XChannel',
    meta: {
      title: '频道/豆腐块'
    },
    component: () => import(/* webpackChunkName: "channel" */ '../components_demo/Channel')
  },
  {
    path: '/XScrollableBar',
    name: 'XScrollableBar',
    meta: {
      title: '频道/豆腐块'
    },
    component: () => import(/* webpackChunkName: "scrollable_bar" */ '../components_demo/ScrollableBar')
  },
  {
    path: '/XCoupon',
    name: 'XCoupon',
    meta: {
      title: '优惠券'
    },
    component: () => import(/* webpackChunkName: "coupon" */ '../components_demo/Coupon')
  },
  {
    path: '/XSectionTitle',
    name: 'XSectionTitle',
    meta: {
      title: '标题'
    },
    component: () => import(/* webpackChunkName: "section_title" */ '../components_demo/SectionTitle')
  },
]