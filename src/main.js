import Vue from "vue"
import App from "./App.vue"

//引入路由器
import router from "./router"

//定义全局组件：在入口文件注册一次之后，在任何组件当中都可以使用
import TypeNav from "@/components/TypeNav"

//全局组件：第一个参数 组件名字  第二个参数：那个组件
Vue.component(TypeNav.name, TypeNav)

// 测试
import { reqgetCategoryList } from "@/api"
reqgetCategoryList()
Vue.config.productionTip = false
// 应用插件
// Vue.use(VueRouter)
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app")
