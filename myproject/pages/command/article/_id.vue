<template>
 <el-card class="a-card" id = "box-card">
    
     <div class="text item">
     	<el-row>
     	  <el-col :md="5" style="overflow:hidden;color: #fff"> .</el-col>
     	  <el-col :md="12">
     	    <h1 class="a_title">{{article.title}}</h1>
     	    <div v-html="article.htmlcontent"></div>
     	  </el-col>  
     	  <el-col :md="5" style="overflow:hidden;color: #fff">.</el-col>
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
  computed:{
    //cmd数据
    article(){
      if (this.$store.state.article.allCount>0) {
        return this.$store.state.article.list[0]
      }else{
        return {title:'',content:''}
      }
    },
  },
  async asyncData({ params,store }) {
     await store.dispatch('article/getArticleCount', {
              page:1,
              size:1,
              filter:{}
            });
      await store.dispatch('article/getArticleList', {
              page:1,
              size:1,
              filter:{_id:params.id}
            });
     await store.dispatch('article/getHotArticleList', {
            page:1,
            size:10,
            filter:{recommend:'5b3dd6ff64fec052c8b60521'}
          });
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

h1{
  font-size: 20px;
  margin-top: 20px;
}

p{
  line-height: 20px;
  font-size: 14px;
  margin-top: 10px;
}

</style>