import axios from "axios";

//通用请求地址前缀
let devUrl = 'http://132.456.dev/api'
let proUrl = 'http://132.456.pro/api'
// 判断是开发环境还是生产环境
let baseURL = process.env.NODE_ENV === 'development' ? devUrl : proUrl

// axios 封装
// 创建实例时配置默认值
const http = axios.create({
    baseURL: baseURL,
    timeout: 10000
  });
  
  // 添加请求拦截器
  http.interceptors.request.use(
    function (config) {
      // 在发送请求之前做些什么 添加请求头
      return config;
    },
    function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  );
  
  // 添加响应拦截器
  http.interceptors.response.use(
    function (response) {
      // 2xx 范围内的状态码都会触发该函数。
      // 对响应数据做点什么
      return response;
    },
    function (error) {
      // 超出 2xx 范围的状态码都会触发该函数。
      // 对响应错误做点什么
      return Promise.reject(error);
    }
  );
  
  export default http;