<template>
  <div class="container">
    <span class="fixed-top-title" id="fixedTitle">选择咖啡与小食</span>
    <!-- 标签栏 -->
    <van-tabs v-model="activeName" sticky color="#8eaacb">
      <van-tab title="全部" name="a">
        <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
          <orderCard />
        </mescroll-vue>
      </van-tab>
      <van-tab title="立等可取" name="b">
        <orderCard />
      </van-tab>
      <van-tab title="预约订单" name="c">
        <orderCard />
      </van-tab>
    </van-tabs>
  </div>
</template>


<script>
import todo from "../api/todo";
import orderCard from "@/components/orderCard.vue";
import MescrollVue from "mescroll.js/mescroll.vue";
import axios from 'axios'

export default {
  name: "order",
  created() {},
  components: {
    orderCard,
    MescrollVue
  },
  data() {
    return {
      activeName: "a",
      mescroll: null, // mescroll实例对象
      mescrollDown: {}, //下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
      mescrollUp: {
        // 上拉加载的配置.
        callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
        //以下是一些常用的配置,当然不写也可以的.
        page: {
          num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
          size: 10 //每页数据条数,默认10
        },
        htmlNodata: '<p class="upwarp-nodata">-- END --</p>',
        noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于5才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看,这就是为什么无更多数据有时候不显示的原因
        toTop: {
          //回到顶部按钮
          src: "./static/mescroll/mescroll-totop.png", //图片路径,默认null,支持网络图
          offset: 1000 //列表滚动1000px才显示回到顶部按钮
        },
        empty: {
          //列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
          warpId: "xxid", //父布局的id (1.3.5版本支持传入dom元素)
          icon: "./static/mescroll/mescroll-empty.png", //图标,默认null,支持网络图
          tip: "暂无相关数据~" //提示
        }
      },
      dataList: [] // 列表数据
    };
  },
  methods: {
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
    upCallback(page, mescroll) {
      // 联网请求
      axios
        .get("xxxxxx", {
          params: {
            num: page.num, // 页码
            size: page.size // 每页长度
          }
        })
        .then(response => {
          // 请求的列表数据
          let arr = response.data;
          // 如果是第一页需手动置空列表
          if (page.num === 1) this.dataList = [];
          // 把请求到的数据添加到列表
          this.dataList = this.dataList.concat(arr);
          // 数据渲染成功后,隐藏下拉刷新的状态
          this.$nextTick(() => {
            mescroll.endSuccess(arr.length);
          });
        })
        .catch(e => {
          // 联网失败的回调,隐藏下拉刷新和上拉加载的状态;
          mescroll.endErr();
        });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  background: rgb(250, 250, 250);
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
</style>
