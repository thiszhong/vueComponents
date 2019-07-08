<template>
  <!-- 商品item，一行放一个的那种 -->
  <div @click="onClick" class="x-product-v">
    <div class="x-pv-left">
      <img v-if="lazy" v-lazy="item.cover_image" alt="">
      <img v-else :src="item.cover_image" alt="">
    </div>
    <div class="x-pv-right">
      <!-- title -->
      <ProductTitle :icon="item.mall_icon" :title="item.title" />
      <!-- shop -->
      <div class="flex_r_sb x-pv-shop-line">
        <p v-if="item.shop_name">【{{item.shop_name}}】</p>
      </div>
      <!-- 佣金 & 销量 -->
      <div class="flex_r_sb x-pv-line">
        <ProductZhuan :value="item.fl_commission" />
        <ProductText :value="`销量：${item.month_sales}`" />
      </div>
      <div class="flex_r_sb x-pv-price-line">
        <div style="font-size: 16px;">
          <ProductPrice :value="item.discount_price" />
          <ProductText :value="`&yen;${item.price}`" line-through />
        </div>
        <ProductQuan :value="item.coupon_money_text" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductQuan from './ProductQuan'
import ProductTitle from './ProductTitle'
import ProductZhuan from './ProductZhuan'
import ProductText from './ProductText'
import ProductPrice from './ProductPrice'

export default {
  name: 'XProductV',
  components: {
    ProductQuan,
    ProductTitle,
    ProductZhuan,
    ProductText,
    ProductPrice
  },
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    lazy: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick() {
      this.$emit('click', this.item)
    }
  }
}
</script>


<style>
.flex_r_sb {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.x-product-v {
  line-height: 20px;
  position: relative;
  width: 100%;
  height: 140px;
  padding: 10px;
  box-sizing: border-box;
  background: white;
  display: flex;
  flex-direction: row;
  cursor: pointer;
}
.x-product-v::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 130px;
  right: 10px;
  height: 1px;
  background: #E1E1E1;
  transform: scaleY(.5);
}
.x-pv-left {
  width: 120px;
  height: 120px;
  margin-right: 7px;
  background: #f6f6f6;
}
.x-pv-left img {
  display: block;
  width: 100%;
  border-radius: .1em;
}
.x-pv-right {
  flex: 1;
  overflow: hidden;
}
.x-pv-shop-line {
  color: #333;
  height: 24px;
  white-space: nowrap;
  overflow: hidden;
}
.x-pv-shop-line p {
  font-size: 14px;
  margin: 0;
}
.x-pv-price-line {
  height: 30px;
}
.x-pv-line {
  height: 40px;
}
</style>
