// API 统一管理
import requests from "./ajax"
import mockRequests from "./mockAjax"

//三级菜单的请求地址  /api/product/getBaseCategoryList   GET    没有任何参数
//对外暴露一个函数，只要外部调用这个函数，就想服务器发起ajax请求、获取咱们的三级菜单数据。当前咱们这个函数只需要把服务器返回结果返回即可。
export const reqgetCategoryList = () => {
  return requests.get(`/product/getBaseCategoryList`)
}

// 获取验证码
export const reqGetCode = (phone) =>
  requests({
    url: `/user/passport/sendCode/${phone}`,
    method: "get",
  })
// 注册
export const reqRegister = (data) =>
  requests({
    url: `/user/passport/register`,
    method: "post",
    data,
  })
// 登录
export const reqUserLogin = (data) =>
  requests({
    url: `/user/passport/login`,
    method: "post",
    data,
  })
// 获取用户信息——需要带着token向用户发信息，放到header里
export const reqUserInfo = () =>
  requests({
    url: `/user/passport/auth/getUserInfo`,
    method: "get",
  })
// 退出登录
export const reqLogout = () =>
  requests({
    url: `/user/passport/logout`,
    method: "get",
  })

//获取banner（Home首页轮播图接口）
export const reqGetBannerList = () => mockRequests.get("/banner")
