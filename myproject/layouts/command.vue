<template>

  <div style ="background-color: #3b8070;">
    <cmd-head></cmd-head>
    <div id = "des" style ="background-color: #3b8070;  color: #fff;">
         <p>共收录<span style="font-size: 50px">{{allcount}}</span>条命令行</p>
         这里是记录和分享命令行的地方, 所有命令行都可以进行评论、点赞.
    </div>
    <el-row>
      <el-col :md="18" :sm="24"> <nuxt/></el-col>
      <el-col :span="6" class = "hidden-sm-and-down">
        <cmd-right></cmd-right>
      </el-col>  
    </el-row>
    <globar-bottom></globar-bottom>
  </div>
</template>


<script>
import CmdHead from '~/components/command/CmdHead.vue'
import CmdRight from '~/components/command/CmdRight.vue'
import GlobarBottom from '~/components/GlobarBottom.vue'
import 'element-ui/lib/theme-chalk/display.css'
export default {
  components: {
    CmdHead,
    CmdRight,
    GlobarBottom,
  },
  computed:{
       //总数据数量
    allcount(){
      return this.$store.state.article.zongCount
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
  padding: 100px 0 100px 0;
  text-align: center;
  font-size: 30px;
}
</style>
