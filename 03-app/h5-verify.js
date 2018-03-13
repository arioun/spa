$(function () {
    var $width = $('#rect-width');
    var $height = $('#rect-height');
    var per = $("#rect-per");
    var area = $("#rect-area");
    

    $('.rect form').submit(function (e) {
        e.preventDefault();         

        var width = Number($width.val());
        var height = Number($height.val());

        per.val(((width+height) * 2).toFixed(3));
        area.val((width *height).toFixed(3));
    });
});