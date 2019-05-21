<template>
  <div>
    <x-product-v :item="resource" @click="itemClick" />
    <x-product-v :item="resource" @click="itemClick" />

    <pre>
      &lt;x-product-v :item="resource" @click="itemClick" /&gt;
    </pre>
  </div>
</template>

<script>
import { XProductV } from '../../index';

export default {
  name: 'ProductItemVDemo',
  components: {
    XProductV
  },
  data() {
    return {
      resource: {
        title: '商品标题',
        image: 'http://img.alicdn.com/imgextra/i3/786178483/O1CN01x6c6MJ2CXGK8rX0sC_!!786178483.jpg_200x200.jpg',
        mall_icon: 'http://img.alicdn.com/imgextra/i3/786178483/O1CN01x6c6MJ2CXGK8rX0sC_!!786178483.jpg_200x200.jpg',
        shop_name: '店铺名称',
        price: '339.9',
        discount_price: '39.9',
        amount: 300,
        fl_commission: '赚9元',
        sales: 123456
      }
    }
  },
  methods: {
    itemClick(d) {
      alert(JSON.stringify(d))
    }
  }
}
</script>
