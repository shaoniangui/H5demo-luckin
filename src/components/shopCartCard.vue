<!-- components/Switch.vue -->
<template>
  <div class="card-container">
    <div class="left">
      <van-icon name="checked" color="#88aace" />
      <div class="shop-content">
        <p>焦糖拿铁</p>
        <p>大/全糖(推荐)/热</p>
      </div>
    </div>
    <div class="shop-params">
      <p>¥27</p>
      <img class="reduce-icon" v-lazy="require('../assets/images/reduce.png')" />
      <p class="num">5</p>
      <van-icon name="add" size="24px" color="#88aace" />
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      value: 1
    };
  },
  watch: {},
  methods: {
    toggle() {}
  }
};
</script>

<style lang="less" scoped>
.card-container {
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  margin-top: 10px;
  background: #fff;
  color: #333;
  display: flex;
  justify-content: space-between;
}
.shop-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
}
.shop-content p:nth-child(1) {
  font-size: 15px;
  font-weight: 500;
  color:#333;
}
.shop-content p:nth-child(2) {
  font-size: 13px;
}
.left{
    display: flex;
    align-items: center;
}
.shop-params {
  display: flex;
  align-items: center;
}
.shop-params p:nth-child(1) {
  font-size: 15px;
  font-weight: 500;
  margin-right: 5px;
}
.shop-params .num {
  font-size: 15px;
  font-weight: 500;
  color: #88aace;
  margin-right: 5px;
}
.reduce-icon {
  width: 24px;
  height: 24px;
  margin-right: 5px;
}
</style>