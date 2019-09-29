<template>
  <div id="app">
    <van-tabbar v-model="active" id="footerBar" active-color="#07c160" inactive-color="#000">
      <van-tabbar-item
        v-for="(item,itemIndex) in menus"
        :name="item.name"
        v-bind:key="itemIndex"
        :to="item.to"
      >
        <span class="tab-name">{{item.name}}</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? item.icon.active : item.icon.normal"
        />
      </van-tabbar-item>
    </van-tabbar>
    <router-view />
  </div>
</template>
<script>
// 禁止缩放页面
window.onload = function() {
  document.addEventListener("touchstart", function(event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  });
  document.addEventListener("gesturestart", function(event) {
    event.preventDefault();
  });
};
export default {
  data() {
    return {
      active: "home",
      menus: [
        {
          name: "首页",
          icon: {
            active: require("./assets/images/active-home.png"),
            normal: require("./assets/images/normal-home.png")
          },
          to: "/"
        },
        {
          name: "菜单",
          icon: {
            active: require("./assets/images/active-menu.png"),
            normal: require("./assets/images/normal-menu.png")
          },
          to: "/menuPage"
        },
        {
          name: "订单",
          icon: {
            active: require("./assets/images/active-order.png"),
            normal: require("./assets/images/normal-order.png")
          },
          to: "/order"
        },
        {
          name: "购物车",
          icon: {
            active: require("./assets/images/active-shopcart.png"),
            normal: require("./assets/images/normal-shopcart.png")
          },
          to: "/shopcart"
        },
        {
          name: "我的",
          icon: {
            active: require("./assets/images/active-me.png"),
            normal: require("./assets/images/normal-me.png")
          },
          to: "/me"
        }
      ]
    };
  }
};
</script>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.tab-name {
  color: #13227a;
  font-weight: 500;
}
</style>
