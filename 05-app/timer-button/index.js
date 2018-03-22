$(function () {
    //实例化定时器按钮
    $('#enabledBtn').click(function(e){
        e.preventDefault();
    var btn=timerButton({
        'container':'div.main',
        'enabled':true,
        'tlength':9,
        'text':'发送短信',
        'message':'发送成功'    
    });
  
});
    $('#disabledBtn').click(function (e) {
        e.preventDefault();
        var btn = timerButton({
            'container': 'div.main',
            'enabled': false,
            'tlength': 9,
            'text': '同意',
            'message': '已同意'
        });
    })
});