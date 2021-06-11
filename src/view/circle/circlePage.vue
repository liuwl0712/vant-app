<!--
 * @Descripttion: 
 * @version: 
 * @Author: liuwl
 * @Date: 2021-06-07 10:45:17
 * @LastEditTime: 2021-06-07 15:48:32
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
    /**
     * 不同的圈子切换，这里是做切换处理
     * 使用的是vant的开关组件，进行的样式修改
     * type值为传递的不同圈子类型，进行切换处理
     */
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