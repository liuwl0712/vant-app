<!--
 * @Descripttion: 
 * @version: 
 * @Author: liuwl
 * @Date: 2021-05-25 15:44:15
 * @LastEditTime: 2021-06-07 10:43:23
-->
<template>
  <div class="login validation">
    <div class="small-round round animate__animated animate__fadeInLeft"></div>
    <div class="mini-round round animate__animated animate__fadeInLeft"></div>
    <div class="medium-round round animate__animated animate__fadeInRight"></div>
    <div class="div-1">
      <div class="div-1-1"><span>验证码</span></div>
      <van-password-input
        :value="value"
        :length="5"
        :gutter="10"
        :mask="false"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
      />
      <van-number-keyboard
        v-model="value"
        :show="showKeyboard"
        @blur="showKeyboard = false"
      />
      <div class="div-1-2"><span>收不到验证码？</span><span
          class="div-1-2-span"
          @click="toObtain"
        >重新获取</span></div>
    </div>
    <div class="div-2">
      <transition
        enter-active-class="animate__animated animate__fadeInUp"
        leave-active-class="animate__animated animate__zoomOut"
      >
        <van-button
          v-if="!iconShow"
          class="login-loginBtn"
          color="#554d84"
          :disabled="btnDisabled"
          block
          @click="theLogin"
          :loading="btnLoading"
          loading-type="spinner"
        >登录</van-button>
        <van-icon
          v-if="iconShow"
          name="passed"
          class="login-sucess-icon"
        />
      </transition>
    </div>
    <van-overlay
      :show="show"
      class="validation-overlay"
    />
  </div>
</template>
<script>
import Vue from "vue";
import {
  PasswordInput,
  NumberKeyboard,
  Toast,
  Button,
  Overlay,
  Icon,
} from "vant";

Vue.use(Icon);
Vue.use(Overlay);
Vue.use(Button);
Vue.use(Toast);
Vue.use(PasswordInput);
Vue.use(NumberKeyboard);
export default {
  name: "vaidation",
  data() {
    return {
      value: "",
      showKeyboard: false,
      btnDisabled: true,
      btnLoading: false,
      show: false,
      iconShow: false,
    };
  },
  /**
   * 监听验证码输入，数字键盘是否关闭及登录按钮是否可用判断
   */
  watch: {
    value(val) {
      if (val.length === 5) {
        this.btnDisabled = false;
        this.showKeyboard = false;
      } else {
        this.btnDisabled = true;
        this.showKeyboard = true;
      }
    },
  },
  methods: {
    /**
     * 重新发送验证码，这里用延时函数来模拟请求接口
     */
    toObtain() {
      setTimeout(() => {
        Toast("验证码已经发送......");
      }, 100);
    },
    /**
     * 登录校验，这里用延时函数来模拟请求接口
     * 1、按钮触发加载中，接口耗时等待
     * 2、页面遮罩层，防止误触
     */
    theLogin() {
      this.btnLoading = true;
      this.show = true;
      setTimeout(() => {
        if (this.value === "12345") {
          this.iconShow = true;
          setTimeout(() => {
            this.$router.push("/home");
          }, 1000);
        } else {
          Toast("验证码校验失败");
          this.value = "";
          this.show = false;
          this.btnLoading = false;
          this.iconShow = false;
        }
      }, 1000);
    },
  },
};
</script>