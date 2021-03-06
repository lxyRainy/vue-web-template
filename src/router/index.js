import Vue from "vue"
//引入vue-router路由插件
import VueRouter from "vue-router"

import Home from "@/pages/Home" // 首页
import Login from "@/pages/Login" // 登录
import Register from "@/pages/Register" // 注册
import Search from "@/pages/Search" // 搜索页
import PageDemo from "@/pages/PageDemo/pageDemo" // demo例子
import Center from "@/pages/Center" // 个人中心
import MyOrder from "@/pages/Center/MyOrder" // 个人中心-子页面
import GroupOrder from "@/pages/Center/GroupOrder" // 个人中心-子页面
import store from "@/store"

Vue.use(VueRouter)

// 先把vueRouter的原型对象的push存下来
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
// 重写push
//第一个形参：路由跳转的配置对象（query|params）
//第二个参数：undefined|箭头函数（成功的回调）
//第三个参数:undefined|箭头函数（失败的回调）
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}
//重写VueRouter.prototype身上的replace方法了
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}
let router = new VueRouter({
  // 配置路由
  routes: [{
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
      path: "/center",
      component: Center,
      meta: {
        footer: true,
      },
      // 个人中心子页面路由
      children: [{
          path: "myorder",
          component: MyOrder,
        },
        {
          path: "grouporder",
          component: GroupOrder,
        },
        {
          path: "/center",
          redirect: "/center/myorder",
        },
      ],
    },
    {
      path: "/register",
      component: Register,
      meta: {
        footer: false,
      },
    },
    {
      path: "/demo",
      component: PageDemo,
      meta: {
        footer: true,
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
        k: $route.query.k,
      }),
    },
    // 项目一启动，立马重定向到home
    {
      path: "/",
      component: Home,
    },
  ],
})
// 全局守卫：前置守卫，在路由跳转之前判断
// let whiteList = ["/", "/home", "/login", "/register", "/search"] // 未登录的白名单
router.beforeEach(async (to, from, next) => {
  // next()//放行
  // next(path)//放行到指定路由
  // next(false)//中断当前的导航
  console.log("to", to)
  // console.log("whiteList.indexOf(to.path)", whiteList.indexOf(to.path))
  // 用户登录了才会有token 获取token
  let token = store.state.user.token
  let name = store.state.user.userInfo.name
  if (token) {
    // 用户已经登录了，还想去login，不能
    if (to.path === "/login") {
      next("/home") // 跳到首页
    } else {
      // 不是login
      // 如果用户信息存在
      if (name) {
        next()
      } else {
        try {
          // 没有用户信息，派发action让用户存储用户信息再跳转
          await store.dispatch("userInfo")
          next()
        } catch (error) {
          // token失效了
          // 清空存的数据
          await store.dispatch("userLogout")
          next("/login")
        }
      }
    }
  } else {
    next()
    // // 未登录
    // if (whiteList.indexOf(to.path) != -1) {
    //   next()
    // } else {
    //   // 重定向到想去但没去成的页面，存储到地址栏中
    //   next("/login?redirect=" + to.path)
    // }
  }
})
export default router