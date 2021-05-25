<!--
 * @Descripttion: 
 * @version: 
 * @Author: liuwl
 * @Date: 2021-05-25 10:46:09
 * @LastEditTime: 2021-05-25 17:53:56
-->
<template>
  <div class="login">
    <div class="small-round round animate__animated animate__fadeInLeft"></div>
    <div class="mini-round round animate__animated animate__fadeInLeft"></div>
    <div class="medium-round round animate__animated animate__fadeInRight"></div>
    <div class="div-1">
      <div class="div-1-1"><span>欢迎登录</span></div>
      <div class="div-1-2"><span>这是一段产品介绍</span></div>
      <van-field
        class="login-phone"
        v-model="phone"
        type="tel"
        placeholder="请输入手机号"
        :right-icon="rightIcon"
        @input="phoneChange"
      ></van-field>
      <van-button
        class="login-loginBtn animate__animated animate__fadeIn"
        color="#554d84"
        :disabled="btnDisabled"
        block
        @click="validation"
      >获取验证码</van-button>
    </div>
    <div class="div-2 animate__animated animate__fadeIn">
      <van-divider :style="{ color: 'rgb(142 142 147)', borderColor: 'rgb(142 142 147)' }">第三方登录</van-divider>
      <div class="div-img">
        <div class="div-img-div">
          <van-image
            width="35"
            height="35"
            :src="require('@/assets/img/wechat.png')"
            @click="imgClick"
          />
        </div>
        <div class="div-img-div">
          <van-image
            width="35"
            height="35"
            :src="require('@/assets/img/QQ.png')"
            @click="imgClick"
          />
        </div>
        <div class="div-img-div">
          <van-image
            width="35"
            height="35"
            :src="require('@/assets/img/webo.png')"
            @click="imgClick"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Field, Button, Divider, Image, Toast } from "vant";

Vue.use(Toast);
Vue.use(Image);
Vue.use(Divider);
Vue.use(Button);
Vue.use(Field);
export default {
  data() {
    return {
      phone: "",
      rightIcon: "",
      btnDisabled: true,
    };
  },
  methods: {
    /**
     * 手机号码校验
     */
    phoneChange(val) {
      if (!/^1[3456789]\d{9}$/.test(val)) {
        this.btnDisabled = true;
        this.rightIcon = "";
      } else {
        this.btnDisabled = false;
        this.rightIcon = "passed";
      }
    },
    /**
     * 第三方登录
     */
    imgClick() {
      Toast("未获取第三方登录权限，敬请期待......");
    },
    /**
     * 获取验证码
     */
    validation() {
      /**
       * 这里发起请求，等待请求返回结果
       */
      this.$router.push("/validation");
    },
  },
};
</script>