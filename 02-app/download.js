$(function () {
    var temp=0;
    var timer;
    
    $("#begin-btn").click(function () {
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
    });
    $("#reset-btn").click(function(){
        temp = 0;
        $("#prog").val(temp);
    })
})