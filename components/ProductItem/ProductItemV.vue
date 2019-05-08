<template>
  <div @click="onClick" class="pitem">
    <div class="pi-left">
      <img :src="item.image" alt="">
    </div>
    <div class="pi-right">
      <div class="flex-r pi-title-line">
        <img :src="item.mall_icon" alt="">
        <p>{{item.title}}</p>
      </div>
      <div class="pi-shop-line">
        <span v-if="item.shop_name">【{{item.shop_name}}】</span>
      </div>
      <div class="pi-price-line">
        &yen;
        <big>{{item.discount_price}} </big>
        <span>&yen;{{item.price}}</span>
      </div>
      <div class="flex-r pi-line">
        <span>销量：{{item.sales}}</span>
        <Quan :value="item.amount" />
      </div>
      <div class="flex-r pi-line">
        <div v-if="item.fl_commission" class="pi-box">{{item.fl_commission}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Quan from './Quan';

export default {
  name: 'ProductItemV',
  props: {
    item: {
      type: Object,
      default: () => ({})
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
/* height155 = padding(20) + title(26) + shop(22) + price(50) + line(22) + line(22) */
.pitem {
  width: 100%;
  height: 155px;
  padding: 10px;
  box-sizing: border-box;
  background: white;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
}
.pi-left {
  width: 135px;
  height: 135px;
  margin-right: 7px;
}
.pi-left img {
  display: block;
  width: 100%;
}
.pi-right {
  flex: 1;
  overflow: hidden;
}
.pi-title-line { height: 26px; }
.pi-title-line img {
  width: 17px;
  height: 17px;
  margin-right: 6px;
  vertical-align: middle;
}
.pi-title-line p {
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: .28em;
  color: #323232;
}
.pi-shop-line {
  font-size: .26em;
  color: #151515;
  height: 22px;
  overflow: hidden;
}
.pi-price-line {
  font-size: .24em;
  color: #323232;
  height: 40px;
  line-height: 40px;
}
.pi-price-line big {
  font-size: 1.5em;
}
.pi-price-line span {
  text-decoration: line-through;
  color: #666;
}
.pi-line {
  height: 22px;
  font-size: .24em;
  color: #666;
}
.pi-box {
  font-size: .9em;
  color: white;
  height: 18px;
  padding: 0 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFA748;
  border-radius: 3px;
}
</style>
