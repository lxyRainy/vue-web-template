// 对于axios进行二次封装
import axios from "axios"

// 1.利用axios对象的方法create,去创建一个axios实例
const requests = axios.create({
  // 基础路径：发请求的时候路径当中都带上api
  baseURL: "/api",
  // 请求超时的时间
  timeout: 5000,
})

// 请求拦截器：在请求之前，检测到
requests.interceptors.request.use((config) => {
  //   config:配置对象，包含header请求头
})
// 响应拦截器
requests.interceptors.response.use(
  (res) => {
    //   成功的回调函数，服务器响应数据回来的时候，做的一些事
  },
  (err) => {
    //   失败的回调函数
  }
)

// 对外暴露
export default axios
