$(function () {
    var val =$("#age-range").val();
    $("#age").html("你的年龄是" + val + "岁");
    $("#age-range").mouseup(function(){
        var val = $("#age-range").val();
        $("#age").html("你的年龄是" + val + "岁");
    })
    
})