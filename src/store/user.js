import { reqGetCode, reqRegister, reqUserLogin, reqUserInfo } from '@/api'
import { setToken, getToken } from '@/utils/token'
// 登录注册模块
// state：存储数据的地方
const state = {
  code: '',
  token: getToken(),
  userInfo: {}
}
// mutations : 修改state
const mutations = {
  GETCODE (state, code) {
    state.code = code
  },
  USERLOGIN (state, token) {
    state.token = token
  },
  SAVEUSERINFO (state, userInfo) {
    state.userInfo = userInfo
  }
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
  },
  // 用户登录
  // 当你点击登录按钮的时候，需要把手机号、密码需要携带给服务器，服务器需要判断，你是不是我的用户【注册过的】
  // 如果是用户登录成功，进行登录，如果用户登录失败给一个提示即可。
  // token【令牌：字符串，服务器下发给用户的身份凭证】
  async userLogin ({ commit }, data) {
    let res = await reqUserLogin(data)
    if (res.code === 200) {
      // 后台返回一个token字符串，是某一个用户的唯一标识
      // 将来通过带token找服务器要用户信息进行展示
      commit('USERLOGIN', res.data.token)
      setToken(res.data.token)
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  },
  // 获取用户信息
  async userInfo ({ commit }) {
    let res = await reqUserInfo()
    if (res.code === 200) {
      commit('SAVEUSERINFO', res.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  },

}
// getters:理解为计算属性
const getters = {}
// 注意 vuex仓库不是持久化的，一刷新页面就没了
export default {
  state, mutations, actions, getters
}