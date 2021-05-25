<!--
 * @Descripttion: 
 * @version: 
 * @Author: liuwl
 * @Date: 2021-05-17 19:12:30
 * @LastEditTime: 2021-05-25 10:48:39
-->
<template>
  <div class="guidePage">
    <van-swipe
      class="my-swipe"
      indicator-color="#554d84"
      :loop="false"
    >
      <van-swipe-item
        v-for="item in guideDate"
        :key="item.id"
      >
        <div>
          <div class="guidePage-title">{{item.title}}</div>
          <div class="guidePage-content">{{item.content}}</div>
          <van-image
            fit="cover"
            :src="item.image"
          />
          <van-button
            class="guidePage-btn"
            v-if="item.id=='3'"
            type="default"
            color="#554d84"
            size="small"
            @click="toLogin"
          >开启生活娱乐</van-button>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem, Image, Button } from "vant";
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Image);
Vue.use(Button);
export default {
  data() {
    return {
      guideDate: [
        {
          id: "1",
          title: "圈子动态",
          content: "分享圈子动态，分享生活",
          image: require("@/assets/img/guidePage1.png"),
        },
        {
          id: "2",
          title: "娱乐游戏",
          content: "KTV娱乐，朋友互动玩游戏",
          image: require("@/assets/img/guidePage2.png"),
        },
        {
          id: "3",
          title: "社交聊条",
          content: "与附近好友，朋友畅聊",
          image: require("@/assets/img/guidePage3.png"),
        },
      ],
    };
  },
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

