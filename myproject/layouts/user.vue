<template>

  <div>
    <global-head></global-head>
    <div style = "margin-top:10px; margin-left:10px" >
      <el-row>
        <el-col :span="5">
          <el-menu
                :default-openeds="['1']"
                default-active="2"
                class="el-menu-vertical-demo"
        
                >
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">我的命令</el-menu-item>
       <!--              <el-menu-item index="1-2">我的评论</el-menu-item>
                    <el-menu-item index="1-3">我的收藏</el-menu-item>
                    <el-menu-item index="1-4">资料</el-menu-item> -->
                    <el-menu-item index="1-5"></el-menu-item>
                    <el-menu-item index="1-5"></el-menu-item>
                    <el-menu-item index="1-5"></el-menu-item>
                    <el-menu-item index="1-5"></el-menu-item>
                    <el-menu-item index="1-5"></el-menu-item>
                    <el-menu-item index="1-5"></el-menu-item>
                    <el-menu-item index="1-5"></el-menu-item>
                    <el-menu-item index="1-5"></el-menu-item>
                    <el-menu-item index="1-5"></el-menu-item>
                    <el-menu-item index="1-5"></el-menu-item>
                    <el-menu-item index="1-5"></el-menu-item>
                    <el-menu-item index="1-5"></el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                
              </el-menu>
        </el-col>
        <el-col :span="19" style="padding:20px;">
          <nuxt/>
        </el-col>
      </el-row>
    </div>
    <globar-bottom></globar-bottom>
  </div>
</template>


<script>
import GlobalHead from '~/components/GlobalHead.vue'
import GlobarBottom from '~/components/GlobarBottom.vue'
import 'element-ui/lib/theme-chalk/display.css'
export default {
  components: {
    GlobalHead,
    GlobarBottom,
  },
  methods:{

  }
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
  height: 100%;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;


}

</style>
