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
// axios.defaults.baseURL = 'http://api.weiyunbuy.com';

// http request 拦截器
axios.interceptors.request.use(
    config => {
        let mtoken = token.getToken();
           if(mtoken){
            
            //alert(localStorage.getItem('token'));
              config.headers.Authorization = mtoken;
           }
        
           if (config.url.indexOf('/api')>-1) {
            console.log(config.url); 
             config.baseURL = ''
           }else{
             config.baseURL = 'http://api.rootopen.com'
           };
           return config;
    },
    err => {
        return Promise.reject(err);
});

export default axios;
