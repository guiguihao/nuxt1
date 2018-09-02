<template>
  <div class="content">
    <h4>中文转unicode,unicode转中文,Unicode编码、解码</h4>
    <el-input
      type="textarea"
      :autosize="{ minRows: 8, maxRows: 16}"
      placeholder="请粘贴需要转换的中文或者Unicode码"
      v-model="Unicode">
    </el-input>
    <div style="margin-top: 20px;"></div>
     <el-button type="primary" @click="tounicode">中文转unicode</el-button>
     <el-button type="primary" @click="tozw">unicode转中文</el-button>


     <div style="margin-top: 500px;"></div>
     
    
  </div>
</template>

<script type="text/javascript">

   export default {
    head () {
    return {
      
      title: '在线unicode转中文,中文转unicode,unicode在线编解码',
      meta: [
        {hid: 'description',name: 'description', content: '在线unicode转中文,中文转unicode工具,unicode在线编解码'},
        {name:"keywords",content:"unicode转中文,中文转unicode,unicode工具,Unicode编码,Unicode解码, Unicode在线编码, Unicode在线解密,UTF-8编码,UTF-8解码,UTF8编码,UTF8解码, UTF8在线编码, utf8在线解密"}
        
      ]
     }
  },
   	data:()=>{
   	  return {
        Unicode:'',
   	   }
   	},
    
   	methods:{
      tounicode(){
           if (this.Unicode.indexOf('\\u')>-1) {
            return
           }
            var res = [];
            for ( var i=0; i<this.Unicode.length; i++ ) {
                res[i] = ( "00" + this.Unicode.charCodeAt(i).toString(16) ).slice(-4);
            }
            this.Unicode = "\\u" + res.join("\\u")
      },

       tozw(){
        let str = this.Unicode.replace(/\\/g, "%");
        this.Unicode = unescape(str);
      },
      
     
   	},
    created: function () {
     
     
    },
    mounted() {
      
    },
   }
</script>

<style type="text/css">
  .content{
    width: 980px;
    margin: 20px auto;
  }
  h4{
    margin: 20px 0 10px 0;
  }
  h5{
     margin: 20px 0 10px 0;
  }
  #base64-demo{
    padding: 20px 10px;
    background: #000;
    color: #fff
  }

</style>