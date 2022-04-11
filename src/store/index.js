import Vue from 'vue'
import Vuex from 'vuex'

// 使用插件
Vue.use(Vuex)

// state：存储数据的地方
const state = {}
// mutations : 修改state
const mutations = {}
// actions:处理action
const actions = {}
// getters:理解为计算属性
const getters = {}

// 对外暴露一个store类的一个实例
export default new Vuex.store({
  state,
  mutations,
  actions,
  getters
})