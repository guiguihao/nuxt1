 
 import axios from '../http/http'
 export function gewhios(domain){
          let url = '';
          if(process.env.NODE_ENV === 'development') { //TEST
            url = '/app/getwhios';
          } else {
            url = '/app/getwhios';
          }
          //myTest();
          let params = {
           domain:domain
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
   }

 export function getApigetwhios(domain){
          let url = '';
          if(process.env.NODE_ENV === 'development') { //TEST
            url = '/api/app/getwhios';
          } else {
            url = '/api/app/getwhios';
          }
          //myTest();
          let params = {
           domain:domain
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
   }

