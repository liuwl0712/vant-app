<!--
 * @Descripttion: 
 * @version: 
 * @Author: liuwl
 * @Date: 2021-05-26 10:17:31
 * @LastEditTime: 2021-05-26 11:04:45
-->
<template>
  <div class="home animate__animated animate__fadeInUp">
    首页
    <div class="bottomNavigation">
      <div class="bottomNavigation-dom">
        <div class="bottomNavigation-dom-center">
          <van-icon
            v-if="false"
            name="apps-o"
            class="bottomNavigation-dom-icon"
          />
          <div class="bottomNavigation-dom-active">
            <van-icon
              name="apps-o"
              class="bottomNavigation-dom-icon-active"
            />
          </div>
          <div class="bottomNavigation-dom-title">游戏中心</div>
        </div>
      </div>
      <div class="bottomNavigation-dom">
        <div class="bottomNavigation-dom-center">
          <van-icon
            name="fire-o"
            class="bottomNavigation-dom-icon"
          />
          <div class="bottomNavigation-dom-title">圈子</div>
        </div>
      </div>
      <div class="bottomNavigation-dom">
        <div class="bottomNavigation-dom-center">
          <van-icon
            name="user-o"
            class="bottomNavigation-dom-icon"
          />
          <div class="bottomNavigation-dom-title">我的</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {};
</script>
<style scoped>
.animate__fadeInUp {
  animation-duration: 0.3s;
  animation-delay: 0s !important;
}
</style>