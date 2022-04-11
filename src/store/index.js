import Vue from 'vue'
import Vuex from 'vuex'

// 使用插件
Vue.use(Vuex)

import home from './home'
import search from './search'

// 对外暴露一个store类的一个实例
export default new Vuex.store({
  //模块：把小仓库进行合并变为大仓库
  modules: {
    home,
    search,
  },
})