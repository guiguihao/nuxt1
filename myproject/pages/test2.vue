<template>
  <div>
  	 <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
  	    
  	    <el-button slot="append" icon="el-icon-search" @click = "click"></el-button>
  	  </el-input>
  </div>
</template>

<script>
export default {
  components: {
   
  },
  data:()=>{
    return {
      input5:10,

    }
  },
  methods:{
      click(){
      	 this.input5 =20
      	 console.log('==========')
      	 this.$axios.get('/api/query?type=tiantian&postid=561003930864').then( res => {
      	 	console.log(res.data.nu)
      	 	this.input5 =res.data.nu
      	 });
      }
  },
 
}
</script>