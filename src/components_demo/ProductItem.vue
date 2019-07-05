<template>
  <div>
    <ProductV :item="resource" @click="itemClick" />
    <ProductV :item="resource" @click="itemClick" />

    <pre>
      &lt;ProductV :item="resource" @click="itemClick" /&gt;
    </pre>

    <br>
    <ProductH :item="resource" @click="itemClick" />
    <ProductH :item="resource" @click="itemClick" />
    <div style="clear: both;"></div>

    <pre>
      &lt;ProductH :item="resource" @click="itemClick" /&gt;
    </pre>
  </div>
</template>

<script>
import { ProductV } from '../../index';
import { ProductH } from '../../index';

export default {
  name: 'ProductItemVDemo',
  components: {
    ProductV,
    ProductH
  },
  data() {
    return {
      resource: {
        title: '商品标题',
        cover_image: 'http://img.alicdn.com/imgextra/i3/786178483/O1CN01x6c6MJ2CXGK8rX0sC_!!786178483.jpg_200x200.jpg',
        mall_icon: 'http://img.alicdn.com/imgextra/i3/786178483/O1CN01x6c6MJ2CXGK8rX0sC_!!786178483.jpg_200x200.jpg',
        shop_name: '店铺名称',
        price: '339.9',
        discount_price: '39.9',
        amount: 300,
        coupon_money_text: '10元优惠券',
        fl_commission: '赚9元',
        month_sales: 123456
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
