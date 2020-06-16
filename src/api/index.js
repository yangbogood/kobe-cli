import axios from "axios";
import { Message, Loading } from "element-ui";

let loading = null;
const service = axios.create({
  // 设置超时时间
  timeout: 6000,
  baseURL: process.env.BASE_URL
});
// post请求的时候，我们需要加上一个请求头，所以可以在这里进行一个默认的设置
// 即设置post的请求头为application/x-www-form-urlencoded;charset=UTF-8
service.defaults.headers.post["Content-type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";
// 用于拦截请求前的操作
service.interceptors.request.use(
  config => {
    loading = Loading.service({
      text: "正在加载中......"
    });
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
// 用于请求处理返回的操作
service.interceptors.response.use(
  res => {
    const resCode = res.status;
    if (loading) {
      loading.close();
    }
    if (resCode === 200) {
      return Promise.resolve(res);
    } else {
      return Promise.reject(res);
    }
  },
  err => {
    if (loading) {
      loading.close();
    }
    if (!err.response) {
      if (err.message.includes("timeout")) {
        console.log("超时了");
        Message.error("请求超时，请检查网络是否连接正常");
      } else {
        console.log("断网了");
        Message.error("请求失败，请检查网络是否已连接");
      }
      return;
    }
    // const errCode = err.response.status;
    return Promise.reject(err);
  }
);

// 断网处理

export default service;
