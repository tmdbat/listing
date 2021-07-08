window.onload = function(){
    // <!-- 圣诞节 12 25 -->
    // <!-- 感恩节11月28日 -->
    // <!-- 黑色星期五 11 29 -->
    // <!-- 万圣节 10 31 -->

    function time(year, month, day, obj) {
        var today = new Date();
        endDate = new Date(year, month - 1, day)
        endTime = endDate.getTime();
        nowTime = today.getTime();
        leftTime = endTime - nowTime; //时间戳
        var leftsecond = parseInt(leftTime / 1000); //秒
        var day_1 = Math.floor(leftTime / (24 * 60 * 60 * 1000));
        var hour = sm(Math.floor((leftsecond - day_1 * 24 * 60 * 60) / 3600));
        var minutes = sm(Math.floor((leftsecond - day_1 * 24 * 60 * 60 - hour * 3600) / 60));
        var seconds = sm(Math.floor((leftsecond - day_1 * 24 * 60 * 60 - hour * 3600 - minutes * 60)));
        var obj = document.getElementsByClassName(obj)[0];
        // obj.innerHTML = '距离' + year + '年' + month + '月' + day + '日，还有' + day_1 + '天' + hour + '小时' + minutes + '分' + seconds + '秒'
        obj.innerHTML = day_1+1;
    }
    setInterval(function() {
        time(2021, 11, 01, 'day-w');
        time(2021, 11, 28, 'day-g');
        time(2021, 11, 29, 'day-h');
        time(2020, 12, 25, 'day-s');
    }, 1000)

    function sm(n) {
        return n < 10 ? "0" + n : n
    }
}