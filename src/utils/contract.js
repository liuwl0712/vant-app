/*
 * @Descripttion:
 * @version:
 * @Author: liuwl
 * @Date: 2021-05-26 13:50:22
 * @LastEditTime: 2021-05-28 09:18:42
 */
import $axios from "./request.js";

var url = "/csg_zj/api/";
//用户登录
export function isUser(data) {
  return $axios({
    url: url + "csgUser/isUser",
    method: "post",
    data: data,
  });
}
