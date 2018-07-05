<template>
  <div id="digPl">
  	 <el-dialog title="评论" :visible="pldialogFormVisible" @close = "$emit('close')">
       <el-form  >
         <el-form-item label="内容" :label-width="formLabelWidth"  >
           <el-input v-model="content.content" auto-complete="off" type="textarea" :rows="6"></el-input>
         </el-form-item>
         
       </el-form>
       <div slot="footer" class="dialog-footer">
         <el-button type="primary" @click="$emit('sure',content)">确 定</el-button>
       </div>
     </el-dialog>
  </div>
</template>


<script>
  export default {
  	name:'CmdDigComment',
    data:()=>{
      return {
        formLabelWidth:'40px',
        }
    },
    props:{
      content:{
        default: {content:''}
      },
      pldialogFormVisible:{
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