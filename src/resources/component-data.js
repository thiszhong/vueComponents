const iconPlaceholder = require('../assets/placeholder/ph-icon.png')

export default {
  'Search': {
    page: [
      {
        keyword: 'Search',
        props: {
        }
      }
    ],
    title: '搜索框组件'
  },
  'SortBar': {
    page: [
      {
        keyword: 'SortBar',
        props: {
        }
      }
    ],
    title: '排序组件'
  },
  'Slider': {
    page: [
      {
        keyword: 'Slider',
        props: {
        }
      }
    ],
    title: '轮播组件'
  },
  'ImageText': {
    page: [
      {
        keyword: 'ImageText',
        props: {
          'only-image': false
        }
      }
    ],
    title: '图文组件'
  },
  'Entry': {
    page: [
      {
        keyword: 'Entry',
        props: {
          list: [1,2,3,4,5,6,7,8,9,10].map((item, index) => {
            return {cover: iconPlaceholder, title: '标题', subtitleType: index % 2 === 0 ? 1 : 2, subtitleValue: 'xx'}
          })
        }
      }
    ],
    title: '图标导航组件'
  },
  'Channel': {
    page: [
      {
        keyword: 'Channel',
        props: {
          list: [{}, {}, {}, {}, {}, {}]
        }
      }
    ],
    title: '图片导航组件'
  },
  'ScrollableBar': {
    page: [
      {
        keyword: 'ScrollableBar',
        props: {
          list: [1,2,3,4,5,6,7,8,9,10].map(() => {
            return {name: '女装'}
          })
        }
      }
    ],
    title: '可滑动导航组件'
  },
  'Coupon': {
    page: [
      {
        keyword: 'Coupon',
        props: {
          amount: 5,
          start_time: '2019-06-01', end_time: '2019-06-02',
          bgColor: '#f6f6f6'
        }
      }
    ],
    title: '可滑动导航组件'
  },
  'SectionTitle': {
    page: [
      {
        keyword: 'SectionTitle',
        props: {
          title: '一个标题',
          type: 'circle'
        }
      }
    ],
    title: '标题组件'
  }
}