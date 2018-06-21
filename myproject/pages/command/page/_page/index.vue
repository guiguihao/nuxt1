<template>
 <div>
   <el-card class="box-card" id = "box-card">
     <div slot="header" class="clearfix">
       <span>卡片名称</span>
     </div>
     <div v-for="o in 4" :key="o" class="text item">
      <el-row>
        <el-col :span="22" ><h3>zgrep with colour into less</h3></el-col>
        <el-col :span="2" style ="text-align: right;"><h2 style="float:right; margin-left:2px">52</h2><i class="el-icon-star-on" style="float:right; margin-top:5px"></i></el-col>  
      </el-row>
       <p>{{o}}</p>
       <canvas-code name ="012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789" :canvasId = o></canvas-code>
       <el-row style="margin-top:10px">
        <el-col :span="20" >jss 2018-5-56</el-col>
        <el-col :span="4"><el-button size="mini" style="float:right" @click="cpcmd">复制命令</el-button></el-col>  
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
  
  data:()=>{
    return {
      postFontSize:10,

    }
  },
  async asyncData({ params }) {
    // We can use async/await ES6 feature
    let currentPage2 = await params.page;
    return {currentPage2:currentPage2}
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
</style>