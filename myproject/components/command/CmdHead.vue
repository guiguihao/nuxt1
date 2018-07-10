<template>
  <div id="head">
  	<el-row>
  	  <el-col :span="9" id = "head_title"><a href="/">ROOTOPEN</a></el-col>
  	  <el-col :span="7" >
  	    <el-input placeholder="请输入搜索内容" v-model="input5" @keyup.enter.native="searchClick">
  	      
  	       <el-button slot="append" icon="el-icon-search" @click="searchClick"></el-button>
  	     </el-input>
  	  </el-col>  
      <el-col :span="7" class="hidden-sm-and-down">
        <el-button type="text" class = "head_hy" @click="logOutClick" v-if = "username">退出</el-button>
        <el-button type="text" class = "head_hy" v-if = "username" @click = "clickUser">欢迎:{{username}}  <span style="margin-left:10px">会员中心</span></el-button>
        <el-button type="text" class = "head_hy" @click="loginClick" v-if = "!username">登录</el-button>
        <el-button type="text" class = "head_hy" @click="zhucheClick" v-if = "!username">注册</el-button>
        
      </el-col>
  	</el-row>
  <login-dig :loginVisible = 'loginVisible' v-on:close = "closed" v-on:sure = "sure()"></login-dig>
  <register-dig :zhuceVisible = 'zhuceVisible' v-on:close = "closed" v-on:sure = "sure()"></register-dig>
  </div>
</template>


<script>
  import LoginDig from '~/components/LoginDig'
  import RegisterDig from '~/components/RegisterDig'
  export default {
  	name:'CmdHead',
    components: {
      LoginDig,
      RegisterDig,
    },
    head () {
      return {
        meta: [

          { hid: 'description', name: 'description', content: 'rootopen.com linux命令大全' },
          {name: 'keywords', content: 'linux,命令,命令行'}
        ]
      }
    },
    data:()=>{
      return{
        input5:'',
        loginVisible:false,
        zhuceVisible:false,
      }
    },
    computed:{
        username(){
          if(this.$store.state.authUser){
            return this.$store.state.authUser.name;
          }
          return ''
        },
   },
    methods:{
       //登陆
       loginClick(){
         this.loginVisible = true;
       },
       closed(){
        console.log("===========");
        this.loginVisible = false;
        this.zhuceVisible = false;
      },
      zhucheClick(){
        this.zhuceVisible = true;
      },

      sure(){
        this.loginVisible = false;
        this.zhuceVisible = false;
      },
      //调用登陆接口
      async login(){
        try{
           await this.$store.dispatch('login', {
              username: '',
              password: ''
           })
        }catch (e) {
           // this.$message.error(e.message);
        }
      },
      //调用登出接口
      async logOutClick(){
        try{
           await this.$store.dispatch('logout')
        }catch (e) {
           this.$message.error(e.message);
        }
      },

      searchClick(){
        if (this.input5) {
          window.location.href = "/command/query/1/" +this.input5
        }else{
          this.$message.error('请输入要搜索的命令或相关内容')
        }
      },

      clickUser(){
        window.location.href = "/user"
      },
    },

    created: function () {
     
       this.login();
    }
  }
</script>


<style type="text/css">
#head
{
  background: #545c64;
  height: 80px;
  line-height: 80px;
  color: #fff
}

#head_title
{
	margin-left: 30px;
	font-size: 40px;
}

#head_title a
{
  color: #fff;
  text-decoration: none;

}

.head_hy{
  color: #fff;
  float: right;
  margin: 20px 10px 0 0;
}

</style>