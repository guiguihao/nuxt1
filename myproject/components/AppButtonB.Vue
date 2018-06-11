<template>
 <div v-bind:class="['button-style1',sel?buttonTypeSel:'',sel?'':buttonType,'animated',execuAnima?'pulse':'']" :style='{width:width + "px",height:height + "px",borderRadius:radius + "px" }'
  @click="click"
 >
    <div :class="['iconfont',icon,]" :style = '{fontSize:iconSize + "px"}' style = 'height:35px; width:35px; margin-top:10px; padding-left:10px'>
      <div class = "rightClass">35°</div>
    </div>
    <p style = 'margin-top:0px;padding-left:10px'>区域</p>
    <p style = 'padding-left:10px'>{{name}} 开</p>
 </div>
</template>

<script>
  export default{
    name:'AppButtonB',
  	data() {
      return { 
      	buttonTypeSel:'button-style-sel',
      	buttonType:'button-style-normal',
        execuAnima:false,
      }
    },
  	props:{
      name:{
        default: 'none' 
      },
  		width:{
  			default: 90
  		},
  		height:{
  			default: 90
  		},
  		radius:{
  			default: 10
  		},
  		iconSize:{
  			default: 30
  		},
  		icon:{
  			default: ''
  		},
      //是否选中
      isSel:{
        default: false
      },
      // 是否有操作选中的功能
  		opSel:{  
        default: false
      },
  	},
  	methods:{
       click(){
          if (this.opSel){
            this.isSel = !this.isSel;
          }else{
            this.isSel = true;
            setTimeout(()=>{
              this.isSel = false;
            },700)
          }
          this.execuAnima = false

          setTimeout(()=>{
            this.execuAnima = true
          },50)
       	  // console.log(this.xxxx )
       }
  	},
    computed:{
        sel: function () {
          return this.isSel
        }
    },
  }

</script>

<style>

.button-style1{
  margin-top: 10px;
  opacity: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items:  flex-start;
  overflow: hidden;
  font-size: 13px;


}
.rightClass{
  position: relative;
  top: -35px;
  left: 40px;
  font-size: 22px;
}

.button-style-normal {
  background-color: #C0C0C0;

}

.button-style-sel {
  background-color: #E6A23C;
  
}


</style>