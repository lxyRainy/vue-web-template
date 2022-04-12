// 对外暴露一个函数
export const setToken = (token) => {
  // 持久化存储
  localStorage.setItem('TOKEN', token)
}
export const getToken = () => {
  return localStorage.getItem('TOKEN')
}