<!-- components/Switch.vue -->
<template>
  <div class="card-container">
    <div class="header">
      <p>外卖</p>
      <p>深圳灵犀科技有限公司</p>
      <p>已完成</p>
    </div>
    <div class="content">
      <div class="left">
        <div>
          <p>焦糖拿铁</p>
          <p>等共2件商品</p>
        </div>
        <p>2019-05-15 13:09:34</p>
      </div>
      <div class="right">
          <p>17.88</p>
          <van-button type="default" size="small">再来一单</van-button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {},
  data() {
    return {};
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
}
.header {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(204, 204, 204, 0.158);
}
.header p:nth-child(1) {
  font-size: 10px;
  color: #8eaacb;
  padding: 0.5px 3px;
  border: 1px solid #8eaacb;
  border-radius: 3px;
}
.header p:nth-child(2) {
  font-size: 14px;
  color: #333;
}
.header p:nth-child(3) {
  font-size: 14px;
  color: #807d7d80;
}
.content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
}
.content .left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.content .left div:nth-child(1) {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  color: #333;
}
.content .left div:nth-child(1) p:nth-child(1) {
  font-size: 15px;
  margin-right: 10px;
  color: #333;
  font-weight: 500;
}
.content .left div:nth-child(1) p:nth-child(2) {
  font-size: 13px;
}
.content .left > p {
  font-size: 10px;
  color: #807d7d80;
}
.content .right{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.content .right>p{
  font-size: 15px;
  color:#333;
  margin-bottom: 10px;
}
.content .right>p::before{
  content:"¥";
  font-size: 15px;

}
</style>