/*
 * @Descripttion:
 * @version:
 * @Author: liuwl
 * @Date: 2021-05-18 11:00:31
 * @LastEditTime: 2021-05-18 15:00:50
 */
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        // options here will be passed to postcss-loader
        plugins: [
          require("postcss-px2rem")({
            remUnit: 37.5,
          }),
        ],
      },
    },
  },
};
