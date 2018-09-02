<template>
  <div class="content">
    <h4>byte[]转int<span style="margin-left: 20px">(支持十进制,十六进制必须带有0x如:'0x6c')</span></h4>
    <el-button-group style="float: right">
      <el-button type="primary" @click="byteToInt(2)">二进制</el-button>
      <el-button type="primary" @click="byteToInt(10)">十进制</el-button>
      <el-button type="primary" @click="byteToInt(16)">十六进制</el-button>
    </el-button-group>
    <div style="margin-top: 20px; clear: both;width:100%;height: 1px"></div>
    <el-input
      style =" width: 48%; margin-top: 10px ;"
      type="textarea"
      :autosize="{ minRows: 8, maxRows: 16}"
      placeholder="请输入byte 如:0x48,0x65,0x6c,0x6c"
      v-model="byte1">
    </el-input>
    <el-input
      style =" width: 48%; float: right ; margin-top: 10px"
      type="textarea"
      :autosize="{ minRows: 8, maxRows: 16}"
      v-model="toint1">
    </el-input>
    <div style="margin-top: 20px; clear: both;width:100%;height: 1px"></div>

    <h4>int转byte[]</h4>
   <el-button-group style="float: right">
      <el-button type="primary" @click="intToByte(2)">二进制</el-button>
      <el-button type="primary" @click="intToByte(10)">十进制</el-button>
      <el-button type="primary" @click="intToByte(16)">十六进制</el-button>
    </el-button-group>
    <div style="margin-top: 20px; clear: both;width:100%;height: 1px"></div>
    <el-input
      style =" width: 48%; margin-top: 10px ;"
      type="textarea"
      :autosize="{ minRows: 8, maxRows: 16}"
      placeholder="请输入int 如:125"
      v-model="int1">
    </el-input>
    <el-input
      style =" width: 48%; float: right ; margin-top: 10px"
      type="textarea"
      :autosize="{ minRows: 8, maxRows: 16}"
      v-model="tobyte1">
    </el-input>

     <div style="margin-top: 500px;"></div>
     
    
  </div>
</template>

<script type="text/javascript">
   import {StringView} from '~/static/js/stringview'
   export default {
    head () {
    return {
      
      title: '在线byte转int,int转byte,int互转byte,-rootopen.com',
      meta: [
        {hid: 'description',name: 'description', content: '在线byte转int,int转byte,int互转byte'},
        {name:"keywords",content:"在线byte转int,int转byte,int互转byte"}
      ]
     }
  },
    data:()=>{
      return {
        int1:'258',
        byte1:'0x01,0x02',
        binzhi:10,
        jinzhi:16,
       }
    },

    computed:{
         toint1: function () {
           return this.byteToInt(this.binzhi)
         },

          tobyte1: function () {
           return this.intToByte(this.jinzhi)
         }


    },
    
    methods:{
     intToByte(jinzhi){
                    this.jinzhi = jinzhi
                     var ss =  parseInt(this.int1)
                     var hex = ss.toString(16)
                     var res = ''
                     if (hex.length %2 !=0) {
                      hex = '0'+hex
                    }
                     for (var i = 0; i < hex.length; i+=2) {
                        res += '0x'+ hex.substr(i,2)
                        if (i!=hex.length-2) {
                          res += ','
                        }
                      }

                    if (jinzhi === 16) {

                      return res
                    }

                    if (jinzhi === 10) {
                     var myStringView1 = new StringView(res.split(','));
                     return myStringView1.bufferView.toString()
                   }

                   if (jinzhi === 2) {
                     var er = ''
                     var myStringView1 = new StringView(res.split(','));
                     for (var i = 0; i < myStringView1.bufferView.length; i++) {

                       var erval = myStringView1.bufferView[i].toString(2)
                       var yu = 8-erval.length%8
                       for (var k = 0; k < yu; k++) {
                        erval = '0' + erval
                      }
                      if (i != myStringView1.bufferView.length-1) {
                       erval += ','
                     }
                     er += erval
                   }
                   return er
                 }

                 return  res
        },


        byteToInt(jinzhi){
             this.binzhi = jinzhi
             var myStringView1 = new StringView(this.byte1.split(','));
             
             var int = 0
             for (var i in myStringView1.bufferView) {
                int = int | myStringView1.bufferView[i] << 8*(myStringView1.rawData.length-i-1)
             }
             return int.toString(this.binzhi)
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