import token from './token'
import axios from '../http/http'

var RequestUser = {

   //currentPage 当前页, pagesize 每页显示数量,filter 查询条件 字典类型
   getUserList: function(currentPage,pagesize,filter){
          let url = '';
          if(process.env.NODE_ENV === 'development') { //TEST
            url = '/api/app/user/list';
          } else {
            url = '/app/user/list';
          }
          //myTest();
          let myToken = token.getToken();
          let params = {
            page:currentPage,
            pageSize:pagesize,
            filter:filter
          }
          let p = new Promise(function(resolve, reject){        //做一些异步操作
            axios.post(url, params).then((res) => {
             // console.log(JSON.stringify(res.data)); 
              resolve(res);
              }).catch(function(error) {

                reject(error)
              });
          });
          return p;
   },

   //添加\注册用户方法 dic为一个字典, {name:'xx',password:'',....}
   addUser: function(dic){
          let url = '';
          let params = {
          }
          for (let k in dic){
            params[k] = dic[k];
          }
          if(process.env.NODE_ENV === 'development') { //TEST
            url = '/api/app/user/add';
          } else {
            url = '/api/app/user/add';
          }
          let p = new Promise(function(resolve, reject){        //做一些异步操作
            axios.post(url, params).then((res) => {
             // console.log(JSON.stringify(res.data)); 
              resolve(res);
              }).catch(function(error) {

                reject(error)
              });
          });
          return p;
   },

   //更新用户方法 dic为一个字典, {_id:'xxxxxxxxxxx',name:'xx',password:'',....}
   updateUser: function(dic){
          let url = '';
          let params = {
            _id:dic._id,
            set:{},
          }
          for (let k in dic){
            if (k != '_id') {
               params.set[k] = dic[k];
            }
          }
          console.log(JSON.stringify(params));
          if(process.env.NODE_ENV === 'development') { //TEST
            url = '/api/app/user/update';
          } else {
            url = '/app/user/update';
          }
          let p = new Promise(function(resolve, reject){        //做一些异步操作
            axios.post(url, params).then((res) => {
             // console.log(JSON.stringify(res.data)); 
              resolve(res);
              }).catch(function(error) {

                reject(error)
              });
          });
          return p;
   },

   //登录
   userLogin: function(dic){
          let url = '';
          let params = {

          }
          for (let k in dic){
            params[k] = dic[k];
          }
          // console.log(JSON.stringify(params));
          if(process.env.NODE_ENV === 'development') { //TEST
            url = '/api/app/user/login';
          } else {
            url = '/api/app/user/login';
          }
          let p = new Promise(function(resolve, reject){        //做一些异步操作
            axios.post(url, params).then((res) => {
             // console.log(JSON.stringify(res.data)); 
              resolve(res);
              }).catch(function(error) {

                reject(error)
              });
          });
          return p;
   },

   //登出
   userLogOut: function(dic){
          let url = '';
          if(process.env.NODE_ENV === 'development') { //TEST
            url = '/api/app/user/logout';
          } else {
            url = '/api/app/user/logout';
          }
          let p = new Promise(function(resolve, reject){        //做一些异步操作
            axios.post(url, {}).then((res) => {
             // console.log(JSON.stringify(res.data)); 
              resolve(res);
              }).catch(function(error) {

                reject(error)
              });
          });
          return p;
   },

    //登出
   sendEmailCode: function(email){
          let url = '';
          if(process.env.NODE_ENV === 'development') { //TEST
            url = '/api/app/sendmial/code';
          } else {
            url = '/api/app/sendmial/code';
          }
          let p = new Promise(function(resolve, reject){        //做一些异步操作
            axios.post(url, {email:email}).then((res) => {
             // console.log(JSON.stringify(res.data)); 
              resolve(res);
              }).catch(function(error) {

                reject(error)
              });
          });
          return p;
   },

}

export default RequestUser
