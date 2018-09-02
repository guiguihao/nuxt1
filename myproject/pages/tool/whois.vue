<template>
  <div>
    <div class = "s-div">
        <p style="text-align: center; font-size: 20px; margin-bottom: 20px">域名whois信息查询</p>
       <el-input placeholder="请输入域名" v-model="input5" @keyup.enter.native="searchClick">
        
         <el-button slot="append" icon="el-icon-search" @click="searchClick"></el-button>
       </el-input>

       <p style="text-align: center; font-size: 20px; margin: 20px auto">{{queryname}}</p>
    </div>
    <div v-if="!this.whois" style="height: 600px"></div>
    <el-card class="box-card" v-if="this.whois">
      <div slot="header" class="clearfix">
        <span>whois域名信息查询</span>
      </div>
      <div class="item">
        <table class="table table-responsive">
            <tbody>
              <tr>
                 <td width="100px">
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">地址 </font></font>
                 </td>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
                 </td>
                 <td v-if = "typeof(whois.address) === 'string'"><font >{{whois.address}}</font></td>
                 <td v-else><font style="background:#606266; margin-left: 10px; color: #fff;padding: 5px;font-size: 12px" v-for="address in whois.address" :key="address">{{address}}</font>
                 </td>
              </tr>

               <tr>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">城市 </font></font>
                 </td>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
                 </td>
                 <td><font >{{whois.city}}</font>
                 </td>
              </tr>

              <tr>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">国家 </font></font>
                 </td>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
                 </td>
                 <td><font >{{whois.country}}</font>
                 </td>
              </tr>

              <tr>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注册时间 </font></font>
                 </td>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
                 </td>
                 <td><font >{{ctime}}</font>
                 </td>
              </tr>

              <tr>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到期时间 </font></font>
                 </td>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
                 </td>
                 <td><font >{{dtime}}</font>
                 </td>
              </tr>

              <tr>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">dnssec </font></font>
                 </td>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
                 </td>
                 <td><font >{{whois.dnssec}}</font>
                 </td>
              </tr>

              <tr>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">域名 </font></font>
                 </td>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
                 </td>
                 <td v-if = "typeof(whois.domain_name) === 'string'"><font >{{whois.domain_name}}</font></td>
                 <td v-else><font style="background:#606266; margin-left: 10px; color: #fff;padding: 5px;font-size: 12px" v-for="domain_name in whois.domain_name" :key="domain_name">{{domain_name}}</font>
                 </td>
              </tr>

              <tr>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">邮箱 </font></font>
                 </td>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
                 </td>
                 <td v-if = "typeof(whois.emails) === 'string'"><font >{{whois.emails}}</font></td>
                 <td v-else><font style="background:#606266; margin-left: 10px; color: #fff;padding: 5px;font-size: 12px" v-for="email in whois.emails" :key="email">{{email}}</font>
                 </td>
              </tr>

               <tr>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DNS </font></font>
                 </td>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
                 </td>
                 <td v-if = "typeof(whois.name_servers) === 'string'"><font >{{whois.name_servers}}</font></td>
                 <td v-else><font style="background:#606266; margin-left: 10px; color: #fff;padding: 5px;font-size: 12px" v-for="servers in whois.name_servers" :key="servers">{{servers}}</font>
                 </td>
              </tr>

               <tr>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">name </font></font>
                 </td>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
                 </td>
                 <td><font >{{whois.name}}</font></td>
              </tr>

              <tr>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">org </font></font>
                 </td>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
                 </td>
                 <td><font >{{whois.org}}</font></td>
              </tr>

               <tr>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注册人 </font></font>
                 </td>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
                 </td>
                 <td><font >{{whois.registrar}}</font></td>
              </tr>

               <tr>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">state </font></font>
                 </td>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
                 </td>
                 <td><font >{{whois.state}}</font></td>
              </tr>

              <tr>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">status </font></font>
                 </td>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
                 </td>
                  <td v-if = "typeof(whois.status) === 'string'"><font >{{whois.status}}</font></td>
                 <td v-else><font style="background:#606266; margin-left: 10px; color: #fff;padding: 5px;font-size: 12px" v-for="status in whois.status" :key="status">{{status}}</font>
                 </td>
              </tr>
             
            </tbody></table>
      </div>
    </el-card>

     <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>最近查询</span>
      </div>
      <div class="item">
         <el-button size="small"  v-for = "jv in jilvs.data" :key = "jv._id" @click="jiliClick(jv.w2)" style="float: left; margin-left: 20px; color: #606266; text-decoration:none; ">{{jv.w2}}</el-button>
      </div>
      </el-card>
  </div>
</template>

<script type="text/javascript">
   import Request from '~/static/api/Requst.js'
   import {getApigetwhios} from '~/static/api/RequestWhois.js'
   export default {
    head () {
    return {
      
      title: 'Whois域名查询',
      meta: [
        {hid: 'description',name: 'description', content: 'whois,whois查询,whois信息查询,whois查询工具,域名whois,域名whois查询,域名注册信息查询'}
        
      ]
    }
  },

   	data:()=>{
   	  return {
        input5:'',
        whois:'',
   	   queryname:'',
        jilvs:'',
   	  }
   	},
     async asyncData({ req, params,query }) {
        // We can return a Promise instead of calling the callback
        let pas ={

        }
        let jilvs = await  Request.wanneng.getWanNengList(
            1,
            50,
            {w1:'whoisjilv'}
          )

        let result = {

        }
  
        if (jilvs.data.code === 0) {
           result.jilvs=jilvs.data.data
        }
        // console.log(res)
        return result
      },
    computed:{
      ctime: function () {
            var d = new Date(this.whois.creation_date)
            var datetime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
            return datetime
      },
      dtime: function () {
            var d = new Date(this.whois.expiration_date)
            var datetime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
            return datetime
      }
    },
   	methods:{
       searchClick(){
         this.queryname = '正在查询' + this.input5 + 'whios信息....'
         getApigetwhios(this.input5).then((res)=>{
             let result =  res.data
             if (result.code === 1) {
                this.whois = result.data
                this.queryname = '查询成功'
             }else{
                 this.queryname = '查询失败'
             }
         }).catch(function(error) {
             this.queryname = '查询失败'
         })
        
       },

       jiliClick(jil){
         this.input5 = jil
       }
   	},
    created: function () {
     
     
    },
    mounted() {
    
          
    },
   }
</script>

<style type="text/css">
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 960px;
    margin:20px auto 0 auto;
  }
  .s-div{
    width: 450px;
    margin:100px auto 100px auto;
  }
</style>