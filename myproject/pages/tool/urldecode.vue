<template>
  <div class="content">
    <h4>URL 编码与解码</h4>
    <el-input
      type="textarea"
      :autosize="{ minRows: 4, maxRows: 8}"
      placeholder="请粘贴需要编码或解码的URL"
      v-model="url">
    </el-input>
    <div style="margin-top: 20px;"></div>
     <el-button type="primary" @click="tounicode">url编码</el-button>
     <el-button type="primary" @click="tozw">url解码</el-button>
     <el-button type="primary" @click="tounicode1">url编码(符号一起编码)</el-button>
     <el-button type="primary" @click="tozw1">url解码(符号一起解码)</el-button>

     <div>
       <h4>注:url编码(符合一起编码),符号包括; / ? : @ & = + $ , # </h4>
     </div>
     <div style="margin-top: 800px;"></div>
     
    
  </div>
</template>

<script type="text/javascript">

   export default {
    head () {
    return {
      
      title: '在线URL解码,URL编码,URL加密',
      meta: [
        {hid: 'description',name: 'description', content: 'URL解码,URL编码,URL加密,URL解密,URL DECODE, URL encode, escape, URL UTF-8编码,GBK编码,GB2312解密'},
        {name:"keywords",content:"URL解码,URL编码,URL加密,URL解密,URL DECODE, URL encode, escape, URL UTF-8编码,GBK编码,GB2312解密"}
        
      ]
     }
  },
   	data:()=>{
   	  return {
        url:'',
        iscode:false,
   	   }
   	},
    
   	methods:{
      tounicode(){
          this.url = encodeURI(this.url)
      },

       tozw(){
        this.url = decodeURI(this.url)
      },

      tounicode1(){
          this.url = encodeURIComponent(this.url)
      },

       tozw1(){
        this.url = decodeURIComponent(this.url)
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