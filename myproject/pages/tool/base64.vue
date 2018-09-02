<template>
  <div class="content">
    <h4>在线Base64加密、解密</h4>
    <el-input
      type="textarea"
      :autosize="{ minRows: 8, maxRows: 16}"
      placeholder="请输入base64编码或字符串"
      v-model="Unicode">
    </el-input>
    <div style="margin-top: 20px;"></div>
     <el-button type="primary" @click="tounicode">base64加密</el-button>
     <el-button type="primary" @click="tozw">base64解密</el-button>
    

     <div style="margin-top: 500px;"></div>
     
    
  </div>
</template>

<script type="text/javascript">
   import {StringView} from '~/static/js/stringview'
   export default {
    head () {
    return {
      
      title: '在线Base64加密、解密-rootopen.com',
      meta: [
        {hid: 'description',name: 'description', content: 'Base64加密、解密,在线Base64加密、在线解密'},
        {name:"keywords",content:"Base64加密、解密,在线Base64加密、在线解密"}
        
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
           var myStringView1 = new StringView(this.Unicode);
           this.Unicode = myStringView1.toBase64()
      },

      tozw(){
         var myStringView1 = StringView.makeFromBase64(this.Unicode);
         this.Unicode = myStringView1.toString()
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