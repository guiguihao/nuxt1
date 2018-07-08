<template>
	<div class = "">
       <el-breadcrumb separator="/" >
         <el-breadcrumb-item >首页</el-breadcrumb-item>
         <el-breadcrumb-item>我的命令</el-breadcrumb-item>
       </el-breadcrumb>

      <el-button  type="primary" v-on:click = "clickAdd" style="margin-top: 40px">添加命令行</el-button>
     <el-table
             :data="articles"
             style="width: 100%; margin-top: 40px"
             >
             <el-table-column
               prop="title"
               label="标题"
               width="360">
             </el-table-column>
           
             <el-table-column
               prop="date"
               width="160"
               label="日期">
             </el-table-column>
        
             <el-table-column
                   width="130"
                   label="状态"
                   >
                   <template slot-scope="scope">
                     <el-button v-if="scope.row.status == 3" type="text" size="small" style='color: #67C23A'>已发布</el-button>
                     <el-button v-if="scope.row.status == 2" type="text" size="small" style='color: #E6A23C'>未发布</el-button>
                     <el-button v-if="scope.row.status == 0" type="text" size="small" style='color: #F56C6C' >待审核</el-button>
                   </template>
              </el-table-column>
              <el-table-column
                   width="220"
                   label="操作"
                   >
                   <template slot-scope="scope">
                     <el-button type="primary" size="small" v-on:click="yulan(scope.row)">预览</el-button>
                     <el-button type="primary" size="small" v-on:click="edit(scope.row)">编辑</el-button>
                     <!-- <el-button type="danger" size="small" v-on:click="del(scope.row)">删除</el-button> -->
                   </template>
              </el-table-column>
        </el-table>

      <div class="mypage">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[20]"
            :page-size=20
            layout="total, sizes, prev, pager, next, jumper"
            :total=allcount>
          </el-pagination>
        </div>

       <cmd-dig-add :cmdDialogFormVisible = 'cmdDialogFormVisible' :cmd = "cmd"  v-on:close = "closed" v-on:sure = "cmdAdd"></cmd-dig-add>
	</div>
</template>

<script>
import CmdDigAdd from '~/components/command/CmdDigAdd'
export default {
  layout: 'user',
  components: {
    CmdDigAdd,
  },
  data:()=>{
    return {
     currentPage:1,
     cmdDialogFormVisible:false,
     cmd:{'title':'','overview':'','content':'','out':''},
     isAdd:true
    }
  },

   computed:{
    articles(){
      return this.$store.state.article.list
    },
    //总数据数量
    allcount(){
      return this.$store.state.article.allCount
    },
 
  },


  methods:{
   closed(){
     this.cmdDialogFormVisible = false;
   },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.getArticleList();
    },

      //调用登陆接口
      async login(){
        try{

           await this.$store.dispatch('login', {
              username: '',
              password: ''
           })
           if (!this.$store.state.authUser) {
             window.location.href="/"

           }else{
              this.getArticleList()
           }

        }catch (e) {
           // this.$message.error(e.message);
        }
      },



      //chaxun
      async getArticleList(){
        try{

           await this.$store.dispatch('article/getApiArticleList', {
              page:this.currentPage ,
              size:20,
              filter:{author:this.$store.state.authUser._id,type:'5b28575e64fec03d299a3ea1'}
           })
          
        }catch (e) {
           // this.$message.error(e.message);
        }
      },
     
     //预览
     yulan(data){
      window.open("/command/view/"+data._id)
     },

     //添加
     clickAdd(){
        this.cmd = {'title':'','overview':'','content':'','out':''},
        this.cmdDialogFormVisible = true
        this.isAdd = true
     },

     //编辑
      edit(data){
       this.cmd = {
        title:data.title,
        content:data.content,
        overview:data.overview,
        reserved_5:data.out,
        _id:data._id
       }
       this.cmdDialogFormVisible = true
       this.isAdd = false
      },

      //删除
      async del(data){
          try{

           await this.$store.dispatch('article/updateArticle', {
              params:{_id:data._id,del:1,}
           })
          
        }catch (e) {
           // this.$message.error(e.message);
        }
      },

       //添加
      cmdAdd: function () {
        // console.log(this.cmd);
        if (this.isAdd) {
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
        }else{
          let params = {
            _id:this.cmd._id,
            title:this.cmd.title,
            content:this.cmd.content,
            overview:this.cmd.overview,
            reserved_5:this.cmd.out,
          }
          this.editArticle(params);
        }
       
       },

       //添加方案
      async addArticle(data) {
         try {
             
             let result = await this.$store.dispatch('article/addArticle', {params:data})
             if (result === 1) {
               this.$message.success('添加成功');
               this.cmdDialogFormVisible = false;
               this.cmd = {}
                window.location.href="/user"
             }
          } catch (e) {
             this.$message.error(e.message);
          }
      },

       //编辑方案
      async editArticle(data) {
         try {
             
             let result = await this.$store.dispatch('article/updateArticle', {params:data})
             if (result === 1) {
               this.$message.success('编辑成功');
               this.cmdDialogFormVisible = false;
               this.cmd = {}
               window.location.href="/user"
             }
          } catch (e) {
             this.$message.error(e.message);
          }
      },

  },

  created: function () {
     
       this.login();
  }
 
}
</script>

<style>
  .ddf{
  	color: #fff
  }
  
</style>