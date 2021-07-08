$(function(){
	$.ajax({url:rootpath+"/tool/get_rate",
		type:"post",
		dataType:"json",
		success:function(data){
			var usrate = new Number(data.usrate);
			var ukrate = new Number(data.ukrate);
			var jprate = new Number(data.jprate);
			var eurate = new Number(data.eurate);
			var hkrate = new Number(data.hkrate);
			
			$("#USD").text(usrate.toFixed(4));
			$("#GBP").text(ukrate.toFixed(4));
			$("#EUR").text(eurate.toFixed(4));
			$("#JPY").text(jprate.toFixed(4));
			$("#HKD").text(hkrate.toFixed(4));
			
		}
		
	});
	
	var time = getNowFormatDate();
	$("#time").text(time);
});

function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var minutes = date.getMinutes();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if(minutes >=0 && minutes<=9){
    	minutes = "0" + minutes;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + minutes;
    return currentdate;
}