import axios from 'axios'
import router from './router.js'
axios.defaults.timeout = 8000
axios.defaults.baseURL = 'http://localhost:80/'
// http request 拦截器
axios.interceptors.request.use(
    config => {
      if (localStorage.token) { //判断token是否存在
        config.headers.Authorization = localStorage.token; //将token设置成请求头
        config.headers.UserId = localStorage.userId;
      }
      console.log(config);
      return config;
    },
    err => {
      return Promise.reject(err);
    }
);
// http response 拦截器
axios.interceptors.response.use(
    response => {
      if(response.data.success === false){
        router.push('/member/login');
      }
      return response;
    },
    error => {
      return Promise.reject(error);
    }
  );



export default axios
