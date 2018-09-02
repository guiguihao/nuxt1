<template>
  <div>
  
     <div class="box-card" role="alert">

  <center>
  <h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">警告！</font></font></h2>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的浏览器WebRTC正在泄露您的IP地址（</font></font><strong><span id="publicIP"></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{publicIp}}</font></font><span id="privateIP"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本地：{{LocalIp}}</font></font></span></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）到每个网站。</font><font style="vertical-align: inherit;">这是由名为“webrtc”的功能引起的。</font><font style="vertical-align: inherit;">WebRTC是99％的常见浏览器中的一部分，并公开您的IP地址。</font><font style="vertical-align: inherit;">默认情况下启用此功能，但默认情况下应禁用此功能。</font><font style="vertical-align: inherit;">即使是VPN /代理应用程序也无法保护您免受webrtc泄漏。</font><font style="vertical-align: inherit;">你应该得到一个webrtc插件，可以通过简单的点击禁用/启用它。</font><font style="vertical-align: inherit;">有很多这样的应用程序，但重要的是你要知道这个问题，以找到解决方案。</font></font></p>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用任何webrtc-shield应用程序，但我们建议您根据浏览器使用以下应用程序：</font></font></p>
  <br>
  <div class="stores">
    <a href="https://chrome.google.com/webstore/detail/webrtc-leak-shield/bppamachkoflopbagkdoflbgfjflfnfl"><img src="https://ip8.com/images/chrome-logo.png" width="100px"></a>
    <a href="https://addons.mozilla.org/en-US/firefox/addon/webrtc-leak-shield/"><img src="https://ip8.com/images/firefox-logo.png" width="90px"></a>
  </div>
  </center>
</div>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>WebRTC检测结果</span>
        <span style="font-size: 13px;margin-left: 10px">(您可以在此看到通过WebRTC端口读取的所有信息)</span>
      </div>
      <div class="item">
        <table class="">
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
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">系统 </font></font>
                 </td>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
                 </td>
                 <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{DetectRTC.osName}} {{DetectRTC.osVersion}}</font></font>
                 </td>
              </tr>



              <tr>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器 </font></font>
                 </td>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
                 </td>
                 <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{DetectRTC.browser.name}}{{DetectRTC.browser.fullVersion}}</font></font>
                 </td>
              </tr>

            <tr>
               <td>
                  <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MediaDevices </font></font>
               </td>
               <td>
                  <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
               </td>
               <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><span v-for="dev in DetectRTC.MediaDevices" :key="dev.label" style="background:#606266; margin-left: 10px; color: #fff;padding: 5px;font-size: 12px"> {{dev.label}}</span></font></font>
               </td>
            </tr>

             <tr>
               <td>
                  <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">音频输入设备</font></font>
               </td>
               <td>
                  <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
               </td>
               <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><span v-for="dev in DetectRTC.audioInputDevices" :key="dev.label" style="background:#606266; margin-left: 10px; color: #fff;padding: 5px;font-size: 12px"> {{dev.label}}</span></font></font>
               </td>
            </tr>

             <tr>
               <td>
                  <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">音频输出设备</font></font>
               </td>
               <td>
                  <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
               </td>
               <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><span v-for="dev in DetectRTC.audioOutputDevices" :key="dev.label" style="background:#606266; margin-left: 10px; color: #fff;padding: 5px;font-size: 12px"> {{dev.label}}</span></font></font>
               </td>
            </tr>


              <tr>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显示器宽高比 </font></font>
                 </td>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
                 </td>
                 <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{DetectRTC.displayAspectRatio}}</font></font>
                 </td>
              </tr>

              <tr>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显示器分辨率 </font></font>
                 </td>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
                 </td>
                 <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{DetectRTC.displayResolution}}</font></font>
                 </td>
              </tr>

               <tr>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否支持麦克风 </font></font>
                 </td>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
                 </td>
                 <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{DetectRTC.hasMicrophone}}</font></font>
                 </td>
              </tr>

              <tr>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否支持扬声器 </font></font>
                 </td>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
                 </td>
                 <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{DetectRTC.hasSpeakers}}</font></font>
                 </td>
              </tr>

               <tr>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否支持网络摄像头 </font></font>
                 </td>
                 <td>
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
                 </td>
                 <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{DetectRTC.hasWebcam}}</font></font>
                 </td>
              </tr>

           <tr>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否支持ApplyConstraints</font></font>
             </td>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
             </td>
             <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{DetectRTC.isApplyConstraintsSupported}}</font></font>
             </td>
          </tr>

            <tr>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否支持AudioContext </font></font>
             </td>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
             </td>
             <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{DetectRTC.isAudioContextSupported}}</font></font>
             </td>
          </tr>

           <tr>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否支持从Canvas捕获流？ </font></font>
             </td>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
             </td>
             <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{DetectRTC.isCanvasSupportsStreamCapturing}}</font></font>
             </td>
          </tr>

          <tr>
             <td width="300px">
                <font style="vertical-align: inherit;"><font>是否允许使用CreateMediaStreamSource </font></font>
             </td>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
             </td>
             <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{DetectRTC.isCreateMediaStreamSourceSupported}}</font></font>
             </td>
          </tr>

           <tr>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否允许使用GetUserMedia </font></font>
             </td>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ：</font></font>
             </td>
             <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{DetectRTC.isGetUserMediaSupported}}</font></font>
             </td>
          </tr>

          <tr>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否是移动设备 </font></font>
             </td>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
             </td>
             <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{DetectRTC.isMobileDevice}}</font></font>
             </td>
          </tr>
           <tr>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否支持显示器捕获屏幕 </font></font>
             </td>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
             </td>
             <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{DetectRTC.isScreenCapturingSupported}}</font></font>
             </td>
          </tr>
           <tr>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否支持多显示器捕获屏幕 </font></font>
             </td>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
             </td>
             <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{DetectRTC.isMultiMonitorScreenCapturingSupported}}</font></font>
             </td>
          </tr>

          <tr>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否支持ORTC（WebRTC 1.1）</font></font>
             </td>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
             </td>
             <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{DetectRTC.isORTCSupported}}</font></font>
             </td>
          </tr>

           <tr>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否支持RTPSenderReplaceTracks</font></font>
             </td>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
             </td>
             <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{DetectRTC.isRTPSenderReplaceTracksSupported}}</font></font>
             </td>
          </tr>

          <tr>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否支持远程流处理</font></font>
             </td>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
             </td>
             <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{DetectRTC.isRemoteStreamProcessingSupported}}</font></font>
             </td>
          </tr>

          <tr>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否支持Rtp数据通道</font></font>
             </td>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
             </td>
             <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{DetectRTC.isRtpDataChannelsSupported}}</font></font>
             </td>
          </tr>

           <tr>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否支持SCTP数据通道</font></font>
             </td>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
             </td>
             <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{DetectRTC.isSctpDataChannelsSupported}}</font></font>
             </td>
          </tr>

           <tr>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否支持设置SinkId</font></font>
             </td>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
             </td>
             <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{DetectRTC.isSetSinkIdSupported}}</font></font>
             </td>
          </tr>

           <tr>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否支持视频流捕获</font></font>
             </td>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
             </td>
             <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{DetectRTC.isVideoSupportsStreamCapturing}}</font></font>
             </td>
          </tr>

          <tr>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否支持WebRtc</font></font>
             </td>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
             </td>
             <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{DetectRTC.isWebRTCSupported}}</font></font>
             </td>
          </tr>

           <tr>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">系统是否会阻止WebSocket</font></font>
             </td>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
             </td>
             <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{DetectRTC.isWebSocketsBlocked}}</font></font>
             </td>
          </tr>

          <tr>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否支持WebSocket</font></font>
             </td>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
             </td>
             <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{DetectRTC.isWebSocketsSupported}}</font></font>
             </td>
          </tr>

          <tr>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">网站有麦克风权限吗?</font></font>
             </td>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
             </td>
             <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{DetectRTC.isWebsiteHasMicrophonePermissions}}</font></font>
             </td>
          </tr>

           <tr>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">网站有网络摄像头权限?</font></font>
             </td>
             <td>
                <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： </font></font>
             </td>
             <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{DetectRTC.isWebsiteHasWebcamPermissions}}</font></font>
             </td>
          </tr>

            </tbody></table>
      </div>
    </el-card>
     
     <div class="box-card">
    <div class="col-lg-12 alert alert-light">
        <h3 style="font-size:24px"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么是WebRTC？</font></font></h3>
          <div class="ip-info">

      <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Web实时通信（WebRTC）是一种先进的开源技术，允许桌面和移动浏览器使用简单的API实时交换数据。 </font></font></p>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WebRTC具有多种用途，包括通过移动或基于Web的应用程序启用音频，视频和网络功能。</font><font style="vertical-align: inherit;">WebRTC具有与Media Capture和Streams API类似的功能。</font><font style="vertical-align: inherit;">所有这三者都可以组合在一起，实现前所未有的多媒体功能。</font></font></p>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WebRTC的主要优势在于它可以实现实时点对点多媒体通信，这在当今的数字媒体时代是不可或缺的。</font></font></p>

<h4><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键部件 </font></font></h4>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WebRTC包含3个主要API：</font></font></p>
<ul>
<li><b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PeerConnection：</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这允许您发送和接收多媒体文件</font></font></li>
<li><b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">GetUserMedia：</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">顾名思义，它可以访问用户的媒体（例如摄像头和麦克风）。</font></font></li>
<li><b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DataChannels：</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">允许在浏览器之间直接传输非媒体。</font></font></li>
</ul>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下浏览器目前支持WebRTC：Mozilla Firefox，Opera，Chrome和Google Chrome。</font></font></p>

<h4><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缺点</font></font></h4>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WebTRC的一个主要缺点是，用户的隐私可能因其使用的VPN泄露其IP地址而易受攻击。 </font></font></p>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Paolo Stagno在2015年发现并标记了“WebTRC Leak”，当一些知名的VPN提供商在未经他们同意的情况下开始将用户的IP地址泄露到网站时，几个用户的隐私受到了损害。 </font></font></p>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更糟糕的是，最近的一项调查表明，令人惊讶的23％的VPN提供商正在泄露用户的IP地址，并保留个人信息，如设备类型，个人详细信息，访问的网站，甚至支付信息。 </font></font></p>

<h4><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我如何知道自己是否有风险？</font></font></h4>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此页面上的测试结果将告诉您浏览器是否受此漏洞的影响。</font></font></p>

<h4><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何防止WebTRC泄漏？</font></font></h4>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下载WebRTC Leak Shield为您的浏览器。</font></font></p>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome：</font></font><a href="https://chrome.google.com/webstore/detail/webrtc-leak-shield/bppamachkoflopbagkdoflbgfjflfnfl" target="_blank" style="text-decoration:underline;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">适用于Chrome的WebRTC Leak Shield</font></font></a></p>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firefox：</font></font><a href="https://addons.mozilla.org/en-US/firefox/addon/webrtc-leak-shield/" target="_blank" style="text-decoration:underline;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WebRTC Leak Shield For Firefox</font></font></a></p><a href="https://addons.mozilla.org/en-US/firefox/addon/webrtc-leak-shield/" target="_blank" style="text-decoration:underline;">


          </a></div><a href="https://addons.mozilla.org/en-US/firefox/addon/webrtc-leak-shield/" target="_blank" style="text-decoration:underline;">
        </a></div><a href="https://addons.mozilla.org/en-US/firefox/addon/webrtc-leak-shield/" target="_blank" style="text-decoration:underline;">
</a></div>

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
      
      title: 'WebRTC测试-webRTC检查',
      meta: [
        {hid: 'description',name: 'description', content: 'WebRTC是99％的常见浏览器中的一部分,并公开您的IP地址,默认情况下启用此功能'}
        
      ]
    }
  },
   	data:()=>{
   	  return {
   	    LocalIp:'',
        publicIp:'',
        WebsocketLatency:'',
        DetectRTC:{
          browser:{
            name:'',
            fullVersion:'',
          }
        },
        jilvs:'',
   	  }
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
          this.WebsocketLatency = DetectRTC.DetectRTC
          // console.log(DetectRTC)
         },500)

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
    background: #fff
  }
  .s-div{
    width: 450px;
    margin:100px auto 100px auto;
  }

  .col-lg-12{
    
  }
  .col-lg-12 a{
    color: #000
  }
</style>