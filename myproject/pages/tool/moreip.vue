<template>
  <div>
      <a  v-for = "jv in jilvs.data" :key = "jv._id" :href='"/tool/ip?ip="+jv.w2' style="float: left; margin-left: 20px; color: #606266; text-decoration:none; ">{{jv.w2}}</a>
  </div>
</template>

<script type="text/javascript">
   import Request from '~/static/api/Requst.js'
   export default {
    layout: 'none',
    head () {
    return {
      
      title: 'ip地址库',
      meta: [
        {hid: 'description',name: 'description', content: 'ip地址库,ip地址经纬度转换,IP地址详细信息'}
        
      ]
    }
  },
   	data:()=>{
   	  return {
        jilvs:'',
   	  }
   	},
    async asyncData({ req, params,query }) {
        // We can return a Promise instead of calling the callback 
        let jilvs = await Request.wanneng.getWanNengList(
            1,
            999999999,
            {w1:'ipjilv'}
          )

        if (jilvs.data.code === 1) {
              return{
                jilvs:jilvs.data.data
              }
        }
    },
   	methods:{
        
       
   	},
    created: function () {
     
     
    },
    mounted() {
        

          
    },
   }
</script>

<style type="text/css">
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 960px;
    margin:20px auto 0 auto;
  }
  .s-div{
    width: 450px;
    margin:100px auto 100px auto;
  }
</style>