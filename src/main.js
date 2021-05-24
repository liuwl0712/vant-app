/*
 * @Descripttion:
 * @version:
 * @Author: liuwl
 * @Date: 2021-05-17 17:42:51
 * @LastEditTime: 2021-05-18 11:28:36
 */
import Vue from "vue";
import App from "./App.vue";
// 引入vant-css
import "vant/lib/index.css";
// 引入vue-router
import router from "./router/index";

import "lib-flexible/flexible.js";
// 引入全局sass
import "./assets/css/app.scss";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
