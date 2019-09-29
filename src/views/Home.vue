<template>
  <div class="container">
    <div class="fixed-scan">
      <img class="fixed-scan-img" v-lazy="scanImg">
    </div>
    <!-- 图片轮播 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, imageIndex) in scrollBanerImages" :key="imageIndex">
        <img class="scroll-img" v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 列表 -->
    <div class="content">

      <div class="content-item">
        <div class="item-left">
          <p>中安大厦店</p>
          <p>距您2.0km</p>
        </div>
        <div class="item-right">
          <Vswitch :value="value" :FId="FId" :index="index" class="vswitch" :handle="true" @changeSwitch="changeSwitch"></Vswitch>
        </div>
      </div>

      <div class="content-item" v-for="(item,itemIndex) in list" :key="itemIndex">
        <div class="item-left" >
          <p>{{item.title}}</p>
          <p>{{item.english}}</p>
        </div>
        <div class="item-right">
          <div class="right-img">
            <img v-lazy="item.icon" />
          </div>
        </div>
      </div>
      </div>
      <div class="ad">
          <img v-lazy="adImg" class="ad-img" />
      </div>

    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Vswitch from "@/components/Switch.vue";

export default {
  name: "home",
  components: {
    Vswitch
  },
  data() {
    return {
      scanImg:require("../assets/images/scan.png"),
      adImg:require("../assets/images/ad.jpg"),
      value:false,
      FId:'123',
      index:0,
      scrollBanerImages: [
        require('../assets/images/banner1.jpg'),
        require('../assets/images/banner2.jpg'),
        require('../assets/images/banner3.jpg'),
        require('../assets/images/banner4.jpg')
      ],
      list:[{
        title:"现在下单",
        english:"ORDER NOW",
        icon:require('../assets/images/coffce.png')
      },{
        title:"咖啡钱包",
        english:"COFFEE WALLET",
        icon:require('../assets/images/coupon.png')
      },{
        title:"送她咖啡",
        english:"SEND COFFEE",
        icon:require('../assets/images/liwu.png')
      },{
        title:"企业账户",
        english:"ENTERPRISE ACCOUNT",
        icon:require('../assets/images/qiye.png')
      }
      ]
    };
  },
  methods:{
    changeSwitch(checked,id,index){
      this.value = checked
    }
  }
};
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  background: #fafafa;
  min-height: 100vh;
}
  .scroll-img{
    width: 100vw;
    height: 225px;
  }
  .content{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .content-item{
    margin: 0 10px;
    border-bottom:1px solid rgba(204, 204, 204, 0.308);
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
  }
  .content-item:last-child{
    border-bottom: 0;
  }
  .item-left{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .item-left p:nth-child(1){
    font-size: 15px;
    color:#333;
    font-weight: 500;
  }
  .item-left p:nth-child(2){
    font-size: 7.5px;
    font-weight: 500;
    color: #878787;
  }
  .item-right{
    display: flex;
    align-items: center;
  }
  .right-img{
    width: 35px;
    height: 35px;
    box-sizing:border-box;
    border-radius: 50%;
    border: 1px solid rgb(198, 190, 182);
    padding: 7.5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-right img{
    width: 20px;
    height: 20px;
  }
  .fixed-scan{
    position: fixed;
    top: 15px;
    right: 10px;
    z-index: 2;
    background: #333;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    padding: 7.5px;
    box-sizing:border-box;
    opacity: .8;
    display: flex;
    justify-content: center;
  }
  .fixed-scan-img{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
  .ad{
    width: 100%;
  }
  .ad-img{
    width: 90%;
    height: 60px;
  }
</style>