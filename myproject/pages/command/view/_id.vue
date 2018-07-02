<template>
 <div>
   <el-card class="box-card" id = "box-card" v-if="article">
     <div slot="header" class="clearfix">
       <h3>{{article.title}}</h3>
     </div>
     <div class="text item">
     	<el-row>
     	  <el-col :span="22" > <h4>{{article.overview}}.</h4></el-col>
     	  <el-col :span="2" style ="text-align: right;"><h2 style="float:right; margin-left:2px">52</h2><i class="el-icon-star-on" style="float:right; margin-top:5px"></i></el-col>  
     	</el-row>
      <!-- <p style ="margin:10px 0 10px 0">{{o.overview}}</p> -->
       <canvas-code :name ="article.content"></canvas-code>
       <el-row style="margin-top:10px">
     	  <el-col :span="20" >{{article.author.name}} {{article.date}}</el-col>
     	  <el-col :span="4"><el-button size="mini" style="float:right" @click="cpcmd(article.content)">复制命令</el-button></el-col>  
     	</el-row>
     </div>
     <h5>输出</h5>
     <div class = "out">
      2222222
     </div>
      <el-button type="danger" circle class = "zan">赞</el-button>
   </el-card>

   <el-button type="F56C6C" style = "margin:50px auto 90px auto; display: block;" @click="saveCmd">提交替代方案</el-button>

   <!-- 替代方案 -->
   <el-card class="box-card" id = "box-card" v-for = "(o,index) in 4" :key="o">
     <div slot="header" class="clearfix">
       <span>替代方案{{index+1}}</span>
     </div>
     <div class="text item">
      <el-row>
        <el-col :span="22" > <h4>dddddddddddd</h4></el-col>
        <el-col :span="2" style ="text-align: right;"><h2 style="float:right; margin-left:2px">52</h2><i class="el-icon-star-on" style="float:right; margin-top:5px"></i></el-col>  
      </el-row>
       <canvas-code name ="012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789" :canvasId = o></canvas-code>
       <el-row style="margin-top:10px">
        <el-col :span="20" >jss 2018-5-56</el-col>
        <el-col :span="4"><el-button size="mini" style="float:right" @click="cpcmd">复制命令</el-button></el-col>  
      </el-row>
     </div>
     <h5>输出</h5>
     <div class = "out">
      2222222
     </div>
      <el-button type="danger" circle class = "zan" >赞</el-button>
   </el-card>


   <!-- 评论 -->
   <el-card class="box-card" id = "box-card">
     <div slot="header" class="clearfix">
       <h3 style = "float:left">评论</h3>
       <el-button  style = "float:right" @click = "clickpl('11')">我要评论</el-button>
     </div>
     <div v-for = "o in 4" :key="o" class = "plc">
          1111111
          <p style = "float:right; margin-top:10px;font: 12px Arial;">admin 1525-52-5</p>
     </div>
   </el-card>
    
    <cmd-dig-comment :pldialogFormVisible = 'pldialogFormVisible' v-on:close = "closed" v-on:sure = "sure('comment')"></cmd-dig-comment>
    <cmd-dig-add :cmdDialogFormVisible = 'cmdDialogFormVisible' :cmd = "cmd"  v-on:close = "closed" v-on:sure = "cmdAdd"></cmd-dig-add>
 </div>
</template>

<script>
import CanvasCode from '~/components/command/CmdCanvas'
import CmdDigComment from '~/components/command/CmdDigComment'
import CmdDigAdd from '~/components/command/CmdDigAdd'
export default {
  layout: 'command',
  components: {
    CanvasCode,
    CmdDigAdd,
    CmdDigComment,
  },
  data:()=>{
    return {
      currentPage2:1,
      postFontSize:10,
      pldialogFormVisible:false,
      cmdDialogFormVisible:false,
      cmd:{'title':'','des':'','cmd':'','out':''}
    }
  },
  computed:{
    article(){
      if (this.$store.state.article.allCount>0) {
        return this.$store.state.article.list[0]
      }else{
        return null
      }
    },
    allcount(){
      return this.$store.state.article.allCount
    }
  },
  methods:{
  	  //分页跳转
  	  handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        console.log(val);
        this.$router.push({path:'/command/page/' + val})
      },

      //执行复制命令
      cpcmd(cmd){
        console.log('====')
        var oInput = document.createElement('input');
        oInput.value = cmd;
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

      //我要评论
      clickpl(){
        if (this.$store.state.authUser) {
           this.pldialogFormVisible = true;
        }else{
          this.$message.error('请先登陆');
        };
       
      },

      //提交方案
      saveCmd(){
        if (this.$store.state.authUser) {
          this.cmd.title = this.article.title;
          this.cmdDialogFormVisible = true;
        }else{
          this.$message.error('请先登陆');
        };
        
      },

      closed(){
        console.log("===========");
        this.pldialogFormVisible = false;
        this.cmdDialogFormVisible = false;
      },

      sure(dd){
        this.pldialogFormVisible = false;
        console.log('=====');
        
      },
     cmdAdd: function (data) {
        console.log(data);
        this.addArticle(data);
       },

      //添加替代方案
      async addArticle(data) {
         try {
             await this.$store.dispatch('article/addArticle', {data})
            
          } catch (e) {
             this.$message.error(e.message);
          }
      },
      //获取数据
      async getArticles() {
         console.log(this.$router.currentRoute.params.id)
          try {
            await this.$store.dispatch('article/getArticleList', {
              page:1,
              size:1,
              filter:{_id:this.$router.currentRoute.params.id}
            })
            
          } catch (e) {
          }
      },
  },

  created:function (){
    this.getArticles()
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
  .out{
    background-color: #545c64;
    color: #fff;
    margin-top: 10px;
    font: 14px Arial;
    padding: 10px
  }
  .zan{

    margin-top: 20px;
    float: right;
    margin-bottom: 20px;
    margin-left: 20px;
  }

  .plc{
    margin: 10px 10px 10px 10px;
    padding: 10px 0px 20px 0px;
    border-bottom: solid 1px #d3d3d3;
  }
</style>