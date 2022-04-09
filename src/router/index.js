//引入vue-router路由插件
import VueRouter from "vue-router"

import Home from "@/pages/Home"
import Login from "@/pages/Login"
export default new VueRouter({
  // 配置路由
  routes: [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
    },
    // 项目一启动，立马重定向到home
    {
      path: "*",
      redirect: "/home",
    },
  ],
})
