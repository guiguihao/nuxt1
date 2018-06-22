/**
 * Created by superman on 17/2/16.
 * http配置
 */
import token from '~/static/api/token.js'
import axios from 'axios'
// import store from './store/store'
//import router from './router'

// axios 配置
axios.defaults.timeout = 3000;
//axios.defaults.baseURL = 'https://api.github.com';

// http request 拦截器
axios.interceptors.request.use(
    config => {
        let mtoken = token.getToken();
           if(mtoken){
            //alert(localStorage.getItem('token'));
              config.headers.Authorization = mtoken;
           }
           return config;
    },
    err => {
        return Promise.reject(err);
});

export default axios;
