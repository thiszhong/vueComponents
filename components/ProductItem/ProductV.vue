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
      <!-- <div class="flex_r_sb x-pv-shop-line">
        <p v-if="item.shop_name">【{{item.shop_name}}】</p>
      </div> -->
      <!-- 佣金 -->
      <div class="x-pv-zhuan-line">
        <ProductZhuan :value="item.fl_commission" />
      </div>
      <div class="flex_r_sb x-pv-price-line">
        <ProductPrice :value="item.discount_price" :lite="!item.coupon_money_text" />
        <ProductQuan :value="item.coupon_money_text" />
      </div>
      <div class="flex_r_sb x-pv-line">
        <ProductText :value="`&yen;${item.price}`" line-through />
        <ProductText :value="`销量：${item.month_sales}`" />
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
  height: 2.56rem;
  padding: .2rem;
  margin-top: .2rem;
  box-sizing: border-box;
  background: white;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  border-radius: .2rem;
}
.x-pv-left {
  width: 2.16rem;
  height: 2.16rem;
  margin-right: .2rem;
  background: #f6f6f6;
}
.x-pv-left img {
  display: block;
  width: 100%;
}
.x-pv-right {
  flex: 1;
  overflow: hidden;
}
/* .x-pv-shop-line {
  color: #333;
  height: 24px;
  white-space: nowrap;
  overflow: hidden;
}
.x-pv-shop-line p {
  font-size: 14px;
  margin: 0;
} */
.x-pv-zhuan-line {
  height: .78rem;
  padding-top: .13rem;
  box-sizing: border-box;
}
.x-pv-price-line {
  height: .6rem;
}
.x-pv-line {
  height: .34rem;
}
</style>
