import Vue from "vue"
//引入vue-router路由插件
import VueRouter from "vue-router"

import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Search from "@/pages/Search"

Vue.use(VueRouter)

// 先把vueRouter的原型对象的push存下来
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
// 重写push
// 第一个参数：往哪跳
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this.location, resolve, reject)
  } else {
    originPush.call(
      this.location,
      () => {},
      () => {}
    )
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this.location, resolve, reject)
  } else {
    originReplace.call(
      this.location,
      () => {},
      () => {}
    )
  }
}
export default new VueRouter({
  // 配置路由
  routes: [
    {
      path: "/home",
      component: Home,
      meta: {
        footer: true,
      },
    },
    {
      path: "/login",
      component: Login,
      meta: {
        footer: false,
      },
    },
    {
      path: "/register",
      component: Register,
      meta: {
        footer: false,
      },
    },
    {
      // 可以指定params参数可传可不传，加个问号
      path: "/search/:keyword?",
      name: "search",
      component: Search,
      meta: {
        footer: true,
      },
      // 路由组件可以传props
      // 1.布尔值写法
      //   props: true,
      // 2.对象写法
      //   props: {
      //     a: 1,
      //     b: 2,
      //   },
      // 3.函数写法——常用
      props: ($route) => ({
        keyword: $route.params.keyword,
        k: route.query.k,
      }),
    },
    // 项目一启动，立马重定向到home
    {
      path: "*",
      redirect: "/home",
    },
  ],
})
