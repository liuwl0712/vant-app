<!--
 * @Descripttion: 
 * @version: 
 * @Author: liuwl
 * @Date: 2021-05-25 10:46:09
 * @LastEditTime: 2021-05-25 14:56:10
-->
<template>
  <div class="login">
    <div class="small-round round"></div>
    <div class="mini-round round"></div>
    <div class="medium-round round"></div>
    <div class="div-1">
      <div class="div-1-1"><span>欢迎登录</span></div>
      <div class="div-1-2"><span>这是一段产品介绍</span></div>
      <van-field
        class="login-phone"
        v-model="tel"
        type="tel"
        placeholder="请输入手机号"
        :right-icon="rightIcon"
      ></van-field>
      <van-button
        class="login-loginBtn"
        color="#554d84"
        disabled
        block
      >获取验证码</van-button>
    </div>
    <div class="div-2">
      <van-divider :style="{ color: 'rgb(142 142 147)', borderColor: 'rgb(142 142 147)' }">第三方登录</van-divider>
      <div class="div-img">
        <div class="div-img-div">
          <van-image
            width="35"
            height="35"
            :src="require('@/assets/img/wechat.png')"
          />
        </div>
        <div class="div-img-div">
          <van-image
            width="35"
            height="35"
            :src="require('@/assets/img/QQ.png')"
          />
        </div>
        <div class="div-img-div">
          <van-image
            width="35"
            height="35"
            :src="require('@/assets/img/webo.png')"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Field } from "vant";
import { Button } from "vant";
import { Divider } from "vant";
import { Image } from "vant";

Vue.use(Image);
Vue.use(Divider);
Vue.use(Button);
Vue.use(Field);
export default {
  data() {
    return {
      rightIcon: "",
    };
  },
};
</script>