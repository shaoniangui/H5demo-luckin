<!-- components/Switch.vue -->
<template>
  <div class="weui-div" @click.stop="toggle">
    <span class="weui-switch" :class="{'weui-switch-on' : me_checked}" :value="value" ></span>
    <div  :class="[{'color':value},'weui-div-2']">自提</div>
    <div  :class="[{'color':!value},'weui-div-1']">外送</div>
  </div>
</template>


<script>
  export default {
    props: {
      value: {
        type: Boolean,
        default: true
      },
      FId: {
        type: String,
        default: '',
      },
      index: {
        type: Number,
        default:11090,
      },
      handle: {
        type: Boolean,
        default: true
      },
    },
    data() {
      return {
        me_checked: this.value
      }
    },
    watch: {
      value(){
        this.me_checked = this.value;
      }
    },
    methods: {
      toggle() {
        // 是否可点击
        if(this.handle === true){
          this.me_checked = !this.me_checked;
          this.$emit('changeSwitch', this.me_checked,this.FId,this.index);
        }

      }
    }
  }
</script>

<style>
.weui-div .color{
  color: rgb(132, 167, 206);
}
  .weui-div{
    position:relative;
    font-weight: bold;
    cursor:pointer;
    width: 75px;
    height: 30px;
  }
  .weui-div-1{
    position:absolute;
    width: 35px;
    right: 0;
    top:7.5px;
    line-height:16px;
    font-size:12px;
    color:#fff;
  }
  .weui-div-2{
    position:absolute;
    width: 35px;
    top:7.5px;
    line-height:16px;
    font-size:12px;
    color:#fff;
  }
  .weui-switch {
    display: block;
    position: relative;
    width: 75px;
    height: 30px;
    border: 1.5px solid rgb(132, 167, 206);
    outline: 0;
    border-radius: 15px;
    box-sizing: border-box;
    /* background-color: #DFDFDF; */
    transition: background-color 0.1s, border 0.1s;
    cursor: pointer;
  }
  .weui-switch:before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 75px;
    height: 30px;
    border-radius: 15px;
    /* background-color: #E6E6E6; */
    transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
  }
  .weui-switch:after {
    content: " ";
    position: absolute;
    top: -1px;
    left: -1px;
    width: 37.5px;
    height: 29px;
    border-radius: 15px;
    background-color: rgb(132, 167, 206);
    /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4); */
    transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
  }
  .weui-switch-on:after {
    transform: translateX(35px);
  }
</style>