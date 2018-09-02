<template>
  <div class="content">
    <h4>字符串转Byte</h4>
    <el-button-group style="float: right">
      <el-button type="primary" @click="jzhi(2)">二进制</el-button>
      <el-button type="primary" @click="jzhi(10)">十进制</el-button>
      <el-button type="primary" @click="jzhi(16)">十六进制</el-button>
    </el-button-group>
    <div style="margin-top: 20px; clear: both;width:100%;height: 1px"></div>
    <el-input
      style =" width: 48%; margin-top: 10px ;"
      type="textarea"
      :autosize="{ minRows: 8, maxRows: 16}"
      placeholder="请输入字符串"
      v-model="string1">
    </el-input>
    <el-input
      style =" width: 48%; float: right ; margin-top: 10px"
      type="textarea"
      :autosize="{ minRows: 8, maxRows: 16}"
      v-model="tobyte1">
    </el-input>
    <div style="margin-top: 20px; clear: both;width:100%;height: 1px"></div>

    <h4>Byte转字符串<span style="margin-left: 20px">(支持十进制,十六进制(必须带有0x如:'0x6c') )</span></h4>
    <el-input
      style =" width: 48%"
      type="textarea"
      :autosize="{ minRows: 8, maxRows: 16}"
      placeholder="请输入byte(例:72,101,108,108,111,32,119,111,114,108,100)"
      v-model="byte1">
    </el-input>
    <el-input
      style =" width: 48%; float: right ;"
      type="textarea"
      :autosize="{ minRows: 8, maxRows: 16}"
      v-model="tostring">
    </el-input>

     <div style="margin-top: 500px;"></div>
     
    
  </div>
</template>

<script type="text/javascript">
   import {StringView} from '~/static/js/stringview'
   export default {
    head () {
    return {
      
      title: '在线字符串转二进制,字符串转byte,string转byte,-rootopen.com',
      meta: [
        {hid: 'description',name: 'description', content: '在线字符串转byte[],string转byte,字符串转二进制'},
        {name:"keywords",content:"在线字符串转byte[],string转byte,string转二进制"}
        
      ]
     }
  },
    data:()=>{
      return {
        string1:'Hello world!',
        byte1:'0x48,0x65,0x6c,0x6c,0x6f,0x20,0x77,0x6f,0x72,0x6c,0x64,0x21',
        zjValue:16,
       }
    },

    computed:{
         tobyte1: function () {
           return this.jzhi(this.zjValue)
         },

          tostring: function () {
           var myStringView1 = new StringView(this.byte1.split(','));
            return  myStringView1.toString()
         }


    },
    
    methods:{
     
      jzhi(value){
        this.zjValue = value
        var myStringView1 = new StringView(this.string1);
           var rsl = ''
           for (var i = 0; i < myStringView1.bufferView.length; i++) {
               var dd = myStringView1.bufferView[i]
               if (this.zjValue === 16) {
                 rsl += '0x' + dd.toString(this.zjValue)
               }else{
                 rsl += dd.toString(this.zjValue) 
               }
               if (i!= myStringView1.bufferView.length-1) {
                  rsl += ','
               }
           }

          return  rsl

      }
     
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