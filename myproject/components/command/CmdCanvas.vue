<template>
  <canvas :id="canvasId" style="border:1px solid #d3d3d3; background-color: #545c64;" width="100%" height = "20" >
    Your browser does not support the HTML5 canvas tag.
  </canvas>

</template>

<script>
  export default{
  	name:'CmdCanvas',
  	data(){
       return{
         
       }
  	},
  	props:{
      name:{
        default: 'name' 
      },
      canvasId:{
        default: 'myCanvas' 
      },
    },
 
  	mounted(){
      // console.log(this.canvasId )
      var divW=document.getElementById("box-card").offsetWidth;
      // console.log(divW )
  		var c=document.getElementById(this.canvasId);
		  var ctx=c.getContext("2d");
      ctx.canvas.width  = divW-40;  
		  
		  var lineWidth = 0;
      var canvasWidth = c.width-40;//计算canvas的宽度
      var initHeight=25;//绘制字体距离canvas顶部初始的高度
      var lastSubStrIndex= 0; //每次开始截取的字符串的索引
      var str = this.name;
      //计算高
      for(let i=0;i<str.length;i++){ 
          lineWidth+=ctx.measureText(str[i]).width; 
          if(lineWidth>canvasWidth){  
              initHeight+=20;//20为字体的高度
              lineWidth=0;
              lastSubStrIndex=i;
          } 
          
      }
      //重新设置高度
      ctx.canvas.height  = initHeight + (initHeight%20)*10; 
      
      //恢复默认设置
      initHeight = 25; 
      lineWidth = 0;
      lastSubStrIndex = 0;
      ctx.fillStyle = "#fff";
      ctx.font="14px Arial";
      
      ctx.fillText("$",5,initHeight);
      for(let i=0;i<str.length;i++){ 
          lineWidth+=ctx.measureText(str[i]).width; 
          if(lineWidth>canvasWidth){  
              ctx.fillText(str.substring(lastSubStrIndex,i),20,initHeight);//绘制截取部分
              initHeight+=20;//20为字体的高度
              lineWidth=0;
              lastSubStrIndex=i;
          } 
          if(i==str.length-1){//绘制剩余部分
              ctx.fillText(str.substring(lastSubStrIndex,i+1),20,initHeight);
          }
      }

       
  	}
  
  }
</script>