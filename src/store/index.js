//引入Vuex -----相当于咱们最大的仓库
import Vuex from "vuex";
//引入Vue
import Vue from "vue";
//使用插件
Vue.use(Vuex);

import home from './home.js'
import search from './search.js'
import user from './user.js'

// 对外暴露一个store类的一个实例
export default new Vuex.Store({
  //模块：把小仓库进行合并变为大仓库
  modules: {
    home,
    search,
    user
  },
})