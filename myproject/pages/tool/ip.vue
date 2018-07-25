<template>
  <div>
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
            </tbody></table>
      </div>
    </el-card>
  </div>
</template>

<script type="text/javascript">
   import axios from 'axios' 
   var Localip = ''
   var publicIp = ''
   export default {
   	data:()=>{
   	  return {
   	    LocalIp:'',
        publicIp:'',
        ISP:'',
        country:'',
        region:'',
        city:'',

   	  }
   	},
   	methods:{
      // async gip() {
      //    // We can use async/await ES6 feature
      //    let { data } = await axios.get(`http://ip.taobao.com/service/getIpInfo2.php?ip=myip`)
      //    return { post: data }
      //  }, 
        callback(e){
         	 console.log(e)
         	if(!e) return
            if (e.indexOf('Local')>-1) {
               this.LocalIp  = e.split(':')[1]
            }
            if (e.indexOf('Public')>-1) {
               this.publicIp  = e.split(':')[1]
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
         },500)
       },
       
   	},
    created: function () {
      // this.gip();/
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
</style>