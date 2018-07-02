<template>
  <div id="head">
  	<el-row>
  	  <el-col :span="8" id = "head_title">11111054515</el-col>
  	  <el-col :md="5" class = "hidden-md-and-down" >
  	    <el-input placeholder="请输入内容" v-model="input5">
  	      
  	       <el-button slot="append" icon="el-icon-search"></el-button>
  	     </el-input>
  	  </el-col>  
      <el-col :span="8" class="hidden-sm-and-down">
        <el-button type="text" class = "head_hy" @click="logOutClick" v-if = "username">退出</el-button>
        <el-button type="text" class = "head_hy" v-if = "username">欢迎:{{username}}  <span style="margin-left:10px">会员中心</span></el-button>
        <el-button type="text" class = "head_hy" @click="loginClick" v-if = "!username">登录</el-button>
        
      </el-col>
  	</el-row>
  <login-dig :loginVisible = 'loginVisible' v-on:close = "closed" v-on:sure = "sure()"></login-dig>
  </div>
</template>


<script>
  import LoginDig from '~/components/LoginDig'
  export default {
  	name:'CmdHead',
    components: {
      LoginDig,
    },
    data:()=>{
      return{
        input5:'',
        loginVisible:false,

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
      },

      sure(){
        this.loginVisible = false;
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

.head_hy{
  color: #fff;
  float: right;
  margin: 20px 50px 0 0;
}

</style>