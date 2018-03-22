$(function () {
    $('.icon').mouseenter(function () {
        $('.icon').css("background-image", "url(eye.png)");
        $('.pwd').attr("type", "text");
    })
    $('.icon').mouseleave(function () {
        $('.icon').css("background-image", "url(eye-close.png)");
        $('.pwd').attr("type", "password");
    })
});