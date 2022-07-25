const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true, //关闭eslint校验
  //配置代理跨域
  devServer: {
    proxy: {
      "/api": {
        target: "http://sph-api.atguigu.cn",
      },
    },
  },
})
