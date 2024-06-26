import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:3000';
const httpinstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// axios请求拦截器
httpinstance.interceptors.request.use(config => {
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpinstance.interceptors.response.use(res => res.data, e => {
  return Promise.reject(e)
})


export default httpinstance;