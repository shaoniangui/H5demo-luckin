<template>
  <div class="shopcart-container">
    <span class="fixed-top-title">购物车</span>
    <img v-lazy="adImg" class="ad-img" />

    <shopCartCard />

    <!-- 猜你喜欢 -->
    <div class="more-list">
      <div class="more-header">
        <p>猜你喜欢</p>
        <div class="replay">
          <van-icon name="replay" color="#88aace" size="14px" />
          <p>换一批</p>
        </div>
      </div>
      <div class="more-card-list">
        <div class="more-card-item" v-for="num in [1,1,1]">
          <img class="product-img" v-lazy="require('../assets/images/coffce.jpg')" />
          <div class="product-container">
            <span class="product-content">
              <p>意大利烧鸡卷</p>
              <p>Bacon&Fried Mu</p>
            </span>
            <div class="more-card-item-bottom">
              <span class="prices">
                <p>8.58</p>
                <p>13</p>
              </span>
              <van-icon name="add" size="24px" color="#88aace" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="left">
        <div class="left-top">
          <p>应付合计</p>
          <p>27</p>
        </div>
        <p class="left-bottom">用券可抵扣¥22.14</p>
      </div>
      <button class="right">去结算</button>
    </div>
  </div>
</template>

<script>
import shopCartCard from "@/components/shopCartCard.vue";

export default {
  name: "shopcart",
  components: {
    shopCartCard
  },
  created() {},
  mounted() {},
  data() {
    return {
      adImg: require("../assets/images/ad.jpg")
    };
  },

  methods: {}
};
</script>
<style scoped>
.shopcart-container {
  background: #fafafa;
  min-height: 100vh;
}
.fixed-top-title {
  display: block;
  background: #fff;
  width: 100%;
  font-size: 20px;
  z-index: 2;
  color: #333;
  padding: 10px 0;
  font-weight: 500;
}
.shopcart-container .ad-img {
  width: 100%;
  height: 80px;
}
.footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  background: #fff;
  margin-top: 10px;
}
.footer .left {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  justify-content: center;
  color: #333;
}
.footer .left .left-top {
  display: flex;
  align-items: flex-end;
}
.footer .left .left-top p:nth-child(2) {
  font-size: 25px;
  line-height: 25px;
  margin-left: 5px;
}
.footer .left .left-top p:nth-child(2)::before {
  content: "¥";
}
.footer .left .left-bottom {
  color: #e98b20;
  font-size: 10px;
  text-align: left;
}
.footer .right {
  background: rgb(136, 170, 206);
  color: #fff;
  padding: 15px 40px;
  font-size: 18px;
  border:0;
}
/* 猜你喜欢 */
.more-list {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  margin-top: 120px;
}
.more-list .more-header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 5px;
}
.more-list .more-header p:nth-child(1) {
  font-size: 15px;
  color: #333;
  font-weight: 500;
}
.more-list .more-header p:nth-child(2) {
  font-size: 13px;
  color: #333;
  font-weight: 500;
  color: #88aace;
}
.more-list .more-header .replay {
  display: flex;
  align-items: center;
}
.more-list .more-card-list {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.more-list .more-card-list .more-card-item {
  display: flex;
  flex-direction: column;
  background: #fff;
}
.more-list .more-card-list .more-card-item .product-img {
  width: 100px;
  height: 100px;
  border-radius: 3px;
}
.more-list .more-card-list .more-card-item .product-container{
  padding: 5px;
}
.more-list .more-card-list .more-card-item .product-content {
  font-size: 13px;
  color: #333;
  text-align: left;
  margin-top: 5px;
}
.more-list .more-card-list .more-card-item .product-content p:nth-child(1) {
  font-weight: 500;
}
.more-list .more-card-list .more-card-item .product-content p:nth-child(2) {
  font-size: 10px;
  color: #807d7d80;
  letter-spacing: 0px;
}
.more-list .more-card-list .more-card-item .more-card-item-bottom {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.more-list .more-card-list .more-card-item .more-card-item-bottom .prices {
  display: flex;
  align-items: center;
}
.more-list
  .more-card-list
  .more-card-item
  .more-card-item-bottom
  .prices
  p:nth-child(1) {
  color: orange;
  font-size: 15px;
}
.more-list
  .more-card-list
  .more-card-item
  .more-card-item-bottom
  .prices
  p:nth-child(2) {
  color: orange;
  font-size: 12px;
  color: #807d7d80;
  text-decoration: line-through;
}
.more-list
  .more-card-list
  .more-card-item
  .more-card-item-bottom
  .prices
  p::before {
  content: "¥";
}
</style>
