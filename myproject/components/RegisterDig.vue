<template>
  <div id="digPl">
     <el-dialog title="注册" :visible="zhuceVisible" @close = "$emit('close')">
       <el-form  >
         <el-form-item label="用户名" :label-width="formLabelWidth"  >
           <el-input v-model="userName" auto-complete="off" style="width:240px"></el-input>
         </el-form-item>
         <el-form-item label="密码" :label-width="formLabelWidth"  >
           <el-input v-model="passWord" auto-complete="off" style="width:240px"></el-input>
         </el-form-item>
          <el-form-item label="邮箱" :label-width="formLabelWidth"  >
           <el-input v-model="email" auto-complete="off" style="width:240px"></el-input>
           <el-button type="primary" style="margin-left: 10px" @click="sendmial">发送验证码</el-button>

         </el-form-item>
           <el-form-item label="验证码" :label-width="formLabelWidth"  >
           <el-input v-model="code" placeholder="请进验证邮箱中获取验证码" auto-complete="off" style="width:240px"></el-input>
         </el-form-item>
       </el-form>
       <div slot="footer" class="dialog-footer">
         <el-button type="primary" @click="zhuce">注  册</el-button>
       </div>
     </el-dialog>
  </div>
</template>


<script>
  import {hex_md5} from '~/static/js/common.js'
  export default {
    name:'RegisterDig',
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
      email:{
        default: ''
      },
      code:{
        default: ''
      },
      zhuceVisible:{
        default: false
      },
    },
    computed:{
        
    },
    methods:{
      async zhuce() {
          if (!this.userName || this.userName == '') {
            return this.$message.error('用户名不能为空');
          }
          if (!this.passWord || this.passWord == '') {
            return this.$message.error('密码不能为空');
          }
          if (!this.code || this.code == '') {
            return this.$message.error('验证码不能为空');
          }
          if (this.code != (this.$store.state.code>>10).toString() ) {
            return this.$message.error('验证码不正确或已过期');
          }
          try {
            let result = await this.$store.dispatch('zhuce', {
              name: this.userName,
              email: this.email,
              password: hex_md5(this.passWord)
            })
            this.zhuceVisible = false;
            if (result == 1) {
               this.$message.success('注册成功');
            }

          } catch (e) {
            this.$message.error(e.message);
          }
      },
      async sendmial() {
          if (!this.email || this.email == '') {
            return this.$message.error('邮箱不能为空');
          }
          try {
            await this.$store.dispatch('sendmial', {
              email: this.email,
            })
            this.$message.success('发送验证码成功');
          } catch (e) {
            this.$message.error(e.message);
          }
      },
    }
  }
</script>


<style type="text/css">

</style>