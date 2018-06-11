<template>
 <div v-bind:class="['button-style',sel?buttonTypeSel:'',sel?'':buttonType,'animated',execuAnima?'pulse':'']" :style='{width:width + "px",height:height + "px",borderRadius:radius + "px" }'
  @click="click"
 >
    <div :class="['iconfont',icon,]" :style = '{fontSize:iconSize + "px"}' style = 'width:35px;'></div>
    <p >{{name}}</p>
 </div>
</template>

<script>
  export default{
    name:'AppButtonA',
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
  			default: 160
  		},
  		height:{
  			default: 50
  		},
  		radius:{
  			default: 5
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

.button-style{
  opacity: 0.5;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items:  center;
  overflow: hidden;
}
.button-style-normal {
  background-color: #C0C0C0;

}

.button-style-sel {
  background-color: #E6A23C;
  
}


</style>