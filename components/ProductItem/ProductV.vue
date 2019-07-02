<template>
  <div @click="onClick" class="x-pitem">
    <div class="x-pi-left">
      <img v-if="lazy" v-lazy="item.cover_image" alt="">
      <img v-else :src="item.cover_image" alt="">
    </div>
    <div class="x-pi-right">
      <div class="flex-r x-pi-title-line">
        <img :src="item.mall_icon" alt="">
        <p>{{item.title}}</p>
      </div>
      <div class="flex-r x-pi-shop-line">
        <p v-if="item.shop_name">【{{item.shop_name}}】</p>
      </div>
      <div class="flex-r x-pi-line">
        <div v-if="item.fl_commission" class="gborder gtcolor x-pi-box"><span>{{item.fl_commission}}</span></div>
        <span class="x-pil-txt">销量：{{item.month_sales}}</span>
      </div>
      <div class="flex-r x-pi-price-line">
        <div class="x-pi-price">
          &yen;
          <big class="gtcolor">{{item.discount_price}} </big>
          <span>&yen;{{item.price}}</span>
        </div>
        <Quan :value="item.coupon_money_text" />
      </div>
    </div>
  </div>
</template>

<script>
import Quan from './Quan';

export default {
  name: 'XProductV',
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
  components: {
    Quan
  },
  methods: {
    onClick() {
      this.$emit('click', this.item)
    }
  }
}
</script>


<style scoped>
.flex-r {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
/* height280 = padding(40) + title(50) + shop(50) + line(80) + price(60) */
.x-pitem {
  position: relative;
  width: 100%;
  height: 2.8em;
  padding: .2em;
  box-sizing: border-box;
  background: white;
  display: flex;
  flex-direction: row;
  cursor: pointer;
}
.x-pitem::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 2.6em;
  right: .2em;
  height: 1px;
  background: #E1E1E1;
  transform: scaleY(.5);
}
.x-pi-left {
  width: 2.4em;
  height: 2.4em;
  margin-right: 7px;
  background: #f6f6f6;
}
.x-pi-left img {
  display: block;
  width: 100%;
  border-radius: .1em;
}
.x-pi-right {
  flex: 1;
  overflow: hidden;
}
.x-pi-title-line { height: .5em; }
.x-pi-title-line img {
  width: .3em;
  height: .3em;
  margin-right: 6px;
  vertical-align: middle;
}
.x-pi-title-line p {
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: .3em;
  font-weight: 400;
  color: black;
  margin: 0;
}
.x-pi-shop-line {
  color: #333;
  height: .5em;
  white-space: nowrap;
  overflow: hidden;
}
.x-pi-shop-line p {
  font-size: .28em;
  margin: 0;
}
.x-pi-price-line {
  color: #323232;
  height: .6em;
}
.x-pi-price {
  font-size: .24em;
  color: #F72353;
}
.x-pi-price big {
  font-size: 1.5em;
  font-weight: bold;
}
.x-pi-price span {
  text-decoration: line-through;
  color: #666;
}
.x-pi-line {
  height: .8em;
  color: #666;
}
.x-pil-txt {
  font-size: .24em;
}
.x-pi-box {
  color: #F72353;
  height: .36em;
  padding: 0 .2em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #F72353;
  border-radius: .2em;
}
.x-pi-box span {
  font-size: .28em;
}
</style>
