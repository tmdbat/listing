(function($){
    $.fn.moveStopEvent = function(callback){
        return this.each(function() {
            var x = 0,
                y = 0,
                x1 = 0,
                y1 = 0,
                isRun = false,
                si,
                self = this;
            var sif = function(){
                si = setInterval(function(){
                    if(x == x1 && y ==y1){
                        clearInterval(si);
                        isRun = false;
                        callback && callback.call(self);
                    }
                    x = x1;
                    y = y1;
                }, 100);
            }

            $(this).mousemove(function(e){
                x1 = e.pageX;
                y1 = e.pageY;
                !isRun && sif(), isRun = true;
            }).mouseout(function(){
                clearInterval(si);
                isRun = false;
            });
        });
    }
})(jQuery);

//首页鼠标移动TAB获取列表
$('#tab-hover-list li').moveStopEvent(function () {
    var _this = $(this);

    var thisId = $(this).attr('tab-list');
    if(!thisId){
        return false;
    }
    $('#tab-hover-list li').removeClass('active');
    _this.addClass('active');
    $('.tab-list-explore').hide();
    $('#'+thisId).show();

    var dataHover = _this.attr('data-hover');
    if (dataHover == 'active') {
        return false;
    }

    $('#'+thisId).html('<p style="text-align: center;margin-top:10px;" class="load_home_tab"><img src="/static/common/reader_loading.gif">加载中...</p>');
    _this.attr('data-hover', 'active');
    var param = _this.children('a').attr('data-p');
    //鼠标移动获取列表
    $.get(G_BASE_URL + '/explore/ajax/get_home_list/' + param, {}, function (e) {
        if (e.indexOf('login_form') > -1) {//判断未登陆 跳转到登陆页面
            location.href = '/account/login/';
        } else {
            $('#' + thisId).html(e);
        }
    });
}, function () {

})
//首页TAB列表分页获取
$('.tab-list-explore').on('click','.explore-list-page a',function(){
    var param = $(this).attr('href');
    var activeLi = $('#tab-hover-list li[class=active]');
    var thisId = activeLi.attr('tab-list');
    $.get(G_BASE_URL+'/explore/ajax/get_home_list'+param,{},function(e){
        $('#'+thisId).html(e);
        return false;
    });
    return false;
})