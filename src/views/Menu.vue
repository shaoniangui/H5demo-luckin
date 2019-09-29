<template>
  <div class="container">
    <span class="menu-fixed-title" id="fixedTitle">选择咖啡与小食</span>
    <van-swipe :autoplay="3000" v-bind:style="{'margin-top': fixedTitleTop + 'px'}">
      <van-swipe-item v-for="(image, index) in scrollImages" :key="index">
        <img class="scroll-img" v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <div class="main">
      <!-- 侧边导航 -->
      <van-sidebar
        v-model="activeKey"
        id="sideBar"
        :class="tabBarFixed===true ? 'tab-bar-fixed' : ''"
      >
        <van-sidebar-item
          v-for="(menu,menuIndex) in menus"
          :title="menu.name"
          :key="menuIndex"
          :info="menu.tip"
          @click="clickTab"
        />
      </van-sidebar>
      <!-- 占位 -->
      <van-sidebar class="hide-bar" v-if="tabBarFixed===true">
        <van-sidebar-item
          v-for="(menu,menuIndex) in menus"
          :title="menu.name"
          :key="menuIndex"
          :info="menu.tip"
          @click="clickTab"
        />
      </van-sidebar>
      <!-- 索引栏 -->
      <div class="content-container">
        <van-index-bar highlight-color="#2c3e50">
          <div v-for="(menu,menuIndex) in menus" :key="menuIndex">
            <van-index-anchor index="menuIndex">
              <div class="menu-name" :id="'tab_nav_'+menuIndex">
                <van-divider content-position="left">{{menu.name}}</van-divider>
              </div>
            </van-index-anchor>
            <div
              v-for="(product,productIndex) in menu.product"
              :key="productIndex"
              class="product-item"
            >
              <img class="product-img" v-lazy="require('../assets/images/coffce.jpg')" />
              <div class="product-con">
                <span class="product-con-desc">
                  <p>{{product.productName}}</p>
                  <p>Vanila Latte</p>
                </span>
                <p class="product-price">{{product.price}}</p>
              </div>
              <van-icon name="add" class="add-icon" color="#88aace" />
            </div>
          </div>
        </van-index-bar>
      </div>
    </div>
  </div>
</template>

<script>
import todo from "../api/todo";
export default {
  name: "menuPage",
  created() {},
  data() {
    return {
      fixedTitleTop: null,
      activeKey: 0,
      tabBarFixed: false,
      scrollImages: [
        require("../assets/images/banner1.jpg"),
        require("../assets/images/banner2.jpg"),
        require("../assets/images/banner3.jpg"),
        require("../assets/images/banner4.jpg")
      ],
      menus: [
        {
          name: "人气Top",
          product: [
            {
              productName: "香草拿铁",
              price: "27"
            },
            {
              productName: "大红袍牛乳茶",
              price: "21"
            },
            {
              productName: "香草拿铁",
              price: "27"
            },
            {
              productName: "大红袍牛乳茶",
              price: "21"
            }
          ]
        },
        {
          name: "大师咖啡",
          tip: "上新",
          product: [
            {
              productName: "陨石拿铁",
              price: "27"
            },
            {
              productName: "拿铁",
              price: "23"
            },
            {
              productName: "陨石拿铁",
              price: "27"
            },
            {
              productName: "拿铁",
              price: "23"
            },
            {
              productName: "陨石拿铁",
              price: "27"
            },
            {
              productName: "拿铁",
              price: "23"
            }
          ]
        },
        {
          name: "人气Top",
          tip: "上新",
          product: [
            {
              productName: "香草拿铁",
              price: "27"
            },
            {
              productName: "大红袍牛乳茶",
              price: "21"
            },
            {
              productName: "香草拿铁",
              price: "27"
            },
            {
              productName: "大红袍牛乳茶",
              price: "21"
            }
          ]
        },
        {
          name: "大师咖啡",
          tip: "",
          product: [
            {
              productName: "陨石拿铁",
              price: "27"
            },
            {
              productName: "拿铁",
              price: "23"
            },
            {
              productName: "陨石拿铁",
              price: "27"
            },
            {
              productName: "拿铁",
              price: "23"
            },
            {
              productName: "陨石拿铁",
              price: "27"
            },
            {
              productName: "拿铁",
              price: "23"
            }
          ]
        },
        {
          name: "人气Top",
          product: [
            {
              productName: "香草拿铁",
              price: "27"
            },
            {
              productName: "大红袍牛乳茶",
              price: "21"
            },
            {
              productName: "香草拿铁",
              price: "27"
            },
            {
              productName: "大红袍牛乳茶",
              price: "21"
            }
          ]
        },
        {
          name: "大师咖啡",
          tip: "",
          product: [
            {
              productName: "陨石拿铁",
              price: "27"
            },
            {
              productName: "拿铁",
              price: "23"
            },
            {
              productName: "陨石拿铁",
              price: "27"
            },
            {
              productName: "拿铁",
              price: "23"
            },
            {
              productName: "陨石拿铁",
              price: "27"
            },
            {
              productName: "拿铁",
              price: "23"
            }
          ]
        },
        {
          name: "人气Top",
          product: [
            {
              productName: "香草拿铁",
              price: "27"
            },
            {
              productName: "大红袍牛乳茶",
              price: "21"
            },
            {
              productName: "香草拿铁",
              price: "27"
            },
            {
              productName: "大红袍牛乳茶",
              price: "21"
            }
          ]
        },
        {
          name: "大师咖啡",
          tip: "",
          product: [
            {
              productName: "陨石拿铁",
              price: "27"
            },
            {
              productName: "拿铁",
              price: "23"
            },
            {
              productName: "陨石拿铁",
              price: "27"
            },
            {
              productName: "拿铁",
              price: "23"
            },
            {
              productName: "陨石拿铁",
              price: "27"
            },
            {
              productName: "拿铁",
              price: "23"
            }
          ]
        },
        {
          name: "人气Top",
          product: [
            {
              productName: "香草拿铁",
              price: "27"
            },
            {
              productName: "大红袍牛乳茶",
              price: "21"
            },
            {
              productName: "香草拿铁",
              price: "27"
            },
            {
              productName: "大红袍牛乳茶",
              price: "21"
            }
          ]
        },
        {
          name: "大师咖啡",
          tip: "",
          product: [
            {
              productName: "陨石拿铁",
              price: "27"
            },
            {
              productName: "拿铁",
              price: "23"
            },
            {
              productName: "陨石拿铁",
              price: "27"
            },
            {
              productName: "拿铁",
              price: "23"
            },
            {
              productName: "陨石拿铁",
              price: "27"
            },
            {
              productName: "拿铁",
              price: "23"
            }
          ]
        }
      ]
    };
  },
  mounted: function() {
    let fixedTitle = document.getElementById("fixedTitle"); // 滚动区域
    let fixedTitleTop = fixedTitle.scrollHeight; // div 的高度
    this.fixedTitleTop = fixedTitleTop;

    let sideBarObj = document.getElementById("sideBar"); // 滚动区域
    let offsetTop = sideBarObj.offsetTop; // div 到头部的距离
    this.offsetTop = offsetTop;

    document.addEventListener("scroll", this.watchTabScroll, true); // 监听（绑定）滚轮滚动事件
  },
  computed: {
    // 计算属性的 getter
    computMenus: function() {
      // `this` 指向 vm 实例
      return this.menus.map(obj => {
        return obj.name;
      });
    }
  },
  destroyed: function() {
    document.removeEventListener("scroll", this.watchTabScroll); //  离开页面清除（移除）滚轮滚动事件
  },
  methods: {
    clickTab: function(id) {
      let obj = {
        behavior: "smooth",
        block: "center"
      };
      document.getElementById("tab_nav_" + id).scrollIntoView(obj);
    },
    //监听侧边栏滚动，处理吸顶
    watchTabScroll: function() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      scrollTop >= this.offsetTop
        ? (this.tabBarFixed = true)
        : (this.tabBarFixed = false);
    }
  }
};
</script>
<style>
.container {
  display: flex;
  flex-direction: column;
}
.menu-fixed-title {
  position: fixed;
  top: 0;
  background: #fff;
  width: 100%;
  font-size: 20px;
  z-index: 2;
  color: #333;
  padding: 10px 0;
  font-weight: 500;
}
.content-container {
  flex: 1;
}
.scroll-img {
  width: 100%;
  height: 150px;
}
.tab-bar-fixed {
  position: fixed;
  top: 56px;
}
.hide-bar {
  position: relative;
  left: -200px;
}
.main {
  display: flex;
}
.main .van-sidebar-item {
  padding: 15px 12px 15px 8px;
  font-weight: 500;
  color: #969799;
}
/* .main .van-index-anchor--sticky{
  top:50px;
} */
.main .van-sidebar-item--select {
  color: #333;
  font-weight: 500;
  border-color: #88aace;
  font-size: 15px;
}
.main .van-index-bar {
  flex: 1;
}
.van-index-bar > .van-index-bar__sidebar {
  display: none;
}
.menu-name {
  font-size: 15px;
  font-weight: bold;
  text-align: left;
}
.product-item {
  display: flex;
  padding: 0 16px;
  margin: 16px 0;
  position: relative;
}
.add-icon {
  position: absolute;
  right: 20px;
  bottom: 10px;
}
.product-img {
  width: 80px;
  height: 80px;
  background: #eee;
  border-radius: 5px;
}
.product-con {
  display: flex;
  flex-direction: column;
  height: 80px;
  justify-content: space-around;
  margin-left: 10px;
}
.product-con .product-con-desc{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.product-con .product-con-desc p:nth-child(1) {
  font-size: 15px;
  font-weight: 500;
  color: #333;
}
.product-con .product-con-desc p:nth-child(2) {
  font-size: 12px;
  font-weight: 500;
  color: #969799;
}
.product-con .product-price {
  font-size: 15px;
  font-weight: 500;
  color: #333;
  text-align: left;
}
.product-con .product-price::before {
  content: "¥";
  font-size: 15px;
  font-weight: 500;
  color: #333;
}
</style>