// 对于axios进行二次封装
import axios from "axios"
// 引入进度条
import nprogress from 'nprogress'
// 引入进度条样式
import 'nprogress/nprogress.css'

// 1.利用axios对象的方法create,去创建一个axios实例
//底下的代码也是创建axios实例
let requests = axios.create({
  //基础路径
  baseURL: "/api",
  //请求不能超过5S
  timeout: 5000,
})

// 请求拦截器----在项目中发请求（请求没有发出去）可以做一些事情
requests.interceptors.request.use((config) => {
  nprogress.start()//进度条开始
  // config:配置对象，包含header请求头
  return config
})
// 响应拦截器
requests.interceptors.response.use(
  (res) => {
    //   成功的回调函数，服务器响应数据回来的时候，做的一些事
    nprogress.done()//进度条结束
    return res.data
  },
  (err) => {
    //   失败的回调函数
    console.log("err", err)
    return Promise.reject(new Error('faile'))
  }
)

//最终需要对外暴露（不对外暴露外面模块没办法使用）
//这里的代码是暴露一个axios实例
export default requests
