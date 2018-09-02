<template>
  <div class="content">
    <h4>进制转换</h4>
    <el-radio-group v-model="jinzhiStr" style="margin-top: 20px">
      <el-radio-button label="二进制"></el-radio-button>
      <el-radio-button label="八进制"></el-radio-button>
      <el-radio-button label="十进制"></el-radio-button>
      <el-radio-button label="十六进制"></el-radio-button>
      <el-radio-button label="32进制"></el-radio-button>
      <el-radio-button label="36进制"></el-radio-button>
    </el-radio-group>
    <div style="margin-top: 50px">
      <el-input v-model="inputValue" placeholder="请输入" style="width: 400px"></el-input> 
      <el-button style="margin-left: 20px">转换</el-button>
    </div>
   
    <table class="tbl" width="100%" cellspacing="0" cellpadding="0">
            <thead>
            <tr>
                <th width="10%">进制</th>
                <th width="55%">结果</th>
                <th width="35%">解释</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>2</td>
                <td><input type="text" class="text" id="base_2" :value=value2></td>
                <td></td>
            </tr>
            <tr>
                <td>8</td>
                <td><input type="text" class="text" id="base_8" :value=value8></td>
                <td></td>
            </tr>
            <tr>
                <td>10</td>
                <td><input type="text" class="text" id="base_10" :value=value10></td>
                <td></td>
            </tr>
            <tr>
                <td>16</td>
                <td><input type="text" class="text" id="base_16" :value=value16></td>
                <td></td>
            </tr>
            <tr>
                <td>26</td>
                <td><input type="text" class="text" id="base_26" :value=value26></td>
                <td>小写字母</td>
            </tr>
            <tr>
                <td>32</td>
                <td><input type="text" class="text" id="base_32" :value=value32></td>
                <td>不包含 ILOU 字符</td>
            </tr>
            <tr>
                <td>36</td>
                <td><input type="text" class="text" id="base_36" :value=value36></td>
                <td>数字 + 小写字母</td>
            </tr>
            </tbody>
        </table>

        <div class="lianjie">
          <p><a target="_blank" class="js-track" href="http://tools.ietf.org/html/rfc4648">进制规范文档：The Base16, Base32, and Base64
                Data Encodings</a></p>
           <p><a target="_blank" class="js-track" href="http://www.crockford.com/wrmg/base32.html">32进制规范 (不包含 ILOU)</a></p>
        </div>
    
  </div>
</template>

<script type="text/javascript">
   import {StringView} from '~/static/js/stringview'
   export default {
    head () {
    return {
      
      title: '在线进制转换,-rootopen.com',
      meta: [
        {hid: 'description',name: 'description', content: '支持二进制,十进制,十六进制,六十四进制,进制互相转换'},
        {name:"keywords",content:"在线二进制,在线进制转换,十进制,十六进制,六十四进制,进制互相转换"}
      ]
     }
  },
    data:()=>{
      return {
        jinzhiStr:'十进制',
        inputValue:'255'
       }
    },

    computed:{
       value2(){
         return parseInt(this.inputValue,this.jstrTj(this.jinzhiStr)).toString(2)
       },
       value8(){
         return parseInt(this.inputValue,this.jstrTj(this.jinzhiStr)).toString(8)
       },
       value10(){
         return parseInt(this.inputValue,this.jstrTj(this.jinzhiStr)).toString(10)
       },
       value16(){
         return parseInt(this.inputValue,this.jstrTj(this.jinzhiStr)).toString(16)
       },
       value26(){
         return parseInt(this.inputValue,this.jstrTj(this.jinzhiStr)).toString(16)
       },
       value32(){
         return parseInt(this.inputValue,this.jstrTj(this.jinzhiStr)).toString(32)
       },
        value36(){
         return parseInt(this.inputValue,this.jstrTj(this.jinzhiStr)).toString(36)
       },
      
    
    },
    
    methods:{

      jstrTj(jinzhiStr){
        if (jinzhiStr === '二进制') {
          return 2
        }
        if (jinzhiStr === '八进制') {
          return 8
        }
        if (jinzhiStr === '十进制') {
          return 10
        }
        if (jinzhiStr === '十六进制') {
          return 16
        }
        if (jinzhiStr === '32进制') {
          return 32
        }
        if (jinzhiStr === '36进制') {
          return 36
        }

        if (jinzhiStr === '58进制') {
          return 58
        }

        if (jinzhiStr === '62进制') {
          return 62
        }

        if (jinzhiStr === '64进制') {
          return 64
        }
      },
    
       zhuanhuan(jinzhiStr){
           var jinzhi = this.jstrTj(jinzhiStr)
           return parseInt(this.inputValue).toString(jinzhi)
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
  table {
    display: table;
    border-collapse: separate;
    border-spacing: 2px;
    border-color: grey;
    margin-top: 50px;
  }
  table.tbl {
    width: 100%;
    border-collapse: collapse;
  }
  table.tbl th {
    background: #F3F3F3;
  }
  table.tbl th, table.tbl td {
    border: 1px solid #E6E6E6;
    padding: 5px 8px;
    word-break: normal;
  }
  td, th {
    display: table-cell;
    vertical-align: inherit;
   }
   .lianjie{
    margin-top: 50px;
   }

  .lianjie p {
    margin-top: 20px

  }
  .lianjie p a{
    color: #000;
    text-decoration-line: none;

  }

</style>