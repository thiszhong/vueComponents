<template>
  <!-- 商品item，一行可以放两个的那种 -->
  <!-- <div @click="onClick" class="x-product-h-wrap"> -->
  <div @click="onClick" class="x-product-h">
    <div class="x-ph-img">
      <img v-if="lazy" v-lazy="item.cover_image" alt="">
      <img v-else :src="item.cover_image" alt="">
    </div>
    <div class="x-ph-content">
      <ProductTitle :icon="item.mall_icon" :title="item.title" />
      <div class="flex_r_sb x-ph-zhuan-line">
        <ProductZhuan :value="item.fl_commission" small />
      </div>
      <div class="flex_r_sb x-ph-price-line">
        <ProductPrice :value="item.discount_price" lite />
        <ProductQuan :value="item.coupon_money_text" />
      </div>
      <div class="flex_r_sb x-ph-line">
        <ProductText :value="`&yen;${item.price}`" line-through />
        <ProductText :value="`销量:${item.month_sales}`" />
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import ProductQuan from './ProductQuan'
import ProductTitle from './ProductTitle'
import ProductZhuan from './ProductZhuan'
import ProductText from './ProductText'
import ProductPrice from './ProductPrice'

export default {
  name: 'XProductH',
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
/* .x-product-h-wrap {
  font-size: 16px;
  width: 49%;
  float: left;
  padding-left: 2%;
  padding-bottom: 2%;
  box-sizing: border-box;
} */
.x-product-h {
  /* width: 3.42rem; */
  width: 49%;
  height: 5.39rem;
  margin-top: .24rem;
  background: white;
  border-radius: .16rem;
  overflow: hidden;
}
.x-ph-img {
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  overflow: hidden;
}
.x-ph-img img {
  display: block;
  width: 100%;
}
.x-ph-content {
  padding: 4px .12rem;
}
.x-ph-zhuan-line {
  height: .44rem;
}
.x-ph-line {
  height: .34rem;
}
.x-ph-price-line {
  height: .56rem;
}
</style>
