<!--
 * @Descripttion: 
 * @version: 
 * @Author: liuwl
 * @Date: 2021-06-07 10:45:17
 * @LastEditTime: 2021-06-07 14:34:39
-->
<template>
  <div class="circle-class">
    <div class="circle-header-class">
      <div class="circle-header-cen-class">
        <van-switch
          v-model="checked"
          active-color="#291e6c"
          inactive-color="#291e6c"
          disabled
        />
        <div
          :class="['circle-header-cen-nearby',{'circle-header-cen-nearby-active':!checked}]"
          @click="circleChange('nearby')"
        >附近圈子</div>
        <div
          :class="['circle-header-cen-friend',{'circle-header-cen-friend-active':checked}]"
          @click="circleChange('friend')"
        >好友圈子</div>
      </div>
      <div class="circle-header-btn-class">
        <van-icon name="add" />
        <van-icon name="comment" />
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Switch } from "vant";

Vue.use(Switch);
export default {
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    circleChange(type) {
      if (type === "nearby") {
        this.checked = false;
      } else if (type === "friend") {
        this.checked = true;
      }
    },
  },
};
</script>