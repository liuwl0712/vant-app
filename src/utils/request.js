/*
 * @Descripttion:
 * @version:
 * @Author: liuwl
 * @Date: 2021-05-26 13:50:22
 * @LastEditTime: 2021-06-07 10:37:54
 */
/**
 * 网络请求Axios
 */
import Vue from "vue";
import axios from "axios";
import { Notify } from "vant";
import router from "../router/index";
Vue.use(Notify);

// 错误信息的响应方法
const errorHandle = (status, other) => {
  switch (status) {
    case 400:
      // 请求头和服务器的限制
      Notify({ type: "danger", message: "服务器不理解请求语法" });
      break;
    case 401:
      // token验证失败
      router.push({ path: "/login" });
      break;
    case 403:
      // 用户身份过期,服务器请求限制
      Notify({ type: "danger", message: "禁止，服务器拒绝请求" });
      break;
    case 404:
      // 网络请求地址错误
      Notify({ type: "danger", message: "未找到，服务器找不到请求的网页" });
      break;
    default:
      Notify({ type: "danger", message: other });
      break;
  }
};

//创建axios对象
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASEURL, //环境变量接口请求头
  timeout: 60000, //请求超时
});

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  //成功
  /**
   * 成功和失败
   * 1.请求成功和请求失败
   * 2.结果的成功和失败
   */
  (response) => {
    response.status === 200 ? Promise.resolve(response) : Promise.resolve(response);
    return response.data;
  },
  (error) => {
    // 对响应错误做点什么
    const { response } = error; //ES6的解构赋值
    /**
     * response包含的信息
     * status
     * data
     */
    if (response) {
      // 具体错误信息
      errorHandle(response.status, response.data);
      return Promise.reject(response);
    } else {
      Notify({ type: "danger", message: "请求中断了" });
    }
  }
);
export default instance;
