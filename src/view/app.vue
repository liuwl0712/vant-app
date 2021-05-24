<!--
 * @Descripttion: 
 * @version: 
 * @Author: liuwl
 * @Date: 2021-05-17 19:12:30
 * @LastEditTime: 2021-05-18 16:25:44
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
          image: "http://localhost:8080/img/guidePage1.d90c3a86.png",
        },
        {
          id: "2",
          title: "娱乐游戏",
          content: "KTV娱乐，朋友互动玩游戏",
          image: "http://localhost:8080/img/guidePage2.ad4553e3.png",
        },
        {
          id: "3",
          title: "社交聊条",
          content: "与附近好友，朋友畅聊",
          image: "http://localhost:8080/img/guidePage3.04719d21.png",
        },
      ],
    };
  },
};
</script>

