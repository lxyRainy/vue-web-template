import Vue from "vue"
import App from "./App.vue"

//引入路由器
import router from "./router"
//引入仓库进行注册
import store from "@/store"
//定义全局组件：在入口文件注册一次之后，在任何组件当中都可以使用
import TypeNav from "@/components/TypeNav"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

//引入MockServer.js----mock数据
import "@/mock/mockServe"

//全局组件：第一个参数 组件名字  第二个参数：那个组件
Vue.component(TypeNav.name, TypeNav)
// 使用ElementUI
Vue.use(ElementUI)
Vue.config.productionTip = false
// 应用插件
// Vue.use(VueRouter)
new Vue({
  render: (h) => h(App),
  router,
  //在入口文件这里注册store,在每一个组件的身上都拥有一个$store这个属性
  store,
}).$mount("#app")
