<template>
  <div id="digPl">
     <el-dialog title="登陆" :visible="loginVisible" @close = "$emit('close')">
       <el-form  >
         <el-form-item label="用户名" :label-width="formLabelWidth"  >
           <el-input v-model="userNmae" auto-complete="off" style="width:240px"></el-input>
         </el-form-item>
         <el-form-item label="密码" :label-width="formLabelWidth"  >
           <el-input v-model="passWord" auto-complete="off" style="width:240px"></el-input>
         </el-form-item>
       </el-form>
       <div slot="footer" class="dialog-footer">
         <el-button type="primary" @click="$emit('sure')">确 定</el-button>
       </div>
     </el-dialog>
  </div>
</template>


<script>
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
      userNmae:{
        default: ''
      },
      loginVisible:{
        default: false
      },
    },
    computed:{
        
    },
    methods:{
      
    }
  }
</script>


<style type="text/css">

</style>