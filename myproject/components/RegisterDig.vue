<template>
  <div id="digPl">
     <el-dialog title="注册" :visible="loginVisible" @close = "$emit('close')">
       <el-form  >
         <el-form-item label="用户名" :label-width="formLabelWidth"  >
           <el-input v-model="userName" auto-complete="off" style="width:240px"></el-input>
         </el-form-item>
         <el-form-item label="密码" :label-width="formLabelWidth"  >
           <el-input v-model="passWord" auto-complete="off" style="width:240px"></el-input>
         </el-form-item>
          <el-form-item label="邮箱" :label-width="formLabelWidth"  >
           <el-input v-model="email" auto-complete="off" style="width:120px"></el-input>
           <el-input v-model="code" auto-complete="off" style="width:120px"></el-input>
           <el-button type="primary">验证邮箱</el-button>
         </el-form-item>
       </el-form>
       <div slot="footer" class="dialog-footer">
         <el-button type="primary" @click="zhuce">确 定</el-button>
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
      zhuceVisible:{
        default: false
      },
    },
    computed:{
        
    },
    methods:{
      async zhuce() {
      this.zhuceVisible = false;
      try {
        await this.$store.dispatch('zhuce', {
          username: this.userName,
          password: hex_md5(this.passWord)
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