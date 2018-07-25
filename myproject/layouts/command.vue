<template>

  <div style ="background-color: #3b8070;">
    <cmd-head></cmd-head>
    <div id = "des" style ="background-color: #3b8070;  color: #fff;">
         <p>共收录<span style="font-size: 50px">{{allcount}}</span>条命令行</p>
         这里是记录和分享命令行的地方, 所有命令行都可以进行评论、点赞.
         <p style = "margin-top:20px">
          <el-button plain @click = "tijiao">提交命令行</el-button>
         </p>
    </div>
    <el-row>
      <el-col :md="18" :sm="24"> <nuxt/></el-col>
      <el-col :span="6" class = "hidden-sm-and-down">
        <cmd-right></cmd-right>
      </el-col>  
    </el-row>
    <globar-bottom></globar-bottom>
    <cmd-dig-add :cmdDialogFormVisible = 'cmdDialogFormVisible' :cmd = "cmd"  v-on:close = "closed" v-on:sure = "cmdAdd"></cmd-dig-add>
  </div>
</template>


<script>
import CmdHead from '~/components/command/CmdHead.vue'
import CmdRight from '~/components/command/CmdRight.vue'
import GlobarBottom from '~/components/GlobarBottom.vue'
import 'element-ui/lib/theme-chalk/display.css'
import CmdDigAdd from '~/components/command/CmdDigAdd'
export default {
  components: {
    CmdHead,
    CmdRight,
    GlobarBottom,
    CmdDigAdd,
  },
  data:()=>{
    return {
      cmdDialogFormVisible:false,
      cmd:{'title':'','overview':'','content':'','out':''},
    }
  },
  computed:{
       //总数据数量
    allcount(){
      return this.$store.state.article.zongCount
    },
  },
  methods:{
      //提交方案
      tijiao(){
        if (this.$store.state.authUser) {
          this.cmdDialogFormVisible = true;
        }else{
          this.$message.error('请先登陆');
        };
      },
      closed(){
          this.cmdDialogFormVisible = false;
      },
      cmdAdd: function () {
        // console.log(this.cmd);
        let params = {
          title:this.cmd.title,
          content:this.cmd.content,
          overview:this.cmd.overview,
          reserved_5:this.cmd.out,
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
  },
 

 }
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

#des
{
  background-color: #35495e;
  padding: 50px 0 100px 0;
  text-align: center;
  font-size: 30px;
}
</style>
