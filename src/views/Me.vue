<template>
  <div class="me-container">
    <!-- 头部 -->
    <div class="header">
      <van-icon name="music" color="#fff" dot class="header-music-icon" />
      <div class="info">
        <div class="left">
          <img class="user-avatar" v-lazy="require('../assets/images/coffce.jpg')" />
          <p class="user-name">马先生</p>
        </div>
        <van-icon name="arrow" color="#eee" size="15px" />
      </div>
    </div>
    <!-- 列表 -->
    <div class="card-list">
      <div class="header-card">
        <span class="header-card-item" v-for="num in [1,2,3,4]">
          <p>0元</p>
          <p>账户余额</p>
        </span>
      </div>
      <div class="card-item">
        <p>个人资料</p>
        <van-icon name="arrow" color="#eee" size="15px" />
      </div>
      <div class="card-item">
        <p>兑换优惠</p>
        <van-icon name="arrow" color="#eee" size="15px" />
      </div>
      <div class="card-item">
        <p>发票管理</p>
        <van-icon name="arrow" color="#eee" size="15px" />
      </div>
      <div class="card-item" style="margin-top:10px;">
        <p>帮助反馈</p>
        <van-icon name="arrow" color="#eee" size="15px" />
      </div>
    </div>
    <img v-lazy="require('../assets/images/ad.jpg')" class="ad-img" />
  </div>
</template>

<script>
export default {
  name: "me",
  created() {},
  methods: {}
};
</script>
<style scoped>
.me-container {
  background: #fafafa;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.ad-img {
  width: 90%;
  height: 90px;
  border-radius: 5px;
  margin-top: 10px;
}
.header {
  width: 100%;
  background: rgb(87, 68, 59);
  padding: 50px 20px;
  box-sizing: border-box;
  position: relative;
}
.header-music-icon {
  position: absolute;
  top: 20px;
  right: 20px;
}
.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.info .left {
  display: flex;
  align-items: center;
}
.user-avatar {
  width: 60px;
  height: 60px;
  border-radius: 3px;
  border-radius: 50%;
}
.user-name {
  font-size: 13px;
  font-weight: 500;
  color: #fff;
  margin-left: 15px;
}
.card-item {
  padding: 20px 20px;
  border-bottom: 1px solid rgba(204, 204, 204, 0.158);
  font-size: 15px;
  color: #333;
  font-weight: 500;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  background: #fff;
}
.card-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.header-card {
  width: 90%;
  box-sizing: border-box;
  display: flex;
  padding: 15px 0;
  justify-content: space-around;
  box-shadow: 2px 2px 10px #e0dfdf;
  border-radius: 6px;
  position: relative;
  top: -10px;
  background: #fff;
}
.header-card-item {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #333;
}
.header-card-item p:nth-child(2) {
  margin-top: 5px;
}
</style>