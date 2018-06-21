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
        <el-button type="text" class = "head_hy">欢迎:admin  <span style="margin-left:10px">会员中心</span></el-button>
        <el-button type="text" class = "head_hy" @click="loginClick">登录</el-button>
      </el-col>
  	</el-row>
  <login-dig :loginVisible = 'loginVisible' v-on:close = "closed" v-on:sure = "sure('cmd')"></login-dig>
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
    },
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