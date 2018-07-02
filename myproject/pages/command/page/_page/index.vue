<template>
 <div>
   <el-card class="box-card" id = "box-card">
     <div slot="header" class="clearfix">
       <span>所有命令 ({{allcount}})</span>
     </div>
     <div v-for="o in articles" :key="o._id" class="text item">
      <el-row>
        <el-col :span="22" ><nuxt-link :to="'/command/view/' + o._id"><h3>{{o.title}}</h3></nuxt-link></el-col>
        <el-col :span="2" style ="text-align: right;"><h2 style="float:right; margin-left:2px">52</h2><i class="el-icon-star-on" style="float:right; margin-top:5px"></i></el-col>  
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
     :total="1000">
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
  computed:{
    articles(){
      return this.$store.state.article.list
    },
    allcount(){
      return this.$store.state.article.allCount
    }
  },
  data:()=>{
    return {
      postFontSize:10,

    }
  },
  async asyncData({ params }) {
    // We can use async/await ES6 feature
    let currentPage2 = await params.page;
    return {currentPage2:parseInt(currentPage2)}
  },
  methods:{
      //分页跳转
      handleCurrentChange(val) {
        this.$router.push({path:'/command/page/' + val})
      },

      //执行复制命令
      cpcmd(){
        console.log('====')
        var oInput = document.createElement('input');
        oInput.value = "12121212121212121212";
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

      //获取数据
      async getArticles(page) {
        try {
          await this.$store.dispatch('article/getArticleList', {
            page:page,
            size:20,
            filter:{}
          })

        } catch (e) {
        }
      },
  },

  created: function () {
    this.getArticles(this.currentPage2) 
  },
 
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