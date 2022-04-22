import { reqgetCategoryList, reqGetBannerList, reqGetFloorList } from "@/api"

// state：存储数据的地方
const state = {
  //home仓库中存储三级菜单的数据
  categoryList: [],
  // 轮播图
  bannerList: [],
  floorList: [],
}
// mutations : 修改state
const mutations = {
  CATEGORYLIST(state, categoryList) {
    // console.log('-----------', categroryList)
    state.categoryList = categoryList
  },
  GETBANNER(state, bannerList) {
    console.log("获取轮播图")
    state.bannerList = bannerList
  },
  GETFLOOR(state, floorList) {
    console.log("获取Floor")
    state.floorList = floorList
  },
}
// actions:处理action
const actions = {
  // 写业务逻辑，但是不能修改state
  async getCategoryList({ commit }) {
    let res = await reqgetCategoryList()
    console.log(res)
    if (res.code === 200) {
      commit("CATEGORYLIST", res.data)
    }
  },
  // 获取轮播图
  async getBannerList({ commit }) {
    let res = await reqGetBannerList()
    console.log(res)
    if (res.code === 200) {
      commit("GETBANNER", res.data)
    }
  },
  // 获取Floor
  async getFloorList({ commit }) {
    let res = await reqGetFloorList()
    console.log(res)
    if (res.code === 200) {
      commit("GETFLOOR", res.data)
    }
  },
}
// getters:理解为计算属性
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters,
}
