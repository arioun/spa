var temp = 9;

$(function () {
    
    
   var timer = setInterval(function(){
        $('#agree-btn').val('同意(' + temp + 's)');
        temp--;
        
    }, 1000);
    setTimeout(() => {
        clearInterval(timer);
        $('#agree-btn').removeAttr('disabled')
        $('#agree-btn').val('同意');
    }, 10000);
    
    function name(params) {
        
    }

    $('#agree-btn').click(function(){
        alert("你点击了同意按钮");
    });


});