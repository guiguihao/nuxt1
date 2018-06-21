<template>
	 <div>
	 	<el-card class="box-card">
	 	  <div slot="header" >
	 	    <span>linux 常用命令</span>
	 	    
	 	  </div>
	 	  <el-tag :type="typeColors[index%typeColors.length]" v-for="(o,index) in cycmds" :key="o" class = "cpml">
	 	   <nuxt-link :to="'/test2'">{{o}}</nuxt-link>
	 	  </el-tag>
	 	</el-card>

	 	<el-card class="box-card" style="padding: 0; margin-top:10px">
	 	  <div slot="header" >
	 	    <span>热门命令</span>
	 	  </div>
	 	  <ul class = "rmml">
	         <li v-for = "(o,index) in rmcmds" :key="o">
	         	<span v-if="index == 0" style ="color: #F56C6C; font-size: 20px;font-style:italic">0{{index+1}}.</span>
	         	<span v-if="index == 1" style ="color: #E6A23C; font-size: 20px;font-style:italic">0{{index+1}}.</span>
	         	<span v-if="index == 2" style ="color: #67C23A; font-size: 20px;font-style:italic">0{{index+1}}.</span>
	         	<span v-if="index > 2 && index <9"  style ="color: #909399; font-size: 20px;font-style:italic">0{{index+1}}.</span>
	         	<span v-if="index >=9"  style ="color: #909399; font-size: 20px;font-style:italic">{{index+1}}.</span>
	         	<nuxt-link :to="'/test2'">{{o}}</nuxt-link>
	         </li>
	 	  </ul>
	 	  
	 	</el-card>
	 </div>
</template>

<script>
  export default{
  	name:'CmdRight',
  	data(){
       return{
         cycmds:['dd','ff','xx','pp','dd','ff','xx','pp','dd','ff','xx','pp','dd','ff','xx','pp',],
         typeColors:['','success','info','warning','danger'],
         rmcmds:['dd','ff','xx','pp','dd','ff','xx','pp','dd','ff','xx','pp','dd','ff','xx','pp',],
       }
  	},
  	computed:{
       // cycmdtypy:function (){
       //   var index = Math.floor((Math.random()*this.typeColors.length)); 
       // 	 return index
       // }
  	},
  }
</script>


<style>
 

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .cpml{
  	width: 80px;
  	text-align: center;
  	margin-left: 10px;
  	margin-top: 10px;
  }
  .cpml a {
  	color: #000;
    text-decoration: none;

  }
  .rmml {
  	padding: 0;
  	margin-top:0;
  	margin-left:0;
  	list-style-type: none;
  }
  .rmml li{
  	margin-top: 5px
  }
  .rmml li a{
  	margin-left: 10px;
  	color: #606266;
    text-decoration: none;
  }


</style>