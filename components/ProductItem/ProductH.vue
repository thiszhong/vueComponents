<template>
  <!-- 商品item，一行可以放两个的那种 -->
  <div class="x-product-h-wrap">
    <div class="x-product-h">
      <div class="x-ph-img">
        <img v-if="lazy" v-lazy="item.cover_image" alt="">
        <img v-else :src="item.cover_image" alt="">
      </div>
      <div class="x-ph-content">
        <ProductTitle :icon="item.mall_icon" :title="item.title" />
        <div class="x-ph-line">
          <ProductZhuan :value="item.fl_commission" />
        </div>
        <div class="flex-r x-ph-price-line">
          <ProductPrice :value="item.discount_price" />
          <ProductQuan :value="item.coupon_money_text" />
        </div>
        <div class="flex-r">
          <ProductText :value="`&yen;${item.price}`" line-through />
          <ProductText :value="`销量:${item.month_sales}`" />
        </div>
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

<style lang="less">
.flex-r {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.x-product-h-wrap {
  font-size: 16px;
  width: 50%;
  float: left;
  padding: 0 2%;
  box-sizing: border-box;
}
.x-product-h {
  background: white;
  border-radius: 5px;
  overflow: hidden;
  .x-ph-img {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    overflow: hidden;
    img {
      display: block;
      width: 100%;
    }
  }
  .x-ph-content {
    padding: 3px 5px;
  }
  .x-ph-line {
    padding: 3px 0;
  }
  .x-ph-price-line {
    height: 30px;
  }
}
</style>
