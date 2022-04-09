//引入vue-router路由插件
import VueRouter from "vue-router"
// //引入Vue
// import Vue from "vue"
// //使用插件
// Vue.use(VueRouter)

import Home from "@/pages/Home"
export default new VueRouter({
  // 配置路由
  routes: [
    {
      path: "/home",
      component: Home,
    },
  ],
})
