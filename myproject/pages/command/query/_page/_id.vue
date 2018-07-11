<template>
 <div>
   <el-card class="box-card" id = "box-card">
     <div slot="header" class="clearfix">
       <span>所有关于{{queryCmd}}命令 ({{allcount}})</span>
     </div>
     <div v-for="o in articles" :key="o._id" class="text item">
     	<el-row>
     	  <el-col :span="22" ><a :href="'/command/view/' + o._id" target = "_blank"><h3>{{o.title}}</h3></a></el-col>
     	  <el-col :span="2" style ="text-align: right;"><h2 v-if = "o.reserved_3" style="float:right; margin-left:2px">{{o.reserved_3}}</h2><h2 v-else style="float:right; margin-left:2px">0</h2><i class="el-icon-star-on" style="float:right; margin-top:5px"></i></el-col>  
     	</el-row>
       <p style ="margin:10px 0 10px 0">{{o.overview}}</p>
       <canvas-code :name = o.content :canvasId = o._id></canvas-code>
       <el-row style="margin-top:10px">
     	  <el-col :span="20" >{{o.author.name}} {{o.date}}</el-col>
     	  <el-col :span="4"><el-button size="mini" style="float:right" @click="cpcmd(o.content)">复制命令</el-button></el-col>  
     	</el-row>
     </div>
   </el-card>
   <!-- 分页 -->
   <el-pagination
     @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"
     :pager-count="5"
     :page-size="20"
     background
     layout="prev, pager, next"
     :total=allcount>
   </el-pagination>
 </div>
</template>

<script>
import CanvasCode from '~/components/command/CmdCanvas'
export default {
  layout: 'command',
  components: {
    CanvasCode
  },
  head () {
    return {
      
      title: this.queryCmd + '命令' +'|' +  'rootopen.com是记录您命令行的地方|linux命令行|命令大全',
      meta: [
        {name: 'description', content: this.title}
      ]
    }
  },
  data:()=>{
    return {
      currentPage2:1,
      postFontSize:10,
      queryCmd:'',

    }
  },
  async asyncData({ store,params }) {
    let filter = {}
    if (escape(params.id).indexOf( "%u" )<0)
    {
       // console.log("没有包含中文")
       filter = {'status':3,"$or":[{"content":{"$regex":'^' + params.id}}]}
     } else {
       // console.log( "包含中文" );
       filter = {'status':3,"$or":[{"title":{"$regex": params.id}}]}
    }
     await store.dispatch('article/getArticleCount', {
              page:1,
              size:1,
              filter:{status:3}
            });
      await store.dispatch('article/getArticleList', {
              page:parseInt(params.page),
              size:20,
              filter:filter
            });
      await store.dispatch('article/getHotArticleList', {
              page:1,
              size:10,
              filter:{recommend:'5b3dd6ff64fec052c8b60521',status:3}
            });
      return  {queryCmd:params.id,currentPage2:parseInt(params.page)}
  },

  computed:{
    articles(){
      return this.$store.state.article.list
    },
    //总数据数量
    allcount(){
      return this.$store.state.article.allCount
    },
    title(){
      let title = '';
      this.articles.forEach(function(a){  
        title += a.title
      });
      return title
    },

  },

  methods:{
  	  //分页跳转
  	  handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        window.location.href = '/command/query/' + val + '/'  + this.queryCmd
      },

      //执行复制命令
      cpcmd(data){
        console.log('====')
        var oInput = document.createElement('input');
        oInput.value = data;
        document.body.appendChild(oInput);
        oInput.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        oInput.className = 'oInput';
        oInput.style.display='none';
        this.$message({
          message: '复制成功',
          type: 'success'
        });

      },
     
  },

  created: function () {
    
   
  }
 
}
</script>

<style type="text/css">
 .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
    padding-bottom: 10px;
    border-bottom: solid 1px #d3d3d3;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
  	margin: 10px;
    
  }

  .box-card a{
  	color: #303133;
    text-decoration: none;
  }
</style>