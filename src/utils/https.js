import axios from 'axios';
import { message } from 'antd';
// 创建axios实例
let service = null;
if (process.env.NODE_ENV === 'development') {
  service = axios.create({
    baseURL: '/api', // api的base_url
    timeout: 50000, // 请求超时时间
  });
} else {
  // 生产环境下
  service = axios.create({
    baseURL: '/api', // api的base_url
    timeout: 50000, // 请求超时时间
  });
}

// console.log('process.env.BASE_URL',process.env.BASE_URL)
// request拦截器 axios的一些配置
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    // Do something with request error
    console.error('error1: %o', error); // for debug
    message.error(error.message, 1);
    // 请求统一拦截
    return Promise.resolve();
    // return Promise.reject(error);
  },
);

// respone拦截器 axios的一些配置
service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error('error2: %o', error); // for debug
    if(error.message.includes('504')) {
      error.message = '网关超时，请检查服务器连接！'
    }
    message.error(error.message, 1);
    return Promise.resolve();
    // return Promise.reject(error);
  },
);

export default service;