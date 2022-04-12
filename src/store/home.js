import { reqgetCategoryList } from "@/api"

// state：存储数据的地方
const state = {
  //home仓库中存储三级菜单的数据
  categoryList: [],
}
// mutations : 修改state
const mutations = {
  CATEGORYLIST (state, categoryList) {
    // console.log('-----------', categroryList)
    state.categoryList = categoryList
  }
}
// actions:处理action
const actions = {
  // 写业务逻辑，但是不能修改state
  async getCategoryList ({ commit }) {
    let res = await reqgetCategoryList()
    console.log(res)
    if (res.code === 200) {
      commit('CATEGORYLIST', res.data)
    }
  }
}
// getters:理解为计算属性
const getters = {}

export default {
  state, mutations, actions, getters
}