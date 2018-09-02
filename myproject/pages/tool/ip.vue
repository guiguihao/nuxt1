<template>
  <div>
    <div class = "s-div">
        <p style="text-align: center; font-size: 20px; margin-bottom: 20px">请在下面输入查询IP</p>
       <el-input placeholder="请输入IP" v-model="input5" @keyup.enter.native="searchClick">
        
         <el-button slot="append" icon="el-icon-search" @click="searchClick"></el-button>
       </el-input>
    </div>
    <div class="box-card" style="background: #fff; padding: 20px">
      您的内网/局域网地址:{{LocalIp}}   系统:{{DetectRTC.osName}} {{DetectRTC.osVersion}}
      浏览器:{{DetectRTC.browser.name}} ({{DetectRTC.browser.fullVersion}})
         <a href="/tool/webRtc" style="margin-left: 20px; text-decoration: none; font-size: 12px">  查看详情 </a>
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>IP地址详细信息</span>
      </div>
      <div class="item">
        <table class="table table-responsive">
            <tbody>
              <tr>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">公网/外网IP地址 </font></font>
                 </td>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
                 </td>
                 <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{publicIp}}</font></font>
                 </td>
              </tr>
              <tr>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内网/局域网IP地址 </font></font>
                 </td>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
                 </td>
                 <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{LocalIp}}</font></font>
                 </td>
              </tr>
              <tr>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ISP </font></font>
                 </td>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
                 </td>
                 <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{ISP}}</font></font>
                 </td>
              </tr>



              <tr>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">国家 </font></font>
                 </td>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
                 </td>
                 <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{country}}</font></font>
                 </td>
              </tr>

             <tr>
                <td>
                   <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">省 </font></font>
                </td>
                <td>
                   <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
                </td>
                <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{region}}</font></font>
                </td>
             </tr>


            <tr>
               <td>
                  <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">市 </font></font>
               </td>
               <td>
                  <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
               </td>
               <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{city}}</font></font>
               </td>
            </tr>

            <tr>
               <td>
                  <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">纬度 </font></font>
               </td>
               <td>
                  <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
               </td>
               <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{latitude}}</font></font>
               </td>
            </tr>
            <tr>
               <td>
                  <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经度 </font></font>
               </td>
               <td>
                  <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
               </td>
               <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{longitude}}</font></font>
               </td>
            </tr>
            </tbody></table>
      </div>
    </el-card>

     <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>最近查询</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="more">more</el-button>
      </div>
      <div class="item">
         <a  v-for = "jv in jilvs.data" :key = "jv._id" :href='"/tool/ip?ip="+jv.w2' style="float: left; margin-left: 20px; color: #606266; text-decoration:none; ">{{jv.w2}}</a>
      </div>
      </el-card>
  </div>
</template>

<script type="text/javascript">
   import axios from 'axios' 
   import Request from '~/static/api/Requst.js'
   var Localip = ''
   var publicIp = ''
   export default {
    head () {
    return {
      
      title: 'ip地址查询-公网/内网局域网ip查询-ip转经纬度-ip服务商查询',
      meta: [
        {hid: 'description',name: 'description', content: '快速查询用户的IP和浏览器、操作系统,ip转经纬度地理位置查询,ip服务商查询'}
        
      ]
    }
  },
   	data:()=>{
   	  return {
   	    LocalIp:'',
        publicIp:'',
        ISP:'',
        country:'',
        region:'',
        city:'',
        latitude:'',
        longitude:'',
        input5:'',
        DetectRTC:{
          browser:{
            name:'',
            fullVersion:'',
          }
        },
        jilvs:'',
   	  }
   	},
    async asyncData({ req, params,query }) {
        // We can return a Promise instead of calling the callback
        let pas ={

        }
        if (query.ip) {
           pas.ip = query.ip
        }
        let res = await axios.post('/app/getip',pas)
        let jilvs = await Request.wanneng.getWanNengList(
            1,
            50,
            {w1:'ipjilv'}
          )

        let result = {

        }
        if (res.data.code === 0) {
                result.publicIp=res.data.data.ip
                result.ISP=res.data.data.isp
                result.country=res.data.data.country
                result.region=res.data.data.region
                result.city=res.data.data.city
                result.latitude=res.data.data.latitude
                result.longitude=res.data.data.longitude
                result.input5=res.data.data.ip
        }
        if (jilvs.data.code === 0) {
           result.jilvs=jilvs.data.data
        }
        // console.log(res)
        return result
      },
   	methods:{
      more(){
           window.open("/tool/moreip")
      },

        callback(e){
         	 console.log(e)
         	if(!e) return
            if (e.indexOf('Local')>-1) {
               this.LocalIp  = e.split(':')[1]
            }
            if (e.indexOf('Public')>-1) {
               // this.publicIp  = e.split(':')[1]
            }
        },
       initRCT (){
       	 let LocalIp = ''
       	 let publicIp = ''
         setTimeout(()=>{
         	 
         	DetectRTC.load(()=> {
         	    DetectRTC.hasWebcam; // (has webcam device!)
         	    DetectRTC.hasMicrophone; // (has microphone device!)
         	    DetectRTC.hasSpeakers; // (has speakers!)
         	    DetectRTC.isScreenCapturingSupported; // Chrome, Firefox, Opera, Edge and Android
         	    DetectRTC.isSctpDataChannelsSupported;
         	    DetectRTC.isRtpDataChannelsSupported;
         	    DetectRTC.isAudioContextSupported;
         	    DetectRTC.isWebRTCSupported;
         	    DetectRTC.isDesktopCapturingSupported;
         	    DetectRTC.isMobileDevice;

         	    DetectRTC.isWebSocketsSupported;
         	    DetectRTC.isWebSocketsBlocked;
         	    DetectRTC.checkWebSocketsSupport(this.callback);

         	    DetectRTC.isWebsiteHasWebcamPermissions;        // getUserMedia allowed for HTTPs domain in Chrome?
         	    DetectRTC.isWebsiteHasMicrophonePermissions;    // getUserMedia allowed for HTTPs domain in Chrome?

         	    DetectRTC.audioInputDevices;    // microphones
         	    DetectRTC.audioOutputDevices;   // speakers
         	    DetectRTC.videoInputDevices;    // cameras

         	    DetectRTC.osName;
         	    DetectRTC.osVersion;

         	    DetectRTC.browser.name === 'Edge' || 'Chrome' || 'Firefox';
         	    DetectRTC.browser.version;
         	    DetectRTC.browser.isChrome;
         	    DetectRTC.browser.isFirefox;
         	    DetectRTC.browser.isOpera;
         	    DetectRTC.browser.isIE;
         	    DetectRTC.browser.isSafari;
         	    DetectRTC.browser.isEdge;

         	    DetectRTC.browser.isPrivateBrowsing; // incognito or private modes

         	    DetectRTC.isCanvasSupportsStreamCapturing;
         	    DetectRTC.isVideoSupportsStreamCapturing;

         	    DetectRTC.DetectLocalIPAddress(this.callback);
         	});
          this.DetectRTC = DetectRTC
          // console.log(DetectRTC)
         },500)

       },

       searchClick(){
         window.location.href = "/tool/ip?ip=" + this.input5
       },
       
    
       
   	},
    created: function () {
     
     
    },
    mounted() {
          const s = document.createElement('script');
          s.type = 'text/javascript';
          s.src = 'https://cdn.webrtc-experiment.com/DetectRTC.js';
          document.body.appendChild(s);
          this.initRCT()

          
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