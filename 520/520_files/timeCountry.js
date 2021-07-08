// 各国时间
$(function() {
	setInterval(function() {
		fnDate();
	}, 1000);
})

function fnDate() {
	$('.Bjing').html(getLocalTime(8));
	$('.meiguodong').html(getLocalTime(-4));
	$('.meiguoxi').html(getLocalTime(-7));
	$('.yinngou').html(getLocalTime(1));
	$('.omen').html(getLocalTime(1));
	$('.jp').html(getLocalTime(9));

}

/* 各国时间 */
function getLocalTime(i) {
	// 参数i为时区值数字，比如北京为东八区则输进8,西5输入-5
	if (typeof i !== 'number')
		return;
	var d = new Date();
	// 得到1970年一月一日到现在的秒数
	var len = d.getTime();
	// 本地时间与GMT时间的时间偏移差
	var offset = d.getTimezoneOffset() * 60000;
	// 得到现在的格林尼治时间
	var utcTime = len + offset;
	return dateFtt("MM-dd hh:mm:ss",utcTime + 3600000 * i);
}


function dateFtt(fmt,date) { 
	var date = new Date(date);
  var o = {   
    "M+" : date.getMonth()+1,                
    "d+" : date.getDate(),                      
    "h+" : date.getHours(),                     
    "m+" : date.getMinutes(),                   
    "s+" : date.getSeconds(),                   
    "q+" : Math.floor((date.getMonth()+3)/3),   
    "S"  : date.getMilliseconds()               
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
}