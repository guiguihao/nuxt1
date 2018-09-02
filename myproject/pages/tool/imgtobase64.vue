<template>
  <div class="content">
    <h4>图片BASE64互转</h4>
    <el-input
      type="textarea"
      :autosize="{ minRows: 8, maxRows: 16}"
      placeholder="请输入base64编码内容"
      v-model="base64">
    </el-input>
    <h5>base64头</h5>
     <el-input
      placeholder="请输入base64头,例:data:image/jpeg;"
      v-model="base64head">
    </el-input>

     <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :before-upload="beforeAvatarUpload"
      >
      <el-button size="small" type="primary" style="margin-top: 10px">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">支持jpg/png/gif文件</div>
    </el-upload>

    <h4>您的图片</h4>
    <img :src="base64head + 'base64,' + base64"/>

    <p>DataURI 允许在HTML文档中嵌入小文件，可以使用 img 标签或 CSS 嵌入转换后的 Base64 编码，减少 HTTP 请求，加快小图像的加载时间。 经过Base64 编码后的文件体积一般比源文件大 30% 左右。</p>

    <div id="base64-demo">
          <pre><span class="c_comment">// Base64 在CSS中的使用</span>
<span class="c_cssselector">.box{</span>
  <span class="c_csspropname">background-image: url("</span><span class="pre-propvalue">data:image/jpg;base64,/9j/4QMZR...</span><span class="c_csspropname">");</span>
<span class="c_cssselector">}</span>
<span class="c_comment">// Base64 在HTML中的使用</span>
<span class="c_htmltag">&lt;img <span class="c_htmlpropname">src="</span><span class="c_htmlpropvalue">data:image/jpg;base64,/9j/4QMZR...</span><span class="c_htmlpropname">"</span> /&gt;</span>
        </pre>
        </div>
    
  </div>
</template>

<script type="text/javascript">

   export default {
    head () {
    return {
      
      title: '图片转base64编码,在线转换Base64图片互转',
      meta: [
        {hid: 'description',name: 'description', content: 'DataURI、PNG转换Base64，GIF转换Base64，JPEG转换Data64，Base64在线转换，图片转DataURI,图片编码base64'},
        {name:"keywords",content:"图片在线转换Base64,图片转base64,文件转Base64"}
        
      ]
    }
  },
   	data:()=>{
   	  return {
        base64head:'data:image/jpeg;',
        base64:'',
   	   }
   	},
    
   	methods:{

      beforeAvatarUpload(file) {
             const isJPG = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif';
             const isLt2M = file.size / 1024 / 1024 < 2;

             if (!isJPG) {
               this.$message.error('上传图片只能是 JPG/png/gif 格式!');
             }
             if (!isLt2M) {
               this.$message.error('上传图片大小不能超过 2MB!');
             }
             console.log('=======')
             console.log(file)
             var reader = new FileReader();
             reader.readAsDataURL(file);
             reader.onload = (e) => {
                this.base64head = reader.result.split('base64,')[0]
                this.base64 = reader.result.split('base64,')[1]
             }
             return isJPG && isLt2M;
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