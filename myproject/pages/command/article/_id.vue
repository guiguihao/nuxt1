<template>
 <el-card class="a-card" id = "box-card">
     <div slot="header" class="clearfix">
       <h3>ddddddd</h3>
     </div>
     <div class="text item">
     	<el-row>
     	  <el-col :md="5" style="line-height:1000px;overflow:hidden;"> .</el-col>
     	  <el-col :md="12">
     	    <h4 class="a_title">title</h4>
     	    <div><p>15112123132131311311313211511212313213131131131321151121231321313113113132115112123132131311311313211511212313213131131131321151121231321313113113132115112123132131311311313211511212313213131131131321</p></div>
     	  </el-col>  
     	  <el-col :md="5" style="line-height:1000;overflow:hidden;">.</el-col>
     	</el-row>
     </div>
   </el-card>
</template>

<script>
 export default {
  layout: 'command',
  components: {

  },
  
  data:()=>{
    return {
      postFontSize:10,

    }
  },
  async asyncData({ params }) {
    // We can use async/await ES6 feature
    // let currentPage2 = await params.page;
    // return {currentPage2:currentPage2}
  },
  methods:{
      
  },
 
}
</script> 


<style type="text/css">
.a_title{
  text-align: center;
}

.a-card{
	margin: 0 10px 0 10px;
	word-break: break-all; 
	word-wrap:break-word;
}

</style>