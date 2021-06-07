<!--
 * @Descripttion: 
 * @version: 
 * @Author: liuwl
 * @Date: 2021-05-26 10:17:31
 * @LastEditTime: 2021-06-07 14:13:22
-->
<template>
  <div class="home animate__animated animate__fadeInUp">
    <router-view class="home-center-class"></router-view>
    <div class="bottomNavigation">
      <div class="bottomNavigation-dom">
        <div
          class="bottomNavigation-dom-center"
          @click="toClick('gameCenter')"
        >
          <div :class="gameCenter?'bottomNavigation-dom-active':''">
            <van-icon
              name="apps-o"
              :class="gameCenter?'bottomNavigation-dom-icon-active':'bottomNavigation-dom-icon'"
            />
          </div>
          <div :class="['bottomNavigation-dom-title',{'bottomNavigation-dom-title-active':gameCenter}]">游戏中心</div>
        </div>
      </div>
      <div class="bottomNavigation-dom">
        <div
          class="bottomNavigation-dom-center"
          @click="toClick('circle')"
        >
          <div :class="circle?'bottomNavigation-dom-active':''">
            <van-icon
              name="fire-o"
              :class="circle?'bottomNavigation-dom-icon-active':'bottomNavigation-dom-icon'"
            />
          </div>
          <div :class="['bottomNavigation-dom-title',{'bottomNavigation-dom-title-active':circle}]">圈子</div>
        </div>
      </div>
      <div class="bottomNavigation-dom">
        <div
          class="bottomNavigation-dom-center"
          @click="toClick('mine')"
        >
          <div :class="mine?'bottomNavigation-dom-active':''">
            <van-icon
              name="user-o"
              :class="mine?'bottomNavigation-dom-icon-active':'bottomNavigation-dom-icon'"
            />
          </div>
          <div :class="['bottomNavigation-dom-title',{'bottomNavigation-dom-title-active':mine}]">我的</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {
  name: "home",
  data() {
    return {
      gameCenter: true,
      circle: false,
      mine: false,
    };
  },
  created() {
    let type = this.$route.name;
    this.toClick(type);
  },
  methods: {
    toClick(type) {
      this.gameCenter = false;
      this.circle = false;
      this.mine = false;
      if (type === "gameCenter") {
        this.gameCenter = true;
        this.$router.push("/gameCenter");
      } else if (type === "circle") {
        this.$router.push("/circle");
        this.circle = true;
      } else if (type === "mine") {
        this.$router.push("/mine");
        this.mine = true;
      }
    },
  },
};
</script>
<style scoped>
.animate__fadeInUp {
  animation-duration: 0.3s;
  animation-delay: 0s !important;
}
</style>