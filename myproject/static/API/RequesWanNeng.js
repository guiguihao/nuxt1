import token from './token'
import axios from '../http/http'

var RequesWanNeng = {
   getWanNengList: function(currentPage,pagesize,filter){
          let url = '';
          if(process.env.NODE_ENV === 'development') { //TEST
            url = '/app/wanneng/list';
          } else {
            url = '/app/wanneng/list';
          }
          //myTest();
          let params = {
            page:currentPage,
            pageSize:pagesize,
            filter:filter,
            sort:'date'
          }
          // console.log(params);
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

   getApiWanNengList: function(currentPage,pagesize,filter){
          let url = '';
          if(process.env.NODE_ENV === 'development') { //TEST
            url = '/api/app/wanneng/list';
          } else {
            url = '/api/app/wanneng/list';
          }
          //myTest();
          let params = {
            page:currentPage,
            pageSize:pagesize,
            filter:filter,
            sort:'date'
          }
          console.log(params);
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



   addWanNeng: function(paramsDic){
          let url = '';
          if(process.env.NODE_ENV === 'development') { //TEST
            url = '/api/app/wanneng/add';
          } else {
            url = '/api/app/wanneng/add';
          }
          //myTest();
          let params = {
          }
          for (let k in paramsDic){
               params[k] = paramsDic[k];
          }
          console.log(JSON.stringify(params)); 
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

   updateWanNeng: function(paramsDic){
          let url = '';
          if(process.env.NODE_ENV === 'development') { //TEST
            url = '/api/app/wanneng/update';
          } else {
            url = '/api/app/wanneng/update';
          }
          //myTest();
          let params = {
            _id:paramsDic._id,
            set:{},
          }
          for (let k in paramsDic){
            if (k != '_id') {
               params.set[k] = paramsDic[k];
            }
          }
          console.log(JSON.stringify(params)); 
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

}

export default RequesWanNeng
