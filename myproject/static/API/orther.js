
Date.prototype.format = function (format) { 
	var o = { 
	"M+": this.getMonth() + 1, //month 
	"d+": this.getDate(), //day 
	"h+": this.getHours(), //hour 
	"m+": this.getMinutes(), //minute 
	"s+": this.getSeconds(), //second 
	"q+": Math.floor((this.getMonth() + 3) / 3), //quarter 
	"S": this.getMilliseconds() //millisecond 
} 
if (/(y+)/.test(format)) format = format.replace(RegExp.$1, 
	(this.getFullYear() + "").substr(4 - RegExp.$1.length)); 
	for (var k in o) if (new RegExp("(" + k + ")").test(format)) 
		format = format.replace(RegExp.$1, 
			RegExp.$1.length == 1 ? o[k] : 
			("00" + o[k]).substr(("" + o[k]).length)); 
	return format; 
} 

var orther = {
   
    utcToLocalTime: function(UTCDateString){
       var date = new Date(Date.parse(UTCDateString)); 
       return date.format("yyyy-MM-dd hh:mm:ss");
    },

    getSiteInfo: function(){
		var app = localStorage.getItem('app');
	    var app1 = JSON.parse(app);
	    return app1;
    }
   
}


export default orther

