<template>
  <div id="digPl">
  	 <el-dialog title="提交命令" :visible="cmdDialogFormVisible" @close = "$emit('close')">
       <el-form  >
         <el-form-item label="title" :label-width="formLabelWidth"  >
           <el-input v-model="cmd.title" auto-complete="off"></el-input>
         </el-form-item>
         <el-form-item label="描述" :label-width="formLabelWidth"  >
           <el-input v-model="cmd.des" auto-complete="off" type="textarea" :rows="2"></el-input>
         </el-form-item>
         <el-form-item label="命令" :label-width="formLabelWidth"  >
           <el-input v-model="cmd.cmd" auto-complete="off" type="textarea" :rows="3"></el-input>
         </el-form-item>
         <el-form-item label="输出" :label-width="formLabelWidth"  >
           <el-input v-model="cmd.out" auto-complete="off" type="textarea" :rows="6"></el-input>
         </el-form-item>

         
       </el-form>
       <div slot="footer" class="dialog-footer">
         <el-button type="primary" @click="$emit('sure',cmd)">确 定</el-button>
       </div>
     </el-dialog>
  </div>
</template>


<script>
  export default {
  	name:'CmdDigAdd',
    data:()=>{
      return {
        formLabelWidth:'40px',
        }
    },
    props:{
      cmd:{
        default: {'title':'','des':'','cmd':'','out':''}
      },
      cmdDialogFormVisible:{
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