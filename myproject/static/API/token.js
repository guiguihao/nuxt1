import {hex_md5} from '~/static/js/common.js'

var token = {
    DEVELOPER_APPKEY:'A0Zr98jxccdvdvvfbfbbbfbfRsdT',
    MD5_KEY:'A0Zr98j/3yX R~XHH!jmN]LWX/,?RsdT',
    getToken: function(){
       var appkey = '5b2856b964fec03d28ba674a';
       var appsecret = '10d66f553ac8c113';
       var timestamp = Date.parse(new Date())/1000;
       return appkey + '&&' + timestamp + '&&' + hex_md5(appsecret+'&&'+timestamp.toString());
    },
    getAppToken: function(){
       var timestamp = Date.parse(new Date())/1000;
       return timestamp + '&&' + hex_md5(timestamp+'&&'+token.DEVELOPER_APPKEY);
    },
     getAppToken1: function(pw){
       var timestamp = Date.parse(new Date())/1000;
       return timestamp + '&&' + hex_md5(pw +'&&' + token.MD5_KEY + timestamp);
    },
}
export default token
