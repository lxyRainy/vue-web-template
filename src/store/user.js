import { reqGetCode, reqRegister } from '@/api'
// state：存储数据的地方
const state = {
  code: ''
}
// mutations : 修改state
const mutations = {
  GETCODE (state, code) {
    state.code = code
  },
}
// actions:处理action
const actions = {
  // 写业务逻辑，但是不能修改state
  // 获取验证码，这个接口，目前是把验证码返回，暂时不真正发短信
  async getCode ({ commit }, phone) {
    // 调接口
    let res = await reqGetCode(phone)
    if (res.code === 200) {
      commit('GETCODE', res.data)
    } else {
      return Promise.reject(new Error('fail'))
    }
  },
  // 用户注册
  async userRegister ({ commit }, data) {
    let res = await reqRegister(data)
    if (res.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  }
}
// getters:理解为计算属性
const getters = {}

export default {
  state, mutations, actions, getters
}