<template>
  <div id="digPl">
     <el-dialog title="登陆" :visible="loginVisible" @close = "$emit('close')">
       <el-form  >
         <el-form-item label="用户名" :label-width="formLabelWidth"  >
           <el-input v-model="userName" auto-complete="off" style="width:240px"></el-input>
         </el-form-item>
         <el-form-item label="密码" :label-width="formLabelWidth"  >
           <el-input v-model="passWord" auto-complete="off" style="width:240px"></el-input>
         </el-form-item>
       </el-form>
       <div slot="footer" class="dialog-footer">
         <el-button type="primary" @click="login">确 定</el-button>
       </div>
     </el-dialog>
  </div>
</template>


<script>
  import {hex_md5} from '~/static/js/common.js'
  export default {
    name:'LoginDig',
    data:()=>{
      return {
        formLabelWidth:'60px',
        }
    },
    props:{
      passWord:{
        default: ''
      },
      userName:{
        default: ''
      },
      loginVisible:{
        default: false
      },
    },
    computed:{
        
    },
    methods:{
      async login() {
      this.loginVisible = false;
      try {
        await this.$store.dispatch('login', {
          username: 'adjw',
          password: '7FEF6171469E80D32C0559F88B377245'
        })
        this.userName = ''
        this.passWord = ''
      } catch (e) {
        this.$message.error(e.message);
      }
    },
    }
  }
</script>


<style type="text/css">

</style>