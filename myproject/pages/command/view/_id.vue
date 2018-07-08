<template>
 <div>
   <el-card class="box-card" id = "box-card" v-if="article">
     <div slot="header" class="clearfix">
       <h3>{{article.title}}</h3>
     </div>
     <div class="text item">
     	<el-row>
     	  <el-col :span="22" > <h4>{{article.overview}}.</h4></el-col>
     	  <el-col :span="2" style ="text-align: right;"><h2 style="float:right; margin-left:2px">{{zanCount}}</h2><i class="el-icon-star-on" style="float:right; margin-top:5px"></i></el-col>  
     	</el-row>
      <!-- <p style ="margin:10px 0 10px 0">{{o.overview}}</p> -->
       <canvas-code :name ="article.content"></canvas-code>
       <el-row style="margin-top:10px">
     	  <el-col :span="20" >{{article.author.name}} {{article.date}}</el-col>
     	  <el-col :span="4"><el-button size="mini" style="float:right" @click="cpcmd(article.content)">复制命令</el-button></el-col>  
     	</el-row>
     </div>
     <h5>输出</h5>
     <div class = "out" v-if = "article.reserved_5">
       {{article.reserved_5}}
     </div>
      <el-button type="danger" circle class = "zan" @click = "zan(article)">赞</el-button>
   </el-card>

   <el-button type="F56C6C" style = "margin:50px auto 90px auto; display: block;" @click="saveCmd">提交替代方案</el-button>

   <!-- 替代方案 -->
   <el-card class="box-card" id = "box-card" v-for = "(article,index) in rearticles" :key="article._id">
     <div slot="header" class="clearfix">
       <span>替代方案{{index+1}}  {{article.title}}</span>
     </div>
     <div class="text item">
      <el-row>
        <el-col :span="22" ><h4>{{article.overview}}.</h4></el-col>
        <el-col :span="2" style ="text-align: right;"><h2 style="float:right; margin-left:2px">{{article.reserved_3}}</h2><i class="el-icon-star-on" style="float:right; margin-top:5px"></i></el-col>  
      </el-row>
       <canvas-code :name ="article.content" :canvasId = article._id></canvas-code>
       <el-row style="margin-top:10px">
        <el-col :span="20" >{{article.author.name}} {{article.date}}</el-col>
        <el-col :span="4"><el-button size="mini" style="float:right" @click="cpcmd(article.content)">复制命令</el-button></el-col>  
      </el-row>
     </div>
     <h5>输出</h5>
     <div class = "out" v-if = "article.reserved_5">
      {{article.reserved_5}}
     </div>
      <el-button type="danger" circle class = "zan" @click = "zan(article)">赞</el-button>
   </el-card>


   <!-- 评论 -->
   <el-card class="box-card" id = "box-card">
     <div slot="header" class="clearfix">
       <h3 style = "float:left">评论</h3>
       <el-button  style = "float:right" @click = "clickpl('11')">我要评论</el-button>
     </div>
     <div v-for = "comment in comments" :key="comment._id" class = "plc">
          {{comment.content}}
          <p style = "float:right; margin-top:10px;font: 12px Arial;">{{comment.user.name}} {{comment.date}}</p>
     </div>
   </el-card>
    
    <cmd-dig-comment :pldialogFormVisible = 'pldialogFormVisible' :content = "commentContent" v-on:close = "closed" v-on:sure = "sure"></cmd-dig-comment>
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
  head () {
    return {
      title: this.article.title + '---' + this.article.reserved_1,
      meta: [
        {name: 'description', content: this.article.content + '|' + this.article.title + '|' + this.article.overview}
      ]
    }
  },
  data:()=>{
    return {
      currentPage2:1,
      postFontSize:10,
      pldialogFormVisible:false,
      cmdDialogFormVisible:false,
      cmd:{'title':'','overview':'','content':'','out':''},
      commentContent:{},
    }
  },
  async asyncData({ store,params }) {
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
      await store.dispatch('article/getReArticleList', {
              page:1,
              size:999,
              filter:{reserved_4:params.id,status:3}
            });
       await store.dispatch('comment/getCommentList', {
              page:1,
              size:999,
              filter:{oid:params.id}
            })
       await store.dispatch('article/getHotArticleList', {
              page:1,
              size:10,
              filter:{recommend:'5b3dd6ff64fec052c8b60521'}
            });
    

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
    //替代方案数据
    rearticles(){
      if (this.$store.state.article.allCount>0) {
        return this.$store.state.article.reList
      }else{
        return null
      }
    },
    //总数据数量
    allcount(){
      return this.$store.state.article.allCount
    },
    //评论数据
    comments(){
      return this.$store.state.comment.list
    },
    //点赞数
    zanCount(){
      if (this.article.reserved_3) {
        return  parseInt(this.article.reserved_3)
      }
      return 0
    },

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

      //点赞
     async zan(cmd){
        try {
             let z = 0
             if (!isNaN(cmd.reserved_3)) {
                z = parseInt(cmd.reserved_3) + 1
             };
             if (!cmd.reserved_3) {
              z = 1
             }
            // console.log(z+1);
             let params = {
               _id:cmd._id,
               reserved_3: z.toString()
               
             }
             let result = await this.$store.dispatch('article/updateArticle', {params:params})
             if (result === 1) {
               this.$message.success('点赞成功');
             }
          } catch (e) {
             this.$message.error(e.message);
          }
      },

      closed(){
        console.log("===========");
        this.pldialogFormVisible = false;
        this.cmdDialogFormVisible = false;
      },

      sure: function(){
        
        console.log(this.commentContent);
        let params = {
          
          content:this.commentContent.content,
          oid:this.$router.currentRoute.params.id,
          type:1,
          userId:this.$store.state.authUser._id
        }
        this.addComment(params);

        
      },
     cmdAdd: function () {
        // console.log(this.cmd);
        let params = {
          title:this.cmd.title,
          content:this.cmd.content,
          overview:this.cmd.overview,
          reserved_5:this.cmd.out,
          reserved_4:this.$router.currentRoute.params.id,
          source:0,
          status:0,
          type:'5b28575e64fec03d299a3ea1',
          author:this.$store.state.authUser._id
        }
        this.addArticle(params);
       },


      //添加替代方案
      async addArticle(data) {
         try {
             
             let result = await this.$store.dispatch('article/addArticle', {params:data})
             if (result === 1) {
               this.$message.success('添加成功');
               this.cmdDialogFormVisible = false;
               this.cmd = {}
             }
          } catch (e) {
             this.$message.error(e.message);
          }
      },

      //添加评论
      async addComment(data) {
         try {
             let result = await this.$store.dispatch('comment/addComment', {params:data})
             if (result === 1) {
               this.$message.success('添加成功');
               this.pldialogFormVisible = false;
             }
          } catch (e) {
             this.$message.error(e.message);
          }
      },
     
  },

  created:function (){
    // this.getReArticleList()
    // this.getCommentList()
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