// state：存储数据的地方
const state = {
  count: 1
}
// mutations : 修改state
const mutations = {
  ADD (state) {
    state.count++
  }
}
// actions:处理action
const actions = {
  // 写业务逻辑，但是不能修改state
  add ({ commit }) {
    commit('ADD')
  }
}
// getters:理解为计算属性
const getters = {}

export default {
  state, mutations, actions, getters
}