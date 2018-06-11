<template>
  <canvas id="myCanvas" width="300" height="150" style="border:1px solid #d3d3d3;">
    Your browser does not support the HTML5 canvas tag.
</canvas>

</template>

<script>
  export default{
  	name:'CanvasTest',
  	data(){
       return{
         
       }
  	},
  	props:{
      name:{
        default: 'none' 
      },
    },
  	mounted(){
  		var c=document.getElementById("myCanvas");
		var ctx=c.getContext("2d");
		ctx.font="40px Arial";
		ctx.fillText(this.name,10,50);
  	}

  }
</script>