/*
 * @Descripttion:
 * @version:
 * @Author: liuwl
 * @Date: 2021-05-17 19:07:37
 * @LastEditTime: 2021-05-25 15:44:57
 */
import Vue from "vue";
import VueRouter from "vue-router";

const guidePage = () => import("../view/guidePage.vue");
const login = () => import("../view/login.vue");
const validation = () => import("../view/validation.vue");

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/guidePage",
    },
    {
      path: "/guidePage",
      name: "guidePage",
      component: guidePage,
    },
    {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/validation",
      name: "validation",
      component: validation,
    },
  ],
});

// 登录权限判断
// router.beforeEach(function(to, from, next) {
//   if (to.meta.needLogin) {
//     if (sessionStorage.getItem("token")) {
//       //本地存储中是否有token(uid)数据
//       next(); //表示已经登录
//     } else {
//       next({
//         name: "login",
//       });
//     }
//   } else {
//     next();
//   }
// });

// 解决在VUE中路由遇到Error: Avoided redundant navigation to current location:报错显示是路由重复，
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export default router;
