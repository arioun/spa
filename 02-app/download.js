$(function () {
    var temp=0;
    var timer=0;
    
    $("#begin-btn").click(function () {
        if (timer!==0) {
            return;
        }
        timer = setInterval(function () {
            temp ++;
            $("#prog").val(temp);
            if (temp == 100) {
                clearInterval(timer);
            }
        }, 100); 
    });

    $("#pause-btn").click(function(){
        window.clearInterval(timer);
        timer=0;
    });
    $("#reset-btn").click(function(){
        temp = 0;
        $("#prog").val(temp);
    })
})